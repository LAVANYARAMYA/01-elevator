import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnumberformComponent } from './fnumberform.component';

describe('FnumberformComponent', () => {
  let component: FnumberformComponent;
  let fixture: ComponentFixture<FnumberformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FnumberformComponent]
    });
    fixture = TestBed.createComponent(FnumberformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
