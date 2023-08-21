import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ChildrenState} from "./childrenState";



export const featureKey = 'children';

export const childrenFeature = createFeatureSelector<ChildrenState>(featureKey);
export const selectChildren = createSelector(childrenFeature, (state: ChildrenState) => state.childrenList);

export const getSelectedChild = createSelector(childrenFeature, (state: ChildrenState) => state.selectedChild);


