import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ADDCHILD, DELETECHILD, LOADCHILDREN, SETSELECTEDCHILD} from "../store/children.actions";
import {ChildrenState, Child} from "../store/childrenState";
import {LoginState} from "../../login-container/login-component/loginState";
import {selectCurrentUser} from "../../login-container/store/login.selectors";
import {getSelectedChild, selectChildren} from "../store/children.selectors";
import {BsModalService} from "ngx-bootstrap/modal";
import {AddChildModalComponent} from "../../modals-container/child-modal/add-child-modal/add-child-modal.component";
import {Observable, withLatestFrom} from "rxjs";
import {
  DeleteConfirmationModalComponent
} from "../../modals-container/delete-confirmation-modal/delete-confirmation-modal.component";
import * as _ from "lodash";

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit{

  selectedChild$: Observable<Child> = this.childrenStore.select(getSelectedChild);
  currentUser$ = this.loginStore.select(selectCurrentUser);
  childrenList$ = this.childrenStore.select(selectChildren);
  selectedChild: Child | undefined;
  constructor(private childrenStore: Store<ChildrenState>, private loginStore: Store<LoginState>, private modalService: BsModalService) {}

  ngOnInit() {
    this.currentUser$.subscribe((user) => {
      if (user) {
        this.childrenStore.dispatch(LOADCHILDREN({id: user.id}))
      }
    });
    let selectedChild;
    this.childrenList$.pipe(withLatestFrom(this.selectedChild$)).subscribe(([childrenList, selected]) => {
      if (selected.id) {
        let val = _.find(childrenList,{'id': selected.id});
        selectedChild = (val ? val : childrenList[0]) as Child;
        this.childrenStore.dispatch(SETSELECTEDCHILD({selectedChild}))
      } else {
        selectedChild = {...childrenList[0]};
        this.childrenStore.dispatch(SETSELECTEDCHILD({selectedChild}))
      }
    })

  }
}
