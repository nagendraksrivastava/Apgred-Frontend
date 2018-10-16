import { TestBed, inject } from '@angular/core/testing';

import { AddVersionService } from './add-version.service';

describe('AddVersionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddVersionService]
    });
  });

  it('should be created', inject([AddVersionService], (service: AddVersionService) => {
    expect(service).toBeTruthy();
  }));
});
