import { TestBed, inject } from '@angular/core/testing';

import { UpdateVersionService } from './update-version.service';

describe('UpdateVersionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateVersionService]
    });
  });

  it('should be created', inject([UpdateVersionService], (service: UpdateVersionService) => {
    expect(service).toBeTruthy();
  }));
});
