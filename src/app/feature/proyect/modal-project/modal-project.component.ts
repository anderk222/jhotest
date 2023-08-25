import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoadStatus } from '@jhotest/model/LoadSatus';
import { ProjectService } from '../services/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../model/project';
import { AuthService } from '@jhotest/auth/auth.service';

@Component({
  selector: 'jhotest-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.css'],
})
export class ModalProjectComponent implements OnInit {

  @Output() action = new EventEmitter<'cancel' | 'ok'>();

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private snackbar: MatSnackBar,
    private routed: ActivatedRoute,
    private auth : AuthService
  ) { }

  project = this.fb.group({

    id: this.fb.control(0, { nonNullable: true, validators: Validators.min(0) }),
    name: this.fb.control('', {
      nonNullable: true,
      validators:
        [Validators.required, Validators.minLength(2), Validators.maxLength(255)]
    }),
    user : this.fb.group({id : this.fb.control(0, { nonNullable : true })}) ,
    img: this.fb.control(''),
    detail: this.fb.control('', { validators: [Validators.min(4)] })

  });

  status: LoadStatus = 'ok';

  ngOnInit(): void {
    this.routed.paramMap.subscribe((params) => {
      this.find(Number(params.get('project')))
    })

  };

  private find(id: number) {

    if (!id) return;
    this.status = 'load';

    this.projectService.findById(id).subscribe({
      next: (res) => {
        this.project.setValue({
          ...res, user : { id : this.auth.userId }
        })
        this.status = 'ok'
      },
      error: (err) => {
        this.status = 'err';
        this.snackbar.open(JSON.stringify(err))
      }
    });
  };

  handlerCancel() {

    this.action.emit('cancel');
    this.project.reset();
  }

  handlerSubmit() {

    this.status = 'load';

    let request: Observable<Project>;


    if (!this.id.value) request = this.save();
    else request = this.update();

    request.subscribe(({

      next: (res) => {
        this.status = 'ok',
        this.action.emit('ok');
        this.project.reset();
      },
      error: (err) => {
        this.status = 'err';
        this.snackbar.open(JSON.stringify(err))
      }
    }));

  }

  private save() {
    this.userId = this.auth.userId;

    return this.projectService.save(this.project.value);

  }

  private update() {
    return this.projectService
      .update(this.id.value, this.project.value);
  }

  get id() { return this.project.get('id') };
  get name() { return this.project.get('name') };
  get img() { return this.project.get('img') };
  get detail() { return this.project.get('detail') };
  get user(){ return this.project.get('user') };
  get userId(): any{ return this.user?.get('id') };

  set id(value: any) { this.project.patchValue({ id: value }) };
  set name(value: any) { this.project.patchValue({ name: value }) };
  set img(value: any) { this.project.patchValue({ img: value }) };
  set detail(value: any) { this.project.patchValue({ detail: value }) };

  set userId(value : any){  this.user?.patchValue({id : value}) };

}