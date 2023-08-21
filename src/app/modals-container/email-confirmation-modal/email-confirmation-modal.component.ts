import {Component, EventEmitter, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {User} from "../../signup-container/store/signupState";

@Component({
  selector: 'app-email-confirmation-modal',
  templateUrl: './email-confirmation-modal.component.html',
  styleUrls: ['./email-confirmation-modal.component.scss']
})
export class EmailConfirmationModalComponent{

  signupUser?: User;
  modalRef?: BsModalRef;

  constructor(private modelRef: BsModalRef) {
    this.modalRef  = modelRef;
  }

  setSignupUser(currentUser: User) {
    this.signupUser = currentUser;
  }
}
