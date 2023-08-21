import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {LoginCredentials, LoginState, LoginUser} from "../login-component/loginState";
import {HttpClient} from "@angular/common/http";
import {User} from "../../signup-container/store/signupState";
import {setOffsetToUTC} from "ngx-bootstrap/chronos/units/offset";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = '/api/user/';
  }

  login(loginCredentials:  LoginCredentials): Observable<LoginState> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(loginCredentials);
    return this.http.post<LoginState>(this.baseUrl+'login',body, {"headers": headers});
  }
}
