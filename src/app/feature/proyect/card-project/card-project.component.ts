import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../model/project';
import { ModalService } from '@jhotest/store/modal.service';

@Component({
  selector: 'jhotest-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {

  constructor(public modal: ModalService) { }

  @Input() project: Project = {
    id: 0,
    name: '',
    detail: '',
    img: ''
  }

  @Output() remove = new EventEmitter<number>();



}