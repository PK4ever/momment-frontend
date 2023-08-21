import {Component, EventEmitter, Output} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.scss']
})
export class DeleteConfirmationModalComponent {

  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  modalRef?: BsModalRef;

  constructor(private mRef: BsModalRef) {
    this.modalRef  = mRef;
  }

  delete() {
    this.deleteEvent.emit();
    this.modalRef?.hide();
  }
}
