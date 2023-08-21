import {Component, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap/modal";
import {Highlight} from "../../../highlights-container/store/highlightsState";

@Component({
  selector: 'app-add-highlight-modal',
  templateUrl: './add-highlight-modal.component.html',
  styleUrls: ['./add-highlight-modal.component.scss']
})
export class AddHighlightModalComponent {
  saveEmitter: EventEmitter<any> = new EventEmitter<any>();
  deleteEmitter: EventEmitter<any> = new EventEmitter<any>();

  modalRef?: BsModalRef;
  modalAction: string = 'Add';
  modalData?: Highlight;

  addHighlightForm: FormGroup =  new FormGroup({
      date:  new FormControl(new Date()),
      description: new FormControl()
  });

  constructor(private modelRef: BsModalRef) {
    this.modalRef  = modelRef;
  }

  onSubmit() {
    let request: any = {
      id: this.modalData?.id,
      date: this.addHighlightForm.get('date')?.value,
      description: this.addHighlightForm.get('description')?.value
    }
    this.saveEmitter.emit(request);
  }

  setModalActionAndData(modalAction: string, data?: Highlight) {
    this.modalAction = modalAction;
    if (data) {
      this.modalData =  data;
    }
  }

  changeToEdit() {
    this.modalAction = 'Edit';
    this.addHighlightForm.get('date')?.setValue(new Date(this.modalData?.date ? this.modalData?.date : new Date()));
    this.addHighlightForm.get('description')?.setValue(this.modalData?.description);
  }

  delete() {
    this.deleteEmitter.emit(this.modalData?.id);
  }
}
