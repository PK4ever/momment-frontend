import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightsComponent} from "./highlights-component/highlights.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {HighlightsEffects} from "./store/highlights.effects";



@NgModule({
  declarations: [HighlightsComponent],
  exports: [
    HighlightsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature(HighlightsEffects)
  ]
})
export class HighlightsModule { }
