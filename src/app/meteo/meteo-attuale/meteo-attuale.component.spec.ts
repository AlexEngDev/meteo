import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoAttualeComponent } from './meteo-attuale.component';

describe('MeteoAttualeComponent', () => {
  let component: MeteoAttualeComponent;
  let fixture: ComponentFixture<MeteoAttualeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteoAttualeComponent]
    });
    fixture = TestBed.createComponent(MeteoAttualeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
