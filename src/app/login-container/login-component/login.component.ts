import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {LoginState} from "./loginState";
import * as _ from "lodash";
import {LOGIN} from "../store/login.actions";
import {getLoginState} from "../store/login.selectors";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm = new FormGroup({
    login_email: new FormControl(''),
    login_password: new FormControl('')
  });

  loginState$ = this.loginStore.select(getLoginState);


  constructor(private loginStore: Store<LoginState>, private router: Router) {
  }

  ngOnInit() {
    // this.loginState$.subscribe((loginState)  => {
    //   if (loginState.status && loginState.user) {
    //     this.router.navigate(['/children']);
    //   }
    // });
  }

  login()  {
    let loginCredentials: any = {
      email: _.get(this.loginForm.value, 'login_email'),
      password: _.get(this.loginForm.value, 'login_password')
    }
    this.loginStore.dispatch(LOGIN({loginCredentials}))
  }

  ngOnDestroy() {
  }
}
