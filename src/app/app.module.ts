import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {metaReducers, appReducers} from './reducers';
import { ChildrenComponent } from './children-container/children-component/children.component';
import { HighlightsComponent } from './highlights-container/highlights-component/highlights.component';
import { EffectsModule } from '@ngrx/effects';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ChildrenModule} from "./children-container/children.module";

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    HighlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildrenModule,
    StoreModule.forRoot(appReducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
