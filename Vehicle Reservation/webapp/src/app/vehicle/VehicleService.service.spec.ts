import { TestBed } from '@angular/core/testing';

import { VehicleService } from './VehicleService.service';

describe('VehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleService = TestBed.get(VehicleService);
    expect(service).toBeTruthy();
  });
});
