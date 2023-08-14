import { TestBed } from '@angular/core/testing';

import { DescargaExcelService } from './descarga-excel.service';

describe('DescargaExcelService', () => {
  let service: DescargaExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescargaExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
