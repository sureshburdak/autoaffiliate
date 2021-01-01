import { TestBed } from '@angular/core/testing';

import { EarningReportService } from './earning-report.service';

describe('EarningReportService', () => {
  let service: EarningReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarningReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
