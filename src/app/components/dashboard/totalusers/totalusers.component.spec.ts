import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalusersComponent } from './totalusers.component';

describe('TotalusersComponent', () => {
  let component: TotalusersComponent;
  let fixture: ComponentFixture<TotalusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
