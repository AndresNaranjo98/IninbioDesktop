import { TestBed } from '@angular/core/testing';

import { VinoAccesoGuard } from './vino-acceso.guard';

describe('VinoAccesoGuard', () => {
  let guard: VinoAccesoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VinoAccesoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
