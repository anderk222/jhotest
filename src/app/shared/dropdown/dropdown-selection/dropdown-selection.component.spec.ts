import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSelectionComponent } from './dropdown-selection.component';

describe('DropdownSelectionComponent', () => {
  let component: DropdownSelectionComponent;
  let fixture: ComponentFixture<DropdownSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownSelectionComponent]
    });
    fixture = TestBed.createComponent(DropdownSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
