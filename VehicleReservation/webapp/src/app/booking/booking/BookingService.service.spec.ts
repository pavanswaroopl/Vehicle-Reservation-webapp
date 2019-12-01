import { TestBed } from '@angular/core/testing';

import { BookingServiceService } from './BookingService.service';

describe('CartServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingServiceService = TestBed.get(BookingServiceService);
    expect(service).toBeTruthy();
  });
});
