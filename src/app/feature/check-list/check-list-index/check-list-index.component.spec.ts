import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListIndexComponent } from './check-list-index.component';

describe('CheckListIndexComponent', () => {
  let component: CheckListIndexComponent;
  let fixture: ComponentFixture<CheckListIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckListIndexComponent]
    });
    fixture = TestBed.createComponent(CheckListIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
