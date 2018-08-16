import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyactiveComponent } from './weeklyactive.component';

describe('WeeklyactiveComponent', () => {
  let component: WeeklyactiveComponent;
  let fixture: ComponentFixture<WeeklyactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
