import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfeeedbackComponent } from './addfeeedback.component';

describe('AddfeeedbackComponent', () => {
  let component: AddfeeedbackComponent;
  let fixture: ComponentFixture<AddfeeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfeeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfeeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
