import { TestBed, inject } from '@angular/core/testing';

import { GetfeedbackService } from './getfeedback.service';

describe('GetfeedbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetfeedbackService]
    });
  });

  it('should be created', inject([GetfeedbackService], (service: GetfeedbackService) => {
    expect(service).toBeTruthy();
  }));
});
