import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map, of} from "rxjs";
import * as _ from "lodash";
import {LoginService} from "../services/login.service";



@Injectable()
export class LoginEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(ofType('Login'),
      exhaustMap((action) => this.loginService.login(_.get(action, 'loginCredentials')).pipe(
        map(loginState => ({
          type: 'Login Success', loginState
        })),
        catchError((error) => {
          return of({
            type: 'Login Fail',
            message: error
          });
        })
      ))
    )

  )

  constructor(private actions$: Actions, private loginService: LoginService) {}
}
