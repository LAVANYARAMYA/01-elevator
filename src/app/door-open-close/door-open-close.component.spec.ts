import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorOpenCloseComponent } from './door-open-close.component';

describe('DoorOpenCloseComponent', () => {
  let component: DoorOpenCloseComponent;
  let fixture: ComponentFixture<DoorOpenCloseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoorOpenCloseComponent]
    });
    fixture = TestBed.createComponent(DoorOpenCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
