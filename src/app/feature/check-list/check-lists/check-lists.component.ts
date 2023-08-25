import { Component } from '@angular/core';
import { CheckListStoreService } from '../services/check-list-store.service';

@Component({
  selector: 'jhotest-check-lists',
  templateUrl: './check-lists.component.html',
  styleUrls: ['./check-lists.component.css']
})
export class CheckListsComponent {
  constructor( public store : CheckListStoreService){}

}
