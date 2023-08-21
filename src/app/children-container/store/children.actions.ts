import {createAction, props} from '@ngrx/store';
import {AddChildRequest, Child} from "./childrenState";

export const  LOADCHILDREN = createAction('Load Children', props<{ id: number }>());
export const  loadChildrenSuccess = createAction('Load Children Success',
  props<{childrenList: Child[]}>
);
export const  loadChildrenFail = createAction('Load Children Fail',
  props<{errMsg: string}>);

export const  ADDCHILD = createAction('Add Child', props<{ addChildRequest: AddChildRequest }>());
export const  ADDCHILDSUCCESS = createAction('Add Child Success',
  props<{childrenList: Child[]}>
);
export const  ADDCHILDFAIL = createAction('Add Child Fail',
  props<{errMsg: string}>);

// export const  EDITCHILD = createAction('Edit Child', props<{ addChildRequest: AddChildRequest }>());
// export const  EDITCHILDSUCCESS = createAction('Edit Child Success',
//   props<{childrenList: Child[]}>
// );
// export const  EDITCHILDFAIL = createAction('Edit Child Fail',
//   props<{errMsg: string}>);

export const  DELETECHILD = createAction('Delete Child', props<{ id: string }>());
export const  DELETECHILDSUCCESS = createAction('Delete Child Success',
  props<{childrenList: Child[]}>
);
export const  DELETECHILDFAIL = createAction('Delete Child Fail',
  props<{errMsg: string}>);

export const  SETSELECTEDCHILD = createAction('Set Selected Child',
  props<{selectedChild: Child}>()
);
