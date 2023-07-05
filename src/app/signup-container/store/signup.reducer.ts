import {createReducer, on} from '@ngrx/store';
import {SignupState} from "./signupState";
import {SIGNUP, SIGNUPFAIL, SIGNUPSUCCESS} from "./signup.actions";

export const initialState: SignupState = {
  isSuccess: false,
  user: {
    name: '',
    email: '',
    emailVerified:  false
  }
};

const reducer= createReducer(initialState,
  on(SIGNUP, (state) => (
    {
      ...state,
      isSuccess: false
    }
  )),
  on(SIGNUPSUCCESS, (state, user ) => (
    {
      ...state,
      ...user,
      isSuccess: true
  }
  )),
  on(SIGNUPFAIL, (state, errMsg) => (
    {
      ...state,
      isSuccess: false,
      errMsg
  }
  )))
export function signupReducer(state: SignupState| undefined, action: any) {
  return reducer(state, action)
}
