import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HighlightsEffects } from './highlights.effects';

describe('HighlightsEffects', () => {
  let actions$: Observable<any>;
  let effects: HighlightsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HighlightsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(HighlightsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
