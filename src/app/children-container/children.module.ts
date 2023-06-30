import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {ChildrenEffects} from "./store/children.effects";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature(ChildrenEffects)
  ]
})
export class ChildrenModule { }
