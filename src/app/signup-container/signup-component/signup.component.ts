import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Credentials} from "../store/signupState";
import {Store} from "@ngrx/store";
import {SIGNUP} from "../store/signup.actions";
import * as _ from "lodash";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    // lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private signupStore: Store) {}

  signup()  {
    // let name = _.get(this.signupForm.value, 'firstName') + ' ' + _.get(this.signupForm.value, 'lastName');
    let name = _.get(this.signupForm.value, 'firstName');
    let email = _.get(this.signupForm.value, 'email');
    let password =  _.get(this.signupForm.value, 'password');

    let credentials: Credentials =  {
      name: name,
      email: email,
      password: password
    }
    this.signupStore.dispatch(SIGNUP({credentials}))
  }
}
