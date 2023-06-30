import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildrenComponent} from "./children-container/children-component/children.component";
import {HighlightsComponent} from "./highlights-container/highlights-component/highlights.component";

const routes: Routes = [
  {path: '', component: ChildrenComponent},
  {path: 'children', component: ChildrenComponent},
  {path: 'highlight', component: HighlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
