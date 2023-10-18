import { TestBed } from '@angular/core/testing';

import { LastPathService } from './last-path.service';

describe('LastPathService', () => {
  let service: LastPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
