import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jhotest-query-params-table',
  templateUrl: './query-params-table.component.html',
  styleUrls: ['./query-params-table.component.css']
})
export class QueryParamsTableComponent implements OnChanges {

  @Input() query = '';
  private searchparams: URLSearchParams = {} as any;

  @Output() jhochange  = new EventEmitter<string>();

  ngOnChanges(): void {

    this.searchparams = new URLSearchParams(this.query);

  };

  public addNewParameter() {

    this.searchparams.append('new-param', '');

  };

  public handleChangeKey(old_key : string,new_key : string){

    if(old_key === new_key) return;

    let value = this.searchparams.get(new_key) || '';

    this.searchparams.append(new_key, value);
    this.remove(old_key);

    this.jhochange.emit(this.searchparams.toString())    

  }

  public handleChangeValue(key : string, value : string){

    this.searchparams.set(key, value);
    this.jhochange.emit(this.searchparams.toString())    

  }

  public remove(key: string) { this.searchparams.delete(key) };

  get entries() { return this.searchparams.entries() };

}