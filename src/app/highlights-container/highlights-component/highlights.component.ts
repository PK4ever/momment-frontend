import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ChildrenState} from "../../children-container/store/childrenState";
import {getSelectedChild} from "../../children-container/store/children.selectors";
import {Highlight, HighlightRequest, HighlightsState} from "../store/highlightsState";
import {SAVEHIGHLIGHT, LOADHIGHLIGHTS, DELETEHIGHLIGHT} from "../store/highlights.actions";
import {getHighlights} from "../store/hightlights.selectors";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {
  AddHighlightModalComponent
} from "../../modals-container/highlight-modal/add-highlight-modal/add-highlight-modal.component";
import {withLatestFrom} from "rxjs";
import {ADDCHILD} from "../../children-container/store/children.actions";
import {orderBy} from "lodash";

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit{

  selectedChild$ = this.childrenStore.select(getSelectedChild);
  highlightList$ = this.highlightStore.select(getHighlights);
  constructor(private childrenStore: Store<ChildrenState>,
              private highlightStore: Store<HighlightsState>, private modalService: BsModalService) {}

  ngOnInit(): void {

    this.selectedChild$.subscribe((child) => {
        if (child.id) {
          let childId = child.id;
          this.highlightStore.dispatch(LOADHIGHLIGHTS({childId}))
        }
    })
  }

  addHighlight() {
    let modalRef = this.modalService.show(AddHighlightModalComponent);
    modalRef.setClass('modal-dialog modal-dialog-centered modal-xl');
    modalRef.content?.setModalActionAndData('Add')
    this.listenToSaveEmitter(modalRef)
  }

  openDialog(highlight: Highlight) {
    let modalRef = this.modalService.show(AddHighlightModalComponent);
    modalRef.setClass('modal-dialog modal-dialog-centered modal-xl');
    modalRef.content?.setModalActionAndData('View', highlight);
    this.listenToSaveEmitter(modalRef);
    this.listenToDeleteEmitter(modalRef);
  }

  listenToSaveEmitter(modalRef: BsModalRef<AddHighlightModalComponent>) {

    modalRef.content?.saveEmitter.pipe(withLatestFrom(this.selectedChild$)).subscribe(([request, selectedChild])=> {
      if (selectedChild) {
        request.child_id = selectedChild.id;
        const highlightRequest: HighlightRequest = {...request}
        this.highlightStore.dispatch(SAVEHIGHLIGHT({highlightRequest}))
      }
    });
  }

  listenToDeleteEmitter(modalRef: BsModalRef<AddHighlightModalComponent>) {
    modalRef.content?.deleteEmitter.subscribe((id)=> {
      this.highlightStore.dispatch(DELETEHIGHLIGHT({id}))
    });
  }
}
