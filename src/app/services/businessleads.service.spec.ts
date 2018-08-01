import { TestBed, inject } from '@angular/core/testing';

import { BusinessleadsService } from './businessleads.service';

describe('BusinessleadsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessleadsService]
    });
  });

  it('should be created', inject([BusinessleadsService], (service: BusinessleadsService) => {
    expect(service).toBeTruthy();
  }));
});
