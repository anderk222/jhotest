import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CheckListsComponent } from './check-lists/check-lists.component';
import { ToolbarCheckListComponent } from './toolbar-check-list/toolbar-check-list.component';
import { CardCheckListComponent } from '@jhotest/shared/check-list/card-check-list/card-check-list.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckListItemComponent } from './check-list-item/check-list-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Route[] = [

  {
    path : ':checklist',
    component : CheckListComponent
  }

];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
      CardCheckListComponent,
      CommonModule,
      FormsModule,
    ReactiveFormsModule
    ],
    exports: [],
    declarations: [
    CheckListsComponent,
    ToolbarCheckListComponent,
    CheckListComponent,
    CheckListItemComponent
  ],
    providers: [],
})
export class CheckListModule { }
