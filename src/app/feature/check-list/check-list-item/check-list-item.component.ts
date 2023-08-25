import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemGroup } from '../models/checkList';

@Component({
  selector: 'jhotest-check-list-item',
  templateUrl: './check-list-item.component.html',
  styleUrls: ['./check-list-item.component.css']
})
export class CheckListItemComponent {

  edit = false;
  showComment = false;

  @Input() idx =  0;
  @Input() item: ItemGroup = {} as ItemGroup;
  @Output() delete = new EventEmitter<number>();

  get id(): any { return this.item.get('id')};
  get question (): any {return this.item.get('question') };
  get answer (): any { return this.item.get('answer') };
  get comment (): any { return this.item.get('comment') };

  set id(value: any) {  this.item.patchValue({id : value})};
  set question (value: any) { this.item.patchValue({question : value}) };
  set answer (value: any) {  this.item.patchValue({answer : value}) };
  set comment (value: any) {  this.item.patchValue({comment : value}) };

}