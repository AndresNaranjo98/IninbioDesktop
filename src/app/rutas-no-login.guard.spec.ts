import { TestBed } from '@angular/core/testing';

import { RutasNoLoginGuard } from './rutas-no-login.guard';

describe('RutasNoLoginGuard', () => {
  let guard: RutasNoLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RutasNoLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
