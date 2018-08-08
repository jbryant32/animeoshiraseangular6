import { TestBed, inject } from '@angular/core/testing';

import { ActivateCheckService } from './activate-check.service';

describe('ActivateCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateCheckService]
    });
  });

  it('should be created', inject([ActivateCheckService], (service: ActivateCheckService) => {
    expect(service).toBeTruthy();
  }));
});
