import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CheckListProjection, StatusCheckList
} from '@jhotest/feature/check-list/models/checkList';

@Component({
  selector: 'jhotest-card-check-list',
  templateUrl: './card-check-list.component.html',
  styleUrls: ['./card-check-list.component.css'],
  standalone: true,
  imports : [RouterModule]
})
export class CardCheckListComponent {

  @Input() checklist: CheckListProjection = {
    id: 0,
    name: '',
    edited: '',
    status: StatusCheckList.process
  }

  @Input() project = 'BE';

  @Output() delete = new EventEmitter<number>();

}