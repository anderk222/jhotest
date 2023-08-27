import { LoadStatus } from '@jhotest/model/LoadSatus';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loading-table',
  templateUrl: './loading-table.component.html',
  styleUrls: ['./loading-table.component.css']
})
export class LoadingTableComponent implements OnChanges {

  @Input() status : LoadStatus = 'OK';

  message = '';

  ngOnChanges(changes: SimpleChanges): void {}

  photos : { [key in LoadStatus]? : string } = {

    ERROR : '',
    LOAD : '',
    NOTHING : 'assets/nothing.jpeg',

  };

 }