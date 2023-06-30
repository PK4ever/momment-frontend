import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ChildrenState} from "./children.reducer";

export const selectChildren = (state: ChildrenState) => state.childrenList;
