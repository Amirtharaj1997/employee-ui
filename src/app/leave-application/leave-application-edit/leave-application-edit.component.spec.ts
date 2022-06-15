import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApplicationEditComponent } from './leave-application-edit.component';

describe('LeaveApplicationEditComponent', () => {
  let component: LeaveApplicationEditComponent;
  let fixture: ComponentFixture<LeaveApplicationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveApplicationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveApplicationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
