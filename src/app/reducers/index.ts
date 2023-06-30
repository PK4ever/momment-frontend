import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {ChildrenState} from "../children-container/store/childrenState";
import {childrenReducer} from "../children-container/store/children.reducer";

export interface AppState {
  children: ChildrenState
}

export const appReducers: ActionReducerMap<AppState> = {
  children: childrenReducer
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
