import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionManagementComponent } from './version-management.component';

describe('VersionManagementComponent', () => {
  let component: VersionManagementComponent;
  let fixture: ComponentFixture<VersionManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
