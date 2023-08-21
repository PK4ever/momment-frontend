import {SignupState} from "./signupState";
import {createFeatureSelector, createSelector, State} from "@ngrx/store";

export const featureKey = 'signup';

export const signupFeature = createFeatureSelector<SignupState>(featureKey);
export const getCurrentUser = createSelector(signupFeature, (state: SignupState) => state.user);
