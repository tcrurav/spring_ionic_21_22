import { TestBed } from '@angular/core/testing';

import { BicyclesService } from './bicycles.service';

describe('BicyclesService', () => {
  let service: BicyclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BicyclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
