import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {FormControl, FormGroup} from "@angular/forms";
import {AddChildRequest, Child} from "../../../children-container/store/childrenState";
import {DATE} from "ngx-bootstrap/chronos/units/constants";

@Component({
  selector: 'app-add-child-modal',
  templateUrl: './add-child-modal.component.html',
  styleUrls: ['./add-child-modal.component.scss']
})
export class AddChildModalComponent implements OnInit {
  @Output() saveChildEvent = new EventEmitter<AddChildRequest>
  modalRef?: BsModalRef;
  addChildForm: FormGroup = new FormGroup({
    name: new FormControl(),
    dob: new FormControl()
  });

  modalAction?: string;
  modalData?: Child;

  constructor(private modelRef: BsModalRef) {
    this.modalRef  = modelRef;
  }

  ngOnInit() {

  }

  setModalActionAndData(modalAction: string, modalData?: Child) {
    this.modalAction = modalAction;
    this.modalData = modalData;
    if (this.modalAction == 'Edit') {
      this.addChildForm.get('name')?.setValue(this.modalData?.name);
      this.addChildForm.get('dob')?.setValue(new Date(this.modalData?.dob ? this.modalData?.dob : new Date()));
    }
  }

  onSubmit() {
    this.addChild();
    this.modalRef?.hide();
  }

  addChild() {
    let formData: AddChildRequest =  {
      id: this.modalData?.id,
      name: this.addChildForm.get('name')?.value,
      dob: this.addChildForm.get('dob')?.value,
      userEmail: ''
    };
    this.saveChildEvent.emit(formData)
  }
}
