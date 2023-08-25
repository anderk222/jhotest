import { Injectable } from '@angular/core';
import { Pagination } from '@jhotest/model/pagination';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectStoreService {

  public pagination: Pagination<Project> = {
    data: [],
    limit: 10,
    page: 0,
    totalItems: 0,
    totalPages: 0

  };

  public project : Project = {
    id : 0,
    detail : '',
    img : '',
    name : ''
  } 

  public removeItem(id: number) {


    this.pagination.data = this.data
      .filter(project => project.id !== id);

    this.pagination.totalItems--;

  };

  public addItem(project: Project) {

    this.pagination.data.push(project);

    this.pagination.totalItems++;

  };

  public replaceItem(project: Project) {

    let index = this.data
      .findIndex(v => v.id == project.id);

    this.pagination.data[index] = project;
  }

  public replaceOrAddItem(project : Project){

    let exits = this.data.some(v=>v.id===project.id);

    if(exits) this.replaceItem(project)
    else this.addItem(project)

  }

  public find(id : number){

    return this.data.find(v=>v.id===id);

  }

  get data() : Project[]{return this.pagination.data};

}