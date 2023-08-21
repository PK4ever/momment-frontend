import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Credentials, User} from "../store/signupState";


@Injectable({
  providedIn: 'root'
})
export class SignupService {
private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = '/api/user/';
  }

  public signupUser(credential: Credentials): Observable<User> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(credential);
    return this.http.post<User>(this.baseUrl+'signup',body, {"headers": headers})
  }
}
