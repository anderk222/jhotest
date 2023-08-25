import { NgModule } from '@angular/core';
import { CheckListToolbarComponent } from './check-list-toolbar/check-list-toolbar.component';
import { CardCheckListComponent } from './card-check-list/card-check-list.component';
import { CheckListListComponent } from './check-list-list/check-list-list.component';
import { ModalCheckListComponent } from './modal-check-list/modal-check-list.component';

@NgModule({
  imports: [
    CheckListToolbarComponent,
    CardCheckListComponent,
    CheckListListComponent,
    ModalCheckListComponent],
  exports: [
    CheckListToolbarComponent,
    CardCheckListComponent,
    CheckListListComponent,
    ModalCheckListComponent],
  declarations: [



  ],
  providers: [],
})
export class CheckListSharedModule { }
