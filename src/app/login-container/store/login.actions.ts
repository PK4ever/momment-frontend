import {LoginCredentials, LoginState, LoginUser} from "../login-component/loginState";
import {createAction, props} from "@ngrx/store";

export const  LOGIN = createAction('Login',
  props<{loginCredentials: LoginCredentials}>()
);

export const  LOGINSUCCESS = createAction('Login Success',
  props<{loginState: LoginState}>()
);
export const  LOGINFAIL = createAction('Login Fail',
  props<{errMsg: string}>());

export const  LOGOUT = createAction('Logout');
