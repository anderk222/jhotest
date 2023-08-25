import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownOpt } from '@jhotest/shared/dropdown/models/option';

@Component({
  selector: 'jhotest-proyect-toolbar',
  templateUrl: './proyect-toolbar.component.html',
  styleUrls: ['./proyect-toolbar.component.css']
})
export class ProyectToolbarComponent {

  @Output() newmodal = new EventEmitter<null>();
  @Input() path = '';
  @Input() contentbtn= 'Nuevo';

}