import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '@jhotest/enviroment/env';
import { Pageable, Pagination } from '@jhotest/model/pagination';
import { CheckList, CheckListProjection, SortScheckListSave } from '../models/checkList';

@Injectable({
  providedIn: 'root'
})
export class CheckListService {

  constructor(private http: HttpClient) { }

  private url = env.host + '/check_list'

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public projection(project: number, opt: Pageable) {

    let url = `${this.url}/${project}/project/projection`;
    url += `?page=${opt.page}&limit=${opt.limit}`;

    return this.http.get<Pagination<CheckListProjection>>(url);

  }

  public saveSort(value : Partial<SortScheckListSave>){

    return this.http.post<any>(this.url, value , { headers : this.headers })

  }

  public findById(id : number | string){

    return this.http.get<CheckList>(`${this.url}/${id}`, { headers : this.headers })

  }

}