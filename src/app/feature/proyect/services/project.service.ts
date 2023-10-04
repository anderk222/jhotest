import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { env } from '@jhotest/enviroment/env';
import { optsearch, Pageable, Pagination } from '@jhotest/model/pagination';
import { Project, Projectsort } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  private url = env.host + '/proyect'

  private header = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public findSome(user: number, opt : Pageable) {

    let url = `${this.url}/${user}/user?page=${opt.page}&limit=${opt.limit}`;

    this.http.get<Pagination<Project>>(url);

  }

  public findSomeSort(user: number, opt : Pageable) {

    let url = `${this.url}/${user}/user/sort?page=${opt.page}&limit=${opt.limit}`

    return this.http.get<Projectsort[]>(url);

  }

  public search(user: number, opt : optsearch) {

    let url = `${this.url}/search/${user}/user`;
    url += `?value=${opt.value}&page=${opt.page}&limit=${opt.limit}`;

    return this.http.get<Pagination<Project>>(url);

  }

  public findById(id: number) {
    return this.http.get<Project>(`${this.url}/${id}`);

  }

  public save(project: Partial<Project>) {

    return this.http.post<Project>(`${this.url}`,
      project, { headers: this.header });

  }

  public update(id: number, project: Partial<Project>) {

    return this.http.put<Project>(`${this.url}/${id}`,
      project, { headers: this.header });

  }

  public delete(id : number){

    return this.http.delete<Project>(`${this.url}/${id}`);

  };

  public addUser(id : number){

    return this.http.get(`${this.url}/adduser/${id}`)

  }
}