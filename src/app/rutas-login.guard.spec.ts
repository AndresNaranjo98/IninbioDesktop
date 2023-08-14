import { TestBed } from '@angular/core/testing';

import { RutasLoginGuard } from './rutas-login.guard';

describe('RutasLoginGuard', () => {
  let guard: RutasLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RutasLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
