import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoPrevisioniComponent } from './meteo-previsioni.component';

describe('MeteoPrevisioniComponent', () => {
  let component: MeteoPrevisioniComponent;
  let fixture: ComponentFixture<MeteoPrevisioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteoPrevisioniComponent]
    });
    fixture = TestBed.createComponent(MeteoPrevisioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
