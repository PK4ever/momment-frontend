import {createReducer, on} from '@ngrx/store';
import {loadChildren, loadChildrenFail, loadChildrenSuccess} from "./children.actions";
import {ChildrenState} from "./childrenState";

export const initialState: ChildrenState = {
  childrenList: [],
  isLoading: false,
  errMsg: null
};

const reducer= createReducer(initialState,
  on(loadChildren, (state) => (
    {
      ...state,
      isLoading: true
    }
  )),
  on(loadChildrenSuccess, (state, childrenList ) => (
    {
      ...state,
      ...childrenList,
      isLoading: false
  }
  )),
  on(loadChildrenFail, (state, errMsg) => (
    {
      ...state,
      isLoading: false,
      errMsg
  }
  )))
export function childrenReducer(state: ChildrenState| undefined, action: any) {
  return reducer(state, action)
}
