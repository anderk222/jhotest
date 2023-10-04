import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "@jhotest/enviroment/env";
import { UserDetail } from "../model/userdetail";


@Injectable({ providedIn: 'root' })

export class UserDetailService {

    constructor(private http: HttpClient) { }

    private url = env.host + '/userdetail'

    private headers = new HttpHeaders({
        'Content-type': 'application/json'
    })


    public save(user: Partial<UserDetail>, userId: number) {

        return this.http
            .post<UserDetail>(`${this.url}/complete/${userId}/user`, user, { headers: this.headers });

    }

    public update(user: Partial<UserDetail>, userId: number) {

        return this.http.put<UserDetail>(`${this.url}/${userId}`, user, { headers: this.headers });

    }
}