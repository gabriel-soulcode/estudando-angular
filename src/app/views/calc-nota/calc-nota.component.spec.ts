import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcNotaComponent } from './calc-nota.component';

describe('CalcNotaComponent', () => {
  let component: CalcNotaComponent;
  let fixture: ComponentFixture<CalcNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
