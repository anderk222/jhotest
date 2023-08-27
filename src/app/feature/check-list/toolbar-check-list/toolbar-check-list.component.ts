import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'jhotest-toolbar-check-list',
  templateUrl: './toolbar-check-list.component.html',
  styleUrls: ['./toolbar-check-list.component.css']
})
export class ToolbarCheckListComponent implements OnChanges {

  @Output() action = new EventEmitter<'submit'>();
  @Output() title = new EventEmitter<string>();

  @Input() name = '';
  @Input() contentbtn ='';
  
  
  ngOnChanges(changes: SimpleChanges): void {
  
  }

}
