import { TestBed } from '@angular/core/testing';

import { AllTreesService } from './all-trees.service';

describe('AllTreesService', () => {
  let service: AllTreesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllTreesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
