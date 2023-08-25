import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownOpt } from '../models/option';

@Component({
  selector: 'jhotest-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input() text = '';

  @Input() options: DropdownOpt[] = [];

  @Input() width = '150px';

  @Output() event = new EventEmitter<any>();

  status = false;

}