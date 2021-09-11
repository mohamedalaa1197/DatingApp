import { TestBed } from '@angular/core/testing';

import { PreventchangesGuard } from './preventchanges.guard';

describe('PreventchangesGuard', () => {
  let guard: PreventchangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventchangesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
