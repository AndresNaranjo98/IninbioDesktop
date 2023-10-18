import { TestBed } from '@angular/core/testing';

import { TequilaAccesoGuard } from './tequila-acceso.guard';

describe('TequilaAccesoGuard', () => {
  let guard: TequilaAccesoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TequilaAccesoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
