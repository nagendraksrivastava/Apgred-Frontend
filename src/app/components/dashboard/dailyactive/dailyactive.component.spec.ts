import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyactiveComponent } from './dailyactive.component';

describe('DailyactiveComponent', () => {
  let component: DailyactiveComponent;
  let fixture: ComponentFixture<DailyactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
