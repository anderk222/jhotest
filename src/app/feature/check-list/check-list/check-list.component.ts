import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ItemGroup, SaveChecklist } from '../models/checkList';
import { CheckListService } from '../services/check-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadStatus } from '@jhotest/model/LoadSatus';
import { ChecklistItem } from '../models/ChecklistItem';
import { ActivatedRoute } from '@angular/router';
import { TestCase, TestCaseGroup } from '@jhotest/feature/test-case/models';

@Component({
  selector: 'jhotest-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})

export class CheckListComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private checklistService: CheckListService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  checklist = this.fb.group({
    id: this.fb.control(0, { nonNullable: true }),
    name: this.fb.control('', {
      nonNullable: true, validators:
        [Validators.minLength(3), Validators.required]
    }),
    status: this.fb.control('proccess', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    created: this.fb.control('', { nonNullable: true }),
    edited: this.fb.control('', {}),
    items: this.fb.array<ItemGroup>([])
  });

  status: LoadStatus = 'OK';
  index: string[] = []

  ngOnInit(): void {

    this.route.params.subscribe(params => this.findById(params['checklist']))

  }

  @HostListener('document:keydown', ['$event'])
  handleSaveShortCut(e: KeyboardEvent) {
    if (e.ctrlKey && e.key == 's') {
      e.preventDefault();
      this.handleSubmit()
    }

  }

  handleSubmit() {

    if (this.checklist.invalid) return;

    this.update(this.checklist.value);
  }

  private update(data: Partial<SaveChecklist>) {

    this.checklistService.update(data).subscribe({

      next: () => this.snackbar.open('Cambios salvados'),
      error: (err) => this.snackbar.open(JSON.stringify(err))
    })

  }

  private findById(id: number | string) {
    this.status = 'LOAD';
    this.checklistService.findById(id).subscribe({
      next: (res) => {
        this.checklist.setValue({
          ...res, items: []
        });
        this.index = this.generateIndex(res.items);

        this.addItems(res.items);
        this.status = 'OK';
      },
      error: (err) => {

        this.snackbar.open(JSON.stringify(err))
        this.status = 'ERROR'
      }
    });

  }

  private addItem(item: ChecklistItem) {

    let caseformarray = this.generateCaseArrayForm(item.testCases);

    this.items.push(this.fb.group({
      id: this.fb.control(item.id, { nonNullable: true }),
      question: this.fb.control(item.question, { nonNullable: true }),
      passed: this.fb.control(item.passed, { nonNullable: true }),
      comment: this.fb.control(item.comment),
      testCases: caseformarray

    }))
  }

  public addEmptyItem() {
    this.addItem({
      id: 0,
      passed: false,
      comment: '',
      question: 'New test',
      testCases: []
    })
  }

  private generateCaseArrayForm(cases: TestCase[]) {

    let formarray = this.fb.array<TestCaseGroup>([]);

    for (let testcase of cases) formarray.push(this.fb.group({

      id: this.fb.control(testcase.id, { nonNullable: true }),
      name: this.fb.control(testcase.name, { nonNullable: true }),
      detail: this.fb.control(testcase.detail, { nonNullable: true }),
      parameters: this.fb.control(testcase.parameters),
      passed: this.fb.control(testcase.passed, { nonNullable: true })

    }));

    return formarray;

  }

  private generateIndex = (items: ChecklistItem[]) => items.map((v, i) => `${i + 1}.- ${v.question}`)


  private addItems(items: ChecklistItem[]) { for (let item of items) this.addItem(item) }

  get items() { return this.checklist.get('items') as FormArray<ItemGroup> };
  get name(): any { return this.checklist.get('name') };

  set name(value: any) { this.checklist.patchValue({ name: value }) };
}