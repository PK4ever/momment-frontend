import {createReducer, on} from '@ngrx/store';
import {SignupState} from "./signupState";
import {CLEARSIGNUPSTATE, SIGNUP, SIGNUPFAIL, SIGNUPSUCCESS} from "./signup.actions";

export const initialState: SignupState = {
  isSuccess: false,
  // user: {
  //   name: '',
  //   email: '',
  //   isEnabled:  false
  // }
  user: undefined
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
  )),
  on(CLEARSIGNUPSTATE, (state) => (
    {
    ...initialState
  }
  ))
  )
export function signupReducer(state: SignupState| undefined, action: any) {
  return reducer(state, action)
}
