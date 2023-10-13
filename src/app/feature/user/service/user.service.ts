import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "@jhotest/enviroment/env";
import { User } from "../model/user";
import { Pagination } from "@jhotest/model/pagination";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) { };

    private url = env.host + '/user'; 

    public find(id: number) {

        return this.http.get<User>(`${this.url}/${id}`);

    }

    public search(value : string){

        return this.http.get<Pagination<User>>(`${this.url}/search?value=${value}`);

    }

    public findBySharedProject(projectId : number){

        return this.http.get<User[]>(`${this.url}/findBySharedProject/${projectId}`);

    }
}