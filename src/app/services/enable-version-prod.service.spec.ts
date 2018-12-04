import { TestBed, inject } from '@angular/core/testing';

import { EnableVersionProdService } from './enable-version-prod.service';

describe('EnableVersionProdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnableVersionProdService]
    });
  });

  it('should be created', inject([EnableVersionProdService], (service: EnableVersionProdService) => {
    expect(service).toBeTruthy();
  }));
});
