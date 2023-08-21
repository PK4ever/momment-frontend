import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfirmationModalComponent } from './email-confirmation-modal.component';

describe('EmailConfirmationComponent', () => {
  let component: EmailConfirmationModalComponent;
  let fixture: ComponentFixture<EmailConfirmationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailConfirmationModalComponent]
    });
    fixture = TestBed.createComponent(EmailConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
