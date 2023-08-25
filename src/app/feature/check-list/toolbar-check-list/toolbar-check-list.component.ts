import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jhotest-toolbar-check-list',
  templateUrl: './toolbar-check-list.component.html',
  styleUrls: ['./toolbar-check-list.component.css']
})
export class ToolbarCheckListComponent {

  @Output() action = new EventEmitter<'submit'>();

  @Input() name = '';

  @Input() contentbtn ='';

}
