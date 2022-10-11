import { TestBed } from '@angular/core/testing';

import { TimerZoneService } from './timer-zone.service';

describe('TimerZoneService', () => {
  let service: TimerZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
