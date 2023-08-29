import { NgModule } from '@angular/core';
import { ProyectsComponent } from './proyects/proyects.component';
import { ProyectToolbarComponent } from './proyect-toolbar/proyect-toolbar.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { ModalProjectComponent } from './modal-project/modal-project.component';
import { CommonModule } from '@angular/common';
import { ProjectStoreService } from './services/project-store.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogSharedModule } from '@jhotest/shared/dialog/dialog-shared.module';
import { ModalService } from '@jhotest/store/modal.service';
import { ProjectComponent } from './project/project.component';
import {
  CheckListListComponent
} from '@jhotest/shared/check-list/check-list-list/check-list-list.component';
import { DropdownSharedModule } from '@jhotest/shared/dropdown/dropdown-shared.module';
import { CheckListToolbarComponent } from '@jhotest/shared/check-list/check-list-toolbar/check-list-toolbar.component';
import { ProjectRoutingModule } from './project-routing.module';
import { LoadingTableComponent } from '@jhotest/shared/load/loading-table/loading-table.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogSharedModule,
    CheckListListComponent,
    DropdownSharedModule,
    CheckListToolbarComponent,
    ProjectRoutingModule,
    LoadingTableComponent
  ],
  exports: [],
  declarations: [
    ProyectsComponent,
    ProyectToolbarComponent,
    CardProjectComponent,
    ModalProjectComponent,
    ProjectComponent,
  ],
  providers: [ProjectStoreService, ModalService],
})
export class ProyectModule { }
