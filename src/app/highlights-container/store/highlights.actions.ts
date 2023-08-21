import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import {Highlight, HighlightRequest} from "./highlightsState";

export const  LOADHIGHLIGHTS = createAction('Load Highlights', props<{ childId: any }>());
export const  LOADHIGHLIGHTSSUCCESS = createAction('Load Highlights Success',
  props<{highlights: Highlight[]}>
);
export const  LOADHIGHLIGHTSFAIL = createAction('Load Highlights Fail',
  props<{errMsg: string}>);


export const  SAVEHIGHLIGHT = createAction('Save Highlight', props<{ highlightRequest: HighlightRequest }>());
export const  SAVEHIGHLIGHTSUCCESS = createAction('Save Highlight Success',
  props<{highlightList: Highlight[]}>
);
export const  SAVEHIGHLIGHTFAIL = createAction('Save Highlight Fail',
  props<{errMsg: string}>);

export const  DELETEHIGHLIGHT = createAction('Delete Highlight', props<{ id: string }>());
export const  DELETEHIGHLIGHTSUCCESS = createAction('Delete Highlight Success',
  props<{highlightList: Highlight[]}>
);
export const  DELETEHIGHLIGHTFAIL = createAction('Delete Highlight Fail',
  props<{errMsg: string}>);
