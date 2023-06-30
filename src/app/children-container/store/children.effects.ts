import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, EMPTY, exhaustMap, map, of} from "rxjs";
import {ChildrenService} from "../services/children.service";



@Injectable()
export class ChildrenEffects {

  loadChildren$ = createEffect(() =>
    this.actions$.pipe(ofType('Load Children'),
    exhaustMap(() => this.childrenService.getChildrenList().pipe(
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
    ))
    )

  )


  constructor(private actions$: Actions, private childrenService: ChildrenService) {}
}
