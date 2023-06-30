import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ChildrenEffects } from './children.effects';

describe('ChildrenEffects', () => {
  let actions$: Observable<any>;
  let effects: ChildrenEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChildrenEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ChildrenEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
