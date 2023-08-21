import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {SignupState, User} from "../signup-container/store/signupState";
import {getCurrentUser} from "../signup-container/store/signup.selectors";
import {SIGNUPFAIL} from "../signup-container/store/signup.actions";

// export const emailVerificationGuard: CanActivateFn = (route, state) => {
//   let currentUser: User | undefined;
//   const currentUser$ = inject(Store<SignupState>).select(selectCurrentUser).subscribe((user) => {
//     currentUser = user;
//   });
//   if (currentUser && !currentUser?.isEnabled) {
//     return true;
//   }
//   return inject(Router).createUrlTree(['/', 'email-verification']);
// };
//
// export const verifiedUserGuard: CanActivateFn = (route, state) => {
//   inject(Store<SignupState>).dispatch(SIGNUPFAIL({errMsg: ''}))
//
//   let currentUser: User | undefined;
//   const currentUser$ = inject(Store<SignupState>).select(selectCurrentUser).subscribe((user) => {
//     currentUser = user;
//   })
//   if (currentUser && !currentUser?.isEnabled) {
//     return inject(Router).createUrlTree(['/', 'email-verification']);
//   }
//   return true;
//   // return inject(Router).createUrlTree(['/', 'email-verification']);
// };
//


