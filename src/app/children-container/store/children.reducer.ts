import {createReducer, on} from '@ngrx/store';
import {
  ADDCHILDFAIL,
  ADDCHILDSUCCESS, DELETECHILDFAIL, DELETECHILDSUCCESS,
  LOADCHILDREN,
  loadChildrenFail,
  loadChildrenSuccess, SETSELECTEDCHILD
} from "./children.actions";
import {ChildrenState} from "./childrenState";

export const initialState: ChildrenState = {
  childrenList: [],
  isLoading: false,
  selectedChild: {
    name: '',
    dob: '',
    id: undefined
  },
  errMsg: null
};

const reducer= createReducer(initialState,
  on(LOADCHILDREN, (state) => (
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
  )),
  on(ADDCHILDSUCCESS, (state, childrenList ) => (
    {
      ...state,
      ...childrenList,
      isLoading: false
    }
  )),
  on(ADDCHILDFAIL, (state, errMsg) => (
    {
      ...state,
      isLoading: false,
      errMsg
    }
  )),
  // on(EDITCHILDSUCCESS, (state, childrenList ) => (
  //   {
  //     ...state,
  //     ...childrenList,
  //     isLoading: false
  //   }
  // )),
  // on(EDITCHILDFAIL, (state, errMsg) => (
  //   {
  //     ...state,
  //     isLoading: false,
  //     errMsg
  //   }
  // )),
  on(DELETECHILDSUCCESS, (state, childrenList ) => (
    {
      ...state,
      ...childrenList,
      isLoading: false
    }
  )),
  on(DELETECHILDFAIL, (state, errMsg) => (
    {
      ...state,
      isLoading: false,
      errMsg
    }
  )),
  on(SETSELECTEDCHILD, (state, selectedChild) => (
    {
      ...state,
      ...selectedChild
    }
  ))

)
export function childrenReducer(state: ChildrenState| undefined, action: any) {
  return reducer(state, action)
}
