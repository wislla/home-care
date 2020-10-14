import { TestBed } from '@angular/core/testing';

import { ServCollectService } from './serv-collect.service';

describe('ServCollectService', () => {
  let service: ServCollectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServCollectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
