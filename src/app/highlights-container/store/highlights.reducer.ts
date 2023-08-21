import {createReducer, on} from '@ngrx/store';
import {
  SAVEHIGHLIGHTFAIL,
  SAVEHIGHLIGHTSUCCESS,
  DELETEHIGHLIGHTFAIL,
  DELETEHIGHLIGHTSUCCESS,
  LOADHIGHLIGHTS,
  LOADHIGHLIGHTSFAIL,
  LOADHIGHLIGHTSSUCCESS

} from "./highlights.actions";
import {HighlightsState} from "./highlightsState";

export const initialState: HighlightsState = {
  highlights: [],
  isLoading: false,
  errMsg: ''
};

const reducer= createReducer(initialState,
  on(LOADHIGHLIGHTS, (state) => (
    {
      ...state,
      isLoading: true
    }
  )),
  on(LOADHIGHLIGHTSSUCCESS, (state, highlights ) => (
    {
      ...state,
      ...highlights,
      isLoading: false
  }
  )),
  on(LOADHIGHLIGHTSFAIL, (state, errMsg) => (
    {
      ...state,
      isLoading: false,
      ...errMsg
  }
  )),
  on(SAVEHIGHLIGHTSUCCESS, (state, highlights ) => (
    {
      ...state,
      ...highlights,
      isLoading: false
    }
  )),
  on(SAVEHIGHLIGHTFAIL, (state, errMsg) => (
    {
      ...state,
      isLoading: false,
      ...errMsg
    }
  )),
  // on(EDITHIGHLIGHTSUCCESS, (state, highlights ) => (
  //   {
  //     ...state,
  //     ...highlights,
  //     isLoading: false
  //   }
  // )),
  // on(EDITHIGHLIGHTFAIL, (state, errMsg) => (
  //   {
  //     ...state,
  //     isLoading: false,
  //     ...errMsg
  //   }
  // )),
  on(DELETEHIGHLIGHTSUCCESS, (state, highlights ) => (
    {
      ...state,
      ...highlights,
      isLoading: false
    }
  )),
  on(DELETEHIGHLIGHTFAIL, (state, errMsg) => (
    {
      ...state,
      isLoading: false,
      ...errMsg
    }
  ))
)
export function highlightsReducer(state: HighlightsState| undefined, action: any) {
  return reducer(state, action)
}
