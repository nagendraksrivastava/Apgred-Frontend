import { TestBed, inject } from '@angular/core/testing';

import { TotalusersService } from './totalusers.service';

describe('TotalusersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotalusersService]
    });
  });

  it('should be created', inject([TotalusersService], (service: TotalusersService) => {
    expect(service).toBeTruthy();
  }));
});
