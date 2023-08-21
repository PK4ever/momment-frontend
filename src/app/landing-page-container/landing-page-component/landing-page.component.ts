import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {CLEARSIGNUPSTATE} from "../../signup-container/store/signup.actions";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {
  EmailConfirmationModalComponent
} from "../../modals-container/email-confirmation-modal/email-confirmation-modal.component";
import {LoginState} from "../../login-container/login-component/loginState";
import {getLoginState, selectCurrentUser} from "../../login-container/store/login.selectors";
import {LOGOUT} from "../../login-container/store/login.actions";
import {Child, ChildrenState} from "../../children-container/store/childrenState";
import {getSelectedChild, selectChildren} from "../../children-container/store/children.selectors";
import {ProfileModalComponent} from "../../modals-container/profile-modal/profile-modal.component";
import {ADDCHILD, DELETECHILD, SETSELECTEDCHILD} from "../../children-container/store/children.actions";
import {withLatestFrom} from "rxjs";
import {AddChildModalComponent} from "../../modals-container/child-modal/add-child-modal/add-child-modal.component";
import {SignupState, User} from "../../signup-container/store/signupState";
import {getCurrentUser} from "../../signup-container/store/signup.selectors";
import {
  DeleteConfirmationModalComponent
} from "../../modals-container/delete-confirmation-modal/delete-confirmation-modal.component";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  signupUser$ = this.signupStore.select(getCurrentUser);
  loginState$ = this.loginStore.select(getLoginState);
  childrenList$ = this.childrenStore.select(selectChildren);
  children: Child[] = [];
  selectedChild$ = this.childrenStore.select(getSelectedChild);
  currentUser$ = this.loginStore.select(selectCurrentUser);
  login_active: boolean =  false;

  constructor(private signupStore: Store<SignupState>,
              private modalService: BsModalService,
              private loginStore: Store<LoginState>,
              private childrenStore: Store<ChildrenState>) {
  }

  ngOnInit(): void {
    this.signupUser$.subscribe((user) => {
      if (user && !user.isEnabled) {
        this.showEmailConfirmationModal(user);
      }
    });

    this.childrenList$.pipe(withLatestFrom(this.selectedChild$)).subscribe(([ children, selectedChild]) => {
      this.children = children;
      this.childrenStore.dispatch(SETSELECTEDCHILD({selectedChild}))

    });

  }

  showEmailConfirmationModal(user: User) {
    const modelRef =  this.modalService.show(EmailConfirmationModalComponent);
    modelRef.setClass('modal-dialog modal-dialog-centered');
    modelRef.content?.setSignupUser(user);

    modelRef.onHide?.subscribe(() => {
      this.signupStore.dispatch(CLEARSIGNUPSTATE());
    })
  }

  logout() {
    this.loginStore.dispatch(LOGOUT());
  }

  ngOnDestroy(): void {
  }

  showProfiles(){
    const modelRef =  this.modalService.show(ProfileModalComponent);
    modelRef.setClass('modal-dialog profile-modal');
    modelRef.content?.setChildrenList(this.children);
    modelRef.content?.logoutEvent.subscribe(() => {
      this.logout();
    });

    modelRef.content?.selectChildEvent.subscribe((child) => {
      let selectedChild:  Child = child;
      this.childrenStore.dispatch(SETSELECTEDCHILD({selectedChild}))
    });

    modelRef.content?.addChildClickedEvent.subscribe(() => {
      this.addChildClicked('Add');
    });

    modelRef.content?.editChildClickedEvent.subscribe((selectedChild) => {
      this.addChildClicked('Edit', selectedChild);
    });

    modelRef.content?.deleteChildClickedEvent.subscribe((selectedChild) => {
      this.deleteChildClicked(selectedChild);
    });

  }

  setModelRefChildrenList(modelRef: BsModalRef,  children: Child[])  {
    modelRef.content.setChildrenList(children);
  }

  addChildClicked(modalAction: string, modalData?: Child) {

    const modelRef =  this.modalService.show(AddChildModalComponent);
    modelRef.setClass('modal-dialog');
    modelRef.content?.setModalActionAndData(modalAction, modalData);

    modelRef.content?.saveChildEvent.pipe(withLatestFrom(this.currentUser$)).subscribe(([addChildRequest, currentUser])=> {
      if (currentUser) {
        addChildRequest.userEmail = currentUser.email;
        this.childrenStore.dispatch(ADDCHILD({addChildRequest}));
      }
    });

  }

  deleteChildClicked(selectedChild: Child) {
      const modelRef =  this.modalService.show(DeleteConfirmationModalComponent);
      modelRef.setClass('model-dialog modal-dialog-centered');

      modelRef.content?.deleteEvent.subscribe(() => {
        if (selectedChild.id) {
          this.childrenStore.dispatch(DELETECHILD({id: selectedChild.id}));
        }
      });
  }

  toggleLogin() {
    this.login_active =  !this.login_active;
  }
}
