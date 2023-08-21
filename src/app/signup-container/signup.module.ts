import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignupComponent} from "./signup-component/signup.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {SignupEffects} from "./store/signup.effects";



@NgModule({
  declarations: [SignupComponent],
  exports: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature(SignupEffects)
  ]
})
export class SignupModule { }
