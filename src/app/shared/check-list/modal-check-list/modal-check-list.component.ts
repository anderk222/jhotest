import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, SkipSelf } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SortScheckListSave } from '@jhotest/feature/check-list/models/checkList';
import { CheckListStoreService } from '@jhotest/feature/check-list/services/check-list-store.service';
import { CheckListService } from '@jhotest/feature/check-list/services/check-list.service';
import { ProjectStoreService } from '@jhotest/feature/proyect/services/project-store.service';
import { ProjectService } from '@jhotest/feature/proyect/services/project.service';
import { LoadStatus } from '@jhotest/model/LoadSatus';

@Component({
  selector: 'jhotest-modal-check-list',
  templateUrl: './modal-check-list.component.html',
  styleUrls: ['./modal-check-list.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule]
})
export class ModalCheckListComponent implements OnInit, OnChanges {

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    @SkipSelf() private projectStore: ProjectStoreService,
    private store : CheckListStoreService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private service: CheckListService
  ) { }

  checklist = this.fb.group({

    name: this.fb.control('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    proyect: this.fb.group({
      id: this.fb.control(0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(1)]
      })
    })

  });

  status: LoadStatus = 'OK';

  @Output() action = new EventEmitter<'cancel' | 'ok'>();

  ngOnChanges(changes: SimpleChanges): void { };


  ngOnInit() {

    this.route.queryParamMap.subscribe((params) => {

      this.findProject(Number(params.get('project')));

    });

  }

  findProject(id: number) {

    let project = this.projectStore.find(id);
    

    if (!!project) return this.projectId = id;

    this.status = 'LOAD';

    this.projectService.findById(id).subscribe({

      next: (res) => {
        this.projectId = res.id;
        this.status = 'OK';
      },
      error: (err) => {
        this.snackbar.open(JSON.stringify(err))
        this.status = 'ERROR'
      }

    });

  };

  public handlerSubmit() {

    this.save(this.checklist.value);

  }

  private save(checklist: Partial<SortScheckListSave>) {

    this.status = 'LOAD';

    this.service.saveSort(checklist).subscribe({
      next: (res) => {
        this.status = 'OK'
        console.log(this.store.pagination);
        
        this.store.addItem(res);
        this.snackbar.open('lista de chequeo guardada');
        this.action.emit('ok');

      },
      error: (err) => {
        this.status = 'ERROR'
        this.snackbar.open(JSON.stringify(err))
      }

    });
  }

  public handlerCancel() {

    this.checklist.reset();
    this.action.emit('cancel');

  }

  get project(): any { return this.checklist.get('proyect') };
  get projectId(): any { return this.project.get('id') };
  get name(): any { return this.checklist.get('name') };

  set project(value: any) { this.project.setValue(value) }
  set projectId(value: any) { this.project.patchValue({ id: value }) }
  set name(value: any) { this.checklist.patchValue({ name: value }) };

}