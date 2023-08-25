import { Component, Self } from '@angular/core';
import { DropdownSharedModule } from '@jhotest/shared/dropdown/dropdown-shared.module';
import { ModalCheckListComponent } from '../modal-check-list/modal-check-list.component';
import { ModalService } from '@jhotest/store/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jhotest-check-list-toolbar',
  templateUrl: './check-list-toolbar.component.html',
  styleUrls: ['./check-list-toolbar.component.css'],
  standalone : true,
  imports : [DropdownSharedModule, ModalCheckListComponent, CommonModule],
  providers : [ ModalService ]
})
export class CheckListToolbarComponent {

  constructor(@Self() public modal : ModalService){ }

}