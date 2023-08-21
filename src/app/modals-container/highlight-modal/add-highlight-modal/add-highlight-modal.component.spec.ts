import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHighlightModalComponent } from './add-highlight-modal.component';

describe('AddHighlightModalComponent', () => {
  let component: AddHighlightModalComponent;
  let fixture: ComponentFixture<AddHighlightModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHighlightModalComponent]
    });
    fixture = TestBed.createComponent(AddHighlightModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
