import { NgModule } from '@angular/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [],
    exports: [MatSnackBarModule],
    declarations: [],
    providers: [{provide : MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue : {
        duration : 2500
      }}],
})
export class MatModule { }