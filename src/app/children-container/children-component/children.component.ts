import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadChildren} from "../store/children.actions";

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit{
  constructor(private childrenStore: Store) {}

  ngOnInit() {
    this.childrenStore.dispatch(loadChildren())
  }
}
