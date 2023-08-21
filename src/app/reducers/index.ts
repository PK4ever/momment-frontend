import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {ChildrenState} from "../children-container/store/childrenState";
import {childrenReducer} from "../children-container/store/children.reducer";
import {SignupState} from "../signup-container/store/signupState";
import {signupReducer} from "../signup-container/store/signup.reducer";
import {localStorageSync} from "ngrx-store-localstorage";
import {SIGNUPFAIL, SIGNUPSUCCESS} from "../signup-container/store/signup.actions";
import {LoginState} from "../login-container/login-component/loginState";
import {loginReducer} from "../login-container/store/login.reducer";
import {HighlightsState} from "../highlights-container/store/highlightsState";
import {highlightsReducer} from "../highlights-container/store/highlights.reducer";

export interface AppState {
  children: ChildrenState,
  signup: SignupState,
  login: LoginState,
  highlight: HighlightsState
}

export const appReducers: ActionReducerMap<AppState> = {
  children: childrenReducer,
  signup: signupReducer,
  login: loginReducer,
  highlight: highlightsReducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
