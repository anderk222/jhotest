import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownOpt } from '../models/option';

@Component({
  selector: 'jhotest-dropdown-selection',
  templateUrl: './dropdown-selection.component.html',
  styleUrls: ['./dropdown-selection.component.css']
})
export class DropdownSelectionComponent {

  @Input() text = '';

  @Input()   options : DropdownOpt[] = [

    {
      text : 'fecha edicion',
      value : 'ed',
    },
    {
      text : 'fecha de creacion',
      value : 'ec',
    },
    {
      text : 'Nombre',
      value : 'name'
    }

  ];
;

  @Input() width = '150px';

  @Output() event = new EventEmitter<{select : boolean, value : any}>();

  status = false;

}
