import {Component, EventEmitter, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {Child, ChildrenState} from "../../children-container/store/childrenState";
import {Store} from "@ngrx/store";
import {getSelectedChild, selectChildren} from "../../children-container/store/children.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {

  childrenList$: Observable<Child[]> = this.childrenStore.select(selectChildren);
  modalRef?: BsModalRef;
  addChildClickedEvent = new EventEmitter;
  editChildClickedEvent =  new EventEmitter;
  deleteChildClickedEvent = new EventEmitter;
  selectChildEvent = new EventEmitter;
  logoutEvent = new EventEmitter;
  selectedChild$ = this.childrenStore.select(getSelectedChild);

  constructor(private modelRef: BsModalRef, private childrenStore: Store<ChildrenState>) {
    this.modalRef  = modelRef;
  }

  ngOnInit() {
  }

  setChildrenList(childrenList: Child[]) {
    // this.childrenList = childrenList;
    // this.selectedChild = childrenList[0];
  }

  addChildClicked() {
    this.addChildClickedEvent.emit();
  }

  selectChild(child: Child) {
    // this.selectedChild = child;
    this.selectChildEvent.emit(child);
  }

  editChildClicked(selectedChild: Child) {
    this.editChildClickedEvent.emit(selectedChild);
  }

  deleteChildClicked(selectedChild: Child) {
    this.deleteChildClickedEvent.emit(selectedChild);
  }

  logout() {
    this.logoutEvent.emit();
  }
}
