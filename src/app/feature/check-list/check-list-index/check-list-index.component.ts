import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'jhotest-check-list-index',
  templateUrl: './check-list-index.component.html',
  styleUrls: ['./check-list-index.component.css']
})
export class CheckListIndexComponent implements OnChanges {

  @Input() index : string[]= [];

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
