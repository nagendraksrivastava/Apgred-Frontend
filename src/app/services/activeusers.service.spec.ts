import { TestBed, inject } from '@angular/core/testing';

import { ActiveusersService } from './activeusers.service';

describe('ActiveusersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveusersService]
    });
  });

  it('should be created', inject([ActiveusersService], (service: ActiveusersService) => {
    expect(service).toBeTruthy();
  }));
});
