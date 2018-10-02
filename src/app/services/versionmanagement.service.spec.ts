import { TestBed, inject } from '@angular/core/testing';

import { VersionmanagementService } from './versionmanagement.service';

describe('VersionmanagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VersionmanagementService]
    });
  });

  it('should be created', inject([VersionmanagementService], (service: VersionmanagementService) => {
    expect(service).toBeTruthy();
  }));
});
