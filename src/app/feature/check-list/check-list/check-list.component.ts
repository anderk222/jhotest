import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemGroup } from '../models/checkList';
import { CheckListService } from '../services/check-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadStatus } from '@jhotest/model/LoadSatus';
import { ChecklistItem } from '../models/ChecklistItem';
import { ActivatedRoute } from '@angular/router';

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
    created: this.fb.control(''),
    edited: this.fb.control(''),
    items: this.fb.array<ItemGroup>([])
  });

  status: LoadStatus = 'ok';

  ngOnInit(): void {
    this.route.params.subscribe(params => this.findById(params['checklist']))

  }

  handleSubmit() {
    console.log(this.checklist.value)
  }

  private findById(id: number | string) {
    this.status = 'load';
    this.checklistService.findById(id).subscribe({
      next: (res) => {
        this.checklist.setValue({
          ...res, items: []
        });

        this.addItems(res.items);
        this.status = 'ok';
      },
      error: (err) => {

        this.snackbar.open(JSON.stringify(err))
        this.status = 'err'
      }
    });

  }


  private addItem(item: ChecklistItem) {
    this.items.getRawValue()

    this.items.push(this.fb.group({
      id: this.fb.control(item.id),
      question: this.fb.control(item.question),
      answer: this.fb.control(item.answer),
      comment: this.fb.control(item.comment)

    }))
  }

  public addEmptyItem() {
    this.addItem({
      id: 0,
      answer: false,
      comment: '',
      question: 'New test'
    })
  }

  private addItems(items: ChecklistItem[]) { for (let item of items) this.addItem(item) }

  get items() { return this.checklist.get('items') as FormArray<ItemGroup> };
  get name(): any { return this.checklist.get('name') };

  set name(value: any) { this.checklist.patchValue({ name: value }) };

}