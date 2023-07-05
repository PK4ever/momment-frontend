import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, EMPTY, exhaustMap, map, of} from "rxjs";
import {SignupService} from "../services/signup.service";
import * as _ from "lodash";



@Injectable()
export class SignupEffects {

  signup$ = createEffect(() =>
    this.actions$.pipe(ofType('Signup User'),
    exhaustMap((action) => this.signupService.signupUser(_.get(action, 'credentials')).pipe(
      map(user => ({
        type: 'Signup Success', user
      })),
      catchError((error) => {
        return of({
          type: 'Signup Fail',
          payload: { error }
        });
      })
    ))
    )

  )


  constructor(private actions$: Actions, private signupService: SignupService) {}
}
