import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerZoneMapComponent } from './timer-zone-map.component';

describe('TimerZoneMapComponent', () => {
  let component: TimerZoneMapComponent;
  let fixture: ComponentFixture<TimerZoneMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerZoneMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerZoneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
