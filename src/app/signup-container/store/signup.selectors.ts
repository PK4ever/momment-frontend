import {SignupState} from "./signupState";

export const selectCurrentUser = (state: SignupState) => state.user;
