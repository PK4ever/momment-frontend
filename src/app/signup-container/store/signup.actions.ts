import {createAction, props} from '@ngrx/store';
import {Credentials, User} from "./signupState";

export const  SIGNUP = createAction('Signup User',
  props<{credentials: Credentials}>()
  );

export const  SIGNUPSUCCESS = createAction('Signup Success',
  props<{user: User}>()
);
export const  SIGNUPFAIL = createAction('Signup Fail',
  props<{errMsg: string}>());

