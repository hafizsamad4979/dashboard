import { TestBed } from '@angular/core/testing';

import { ConditionHandlingService } from './condition-handling.service';

describe('ConditionHandlingService', () => {
  let service: ConditionHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
