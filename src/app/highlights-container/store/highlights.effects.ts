import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, EMPTY, exhaustMap, filter, map, of, switchMap, tap, withLatestFrom} from "rxjs";
import * as _ from "lodash";
import {HighlightsService} from "../services/highlights.service";
import {selectCurrentUser} from "../../login-container/store/login.selectors";
import {LOADCHILDREN} from "../../children-container/store/children.actions";
import {Store} from "@ngrx/store";
import {ChildrenState} from "../../children-container/store/childrenState";
import {getSelectedChild} from "../../children-container/store/children.selectors";
import {LOADHIGHLIGHTS} from "./highlights.actions";


@Injectable()
export class HighlightsEffects {

  loadHighlights$ = createEffect(() =>
    this.actions$.pipe(ofType('Load Highlights'),
    exhaustMap((action) => this.highlightService.getHighlights(_.get(action, 'childId')).pipe(
      map(highlights => ({
        type: 'Load Highlights Success', highlights
      })),
      // catchError(() => EMPTY)
      catchError((errMsg) => {
        return of({
          type: 'Load Highlights Fail',
          payload: { errMsg }
        });
      })
    )))
  )

  saveHighlight$ = createEffect(() =>
    this.actions$.pipe(ofType('Save Highlight'),
      exhaustMap((action) => this.highlightService.saveHighlight(_.get(action, 'highlightRequest')).pipe(
        map(highlights => ({
          type: 'Save Highlight Success', highlights
        })),
        // catchError(() => EMPTY)
        catchError((errMsg) => {
          return of({
            type: 'Save Highlight Fail',
            payload: { errMsg }
          });
        })
      )))
  )

  deleteHighlight$ = createEffect(() =>
    this.actions$.pipe(ofType('Delete Highlight'),
      exhaustMap((action) => this.highlightService.deleteHighlight(_.get(action, 'id')).pipe(
        map((msg) => ({
          type: 'Delete Highlight Success', msg
        })),
        // catchError(() => EMPTY)
        catchError((error) => {
          return of({
            type: 'Delete Highlight Fail',
            payload: { error }
          });
        })
      )))
  )

  selectedChild$ = this.childrenStore.select(getSelectedChild);


  reloadHighlight$ = createEffect( ()  => this.actions$.pipe(
    ofType('Delete Highlight Success'),
    withLatestFrom(this.selectedChild$),
    switchMap(([action, selectedChild ]) =>
      of(
        LOADHIGHLIGHTS({childId: (selectedChild  ? selectedChild.id  : 0) })
      )
    ))
  );






  constructor(private actions$: Actions, private highlightService: HighlightsService, private childrenStore: Store<ChildrenState>) {}
}
