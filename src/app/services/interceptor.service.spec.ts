import { TestBed, inject } from '@angular/core/testing';

import { ApgredRequestInterceptor } from './interceptor.service';

describe('InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApgredRequestInterceptor]
    });
  });

  it('should be created', inject([ApgredRequestInterceptor], (service: ApgredRequestInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
