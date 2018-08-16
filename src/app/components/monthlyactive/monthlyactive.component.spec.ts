import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyactiveComponent } from './monthlyactive.component';

describe('MonthlyactiveComponent', () => {
  let component: MonthlyactiveComponent;
  let fixture: ComponentFixture<MonthlyactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
