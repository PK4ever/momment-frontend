import { createReducer, on } from '@ngrx/store';
import {LOGINFAIL, LOGINSUCCESS, LOGOUT} from './login.actions';
import {LoginState} from "../login-component/loginState";

export const loginFeatureKey = 'login';

export const initialState: LoginState = {
  status: false,
  user: undefined,
  message: ''
};

export const loginReducer = createReducer(
  initialState,

  on(LOGINSUCCESS, (state, loginState ) => (
    {
      ...state,
      ...loginState.loginState
    }
  )),
  on(LOGINFAIL, (state, message) => (
    {
      ...state,
      status: false,
      ...message
    }
  )),
  on(LOGOUT, (state) => (
    {
      ...state,
      ...initialState
    }
  ))
);

