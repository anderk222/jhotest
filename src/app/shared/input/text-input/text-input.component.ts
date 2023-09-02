import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'jhotest-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent {

  @Input() control : FormControl<any> = { } as any;
  @Input() class = '';

  edit = false;

}