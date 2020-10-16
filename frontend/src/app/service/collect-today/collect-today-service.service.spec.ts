import { TestBed } from '@angular/core/testing';

import { CollectTodayServiceService } from './collect-today-service.service';

describe('CollectTodayServiceService', () => {
  let service: CollectTodayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectTodayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
