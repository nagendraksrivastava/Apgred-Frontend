import { TestBed, inject } from '@angular/core/testing';

import { SendnotificationService } from './sendnotification.service';

describe('SendnotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendnotificationService]
    });
  });

  it('should be created', inject([SendnotificationService], (service: SendnotificationService) => {
    expect(service).toBeTruthy();
  }));
});
