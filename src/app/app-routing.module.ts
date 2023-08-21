import {inject, NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {ChildrenComponent} from "./children-container/children-component/children.component";
import {HighlightsComponent} from "./highlights-container/highlights-component/highlights.component";
import {LandingPageComponent} from "./landing-page-container/landing-page-component/landing-page.component";
import {Store} from "@ngrx/store";
import {SignupState, User} from "./signup-container/store/signupState";
import {getCurrentUser} from "./signup-container/store/signup.selectors";
import {
  EmailConfirmationModalComponent
} from "./modals-container/email-confirmation-modal/email-confirmation-modal.component";


// const  registrationConfirmationGuard  =  () =>  {
//   const signUpStore: Store<SignupState>  = inject(Store<SignupState>);
//   const currentUser$ = signUpStore.select(selectCurrentUser);
//   const router = inject(Router);
//   let user: any;
//   currentUser$.subscribe((u:User) => {
//     user =  u;
//   })
//   console.log("======"+ user);
//   if (user && !user.emailVerified) {
//     // return router.navigate(['/emailConfirmationPage'])
//     console.log(user.emailVerified+" should navigate to   children =====-=")
//     router.navigate(['/highlight'])
//   }
// }

const routes: Routes = [
  // {path: '', component: LandingPageComponent, canActivate: [verifiedUserGuard]},
  {path: '', component: LandingPageComponent},
  {path: 'children', component: ChildrenComponent},
  {path: 'highlight', component: HighlightsComponent},
  {path: 'email-verification', component: EmailConfirmationModalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
  // currentUser$ = this.signupStore.select(selectCurrentUser);
  constructor() {
  }
}
