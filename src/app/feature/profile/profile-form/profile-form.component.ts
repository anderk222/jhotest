import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UserDetail } from '../model/userdetail';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@jhotest/auth/service/auth.service';
import { UserDetailService } from '../service/userdetail.servide';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'jhotest-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnChanges {

  constructor(
    private fb: FormBuilder,
    private service: UserDetailService,
    private auth: AuthService,
    private snackbar: MatSnackBar
  ) { };


  @Input() detail: UserDetail | null = null;

  form = this.fb.group({

    id: this.fb.control(0, { nonNullable: true }),

    phone: this.fb.control('', {
      nonNullable: true,
      validators: [Validators.maxLength(15), Validators.minLength(10)]
    }),
    fullName: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.minLength(4), Validators.maxLength(200)
        , Validators.required
      ]
    }),
    img: this.fb.control('')

  });


  ngOnChanges(): void {

    if (!this.detail) return;
    this.form.setValue(this.detail);

  }

  public resetForm() {

    if (!this.detail) this.form.reset()
    else this.form.setValue(this.detail);

  }

  public saveOrUpdate() {

    let obsv: Observable<UserDetail> = {} as Observable<any>;

    if (!this.detail) obsv = this.save();
    else obsv = this.update();

    obsv.subscribe({
      next: (res) => {

        this.form.setValue(res);
        this.detail = res;
        this.snackbar.open('Cambios guardados')

      },
      error: () => this.snackbar.open('Error al guardar')
    })

  }


  private save() {

    return this.service.save(this.form.value, this.auth.userId);

  }

  private update() {

    return this.service.update(this.form.value, this.auth.userId);

  }

  get id(): any { return this.form.get('id') };
  get phone(): any { return this.form.get('phone') };
  get fullName(): any { return this.form.get('fullName') };
  get img(): any { return this.form.get('img') };

  set id(value : any) {  this.form.patchValue({id: value}) };
  set phone(value : any) {  this.form.patchValue({phone: value}) };
  set fullName(value : any) {  this.form.patchValue({fullName: value}) };
  set img(value : any) {  this.form.patchValue({img: value}) };

}