import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, EMPTY, exhaustMap, filter, map, of, switchMap, tap, withLatestFrom} from "rxjs";
import {ChildrenService} from "../services/children.service";
import * as _ from "lodash";
import {LoginState, LoginUser} from "../../login-container/login-component/loginState";
import {Store} from "@ngrx/store";
import {selectCurrentUser} from "../../login-container/store/login.selectors";
import {get} from "lodash";
import {LOADCHILDREN} from "./children.actions";



@Injectable()
export class ChildrenEffects {

  loadChildren$ = createEffect(() =>
    this.actions$.pipe(ofType('Load Children'),
    exhaustMap((action) => this.childrenService.getChildrenList(_.get(action, 'id')).pipe(
      map(childrenList => ({
        type: 'Load Children Success', childrenList
      })),
      // catchError(() => EMPTY)
      catchError((error) => {
        return of({
          type: 'Load Children Fail',
          payload: { error }
        });
      })
    )))
  )

  addChild$ = createEffect(() =>
    this.actions$.pipe(ofType('Add Child'),
      exhaustMap((action) => this.childrenService.addChild(_.get(action, 'addChildRequest')).pipe(
        map(childrenList => ({
          type: 'Add Child Success', childrenList
        })),
        // catchError(() => EMPTY)
        catchError((error) => {
          return of({
            type: 'Add Child Fail',
            payload: { error }
          });
        })
      )))
  )

  // editChild$ = createEffect(() =>
  //   this.actions$.pipe(ofType('Edit Child'),
  //     exhaustMap((action) => this.childrenService.editChild(_.get(action, 'addChildRequest')).pipe(
  //       map(childrenList => ({
  //         type: 'Edit Child Success', childrenList
  //       })),
  //       // catchError(() => EMPTY)
  //       catchError((error) => {
  //         return of({
  //           type: 'Edit Child Fail',
  //           payload: { error }
  //         });
  //       })
  //     )))
  // )

  deleteChild$ = createEffect(() =>
    this.actions$.pipe(ofType('Delete Child'),
      exhaustMap((action) => this.childrenService.deleteChild(_.get(action, 'id')).pipe(
        map((msg) => ({
          type: 'Delete Child Success', msg
        })),
        // catchError(() => EMPTY)
        catchError((error) => {
          return of({
            type: 'Delete Child Fail',
            payload: { error }
          });
        })
      )))
  )
  currentUser$ = this.loginStore.select(selectCurrentUser);


  reloadChildren$ = createEffect( ()  => this.actions$.pipe(
    ofType('Delete Child Success'),
    withLatestFrom(this.currentUser$),
    switchMap(([action, currentUser ]) =>
      of(
          LOADCHILDREN({id: (currentUser  ? currentUser.id  : 0) })
      )
    ))
  );





  constructor(private actions$: Actions, private childrenService: ChildrenService, private loginStore: Store<LoginState>) {}
}
