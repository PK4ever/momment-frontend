import { createFeatureSelector, createSelector } from '@ngrx/store';
import {LoginState} from "../login-component/loginState";


export const featureKey = 'login';

export const loginFeature = createFeatureSelector<LoginState>(featureKey);
export const selectCurrentUser = createSelector(loginFeature, (state: LoginState) => state.user);
export const getLoginState = createSelector(loginFeature, (state: LoginState) => state);

