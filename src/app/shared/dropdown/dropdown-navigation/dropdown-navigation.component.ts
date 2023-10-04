import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownNavOpt } from '../models/option';

@Component({
  selector: 'jhotest-dropdown-navigation',
  templateUrl: './dropdown-navigation.component.html',
  styleUrls: ['./dropdown-navigation.component.css'],
  standalone : true,
  imports:[CommonModule, RouterModule]
})
export class DropdownNavigationComponent {

  @Input() text = '';

  @Input() options: DropdownNavOpt[] = [];

  @Input() width = '150px';

  @Input() jhoClass = '';


  status = false;
}