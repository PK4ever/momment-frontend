import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';

export const  loadChildren = createAction('Load Children');
export const  loadChildrenSuccess = createAction('Load Children Success',
  props<{childrenList: any[]}>
);
export const  loadChildrenFail = createAction('Load Children Fail',
  props<{errMsg: string}>);


