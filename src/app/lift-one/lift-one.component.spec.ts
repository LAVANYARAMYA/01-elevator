import { ComponentFixture, TestBed } from '@angular/core/testing';

import LiftOneComponent from './lift-one.component';

describe('LiftOneComponent', () => {
  let component: LiftOneComponent;
  let fixture: ComponentFixture<LiftOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiftOneComponent],
    });
    fixture = TestBed.createComponent(LiftOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
