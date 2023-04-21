import { TestBed } from '@angular/core/testing';

import { AuhGuardGuard } from './auh-guard.guard';

describe('AuhGuardGuard', () => {
  let guard: AuhGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuhGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
