import { Injectable } from '@angular/core';
import { Pagination } from '@jhotest/model/pagination';
import { CheckListProjection } from '../models/checkList';

@Injectable({
  providedIn: 'root'
})
export class CheckListStoreService {

  public pagination: Pagination<CheckListProjection> = {
    data: [],
    limit: 10,
    page: 0,
    totalItems: 0,
    totalPages: 0

  };

  public removeItem(id: number) {


    this.pagination.data = this.data
      .filter(checklist => checklist.id !== id);

    this.pagination.totalItems--;

  };

  public addItem(checklist: CheckListProjection) {

    this.pagination.data.push(checklist);

    this.pagination.totalItems++;

  };

  public replaceItem(checklist: CheckListProjection) {

    let index = this.data
      .findIndex(v => v.id == checklist.id);

    this.pagination.data[index] = checklist;
  }

  public replaceOrAddItem(checklist : CheckListProjection){

    let exits = this.data.some(v=>v.id===checklist.id);

    if(exits) this.replaceItem(checklist)
    else this.addItem(checklist)

  }

  get data() : CheckListProjection[]{return this.pagination.data};

}
