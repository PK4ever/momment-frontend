import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import {appReducers} from './reducers';
import { ChildrenComponent } from './children-container/children-component/children.component';
import { HighlightsComponent } from './highlights-container/highlights-component/highlights.component';
import { EffectsModule } from '@ngrx/effects';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ChildrenModule} from "./children-container/children.module";
import { LandingPageComponent } from './landing-page-container/landing-page-component/landing-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignupComponent } from './signup-container/signup-component/signup.component';
import { LoginComponent } from './login-container/login-component/login.component';
import {SignupModule} from "./signup-container/signup.module";
import {localStorageSync} from "ngrx-store-localstorage";
import {LoginModule} from "./login-container/login.module";
import {
  EmailConfirmationModalComponent
} from "./modals-container/email-confirmation-modal/email-confirmation-modal.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsModalService} from "ngx-bootstrap/modal";
import { AddChildModalComponent } from './modals-container/child-modal/add-child-modal/add-child-modal.component';
import {BsDropdownConfig, BsDropdownModule} from "ngx-bootstrap/dropdown";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DeleteConfirmationModalComponent } from './modals-container/delete-confirmation-modal/delete-confirmation-modal.component';
import {HighlightsModule} from "./highlights-container/highlights.module";
import { ProfileModalComponent } from './modals-container/profile-modal/profile-modal.component';
import {AccordionModule} from "ngx-bootstrap/accordion";
import { AddHighlightModalComponent } from './modals-container/highlight-modal/add-highlight-modal/add-highlight-modal.component';
import {QuillModule} from "ngx-quill";

export function debugLog(reducer: ActionReducer<any>): ActionReducer<any> {
  return ((state, action) => {
    console.log('state', state);
    console.log('action', action);
    if (action.type === 'Logout') {
      state = undefined;
    }
    return reducer(state, action);
  });
}
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['children', 'signup', 'login', 'highlight'], rehydrate: true})(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer, debugLog];

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button

    // ['link', 'image', 'video']                         // link and image, video
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    // ChildrenComponent,
    // HighlightsComponent,
    LandingPageComponent,
    EmailConfirmationModalComponent,
    AddChildModalComponent,
    DeleteConfirmationModalComponent,
    ProfileModalComponent,
    AddHighlightModalComponent,
    // SignupComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildrenModule,
    HighlightsModule,
    StoreModule.forRoot(appReducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([]),
    ReactiveFormsModule,
    SignupModule,
    LoginModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AccordionModule,
    QuillModule.forRoot({modules})
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
