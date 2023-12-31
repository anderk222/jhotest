import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNavigationComponent } from './dropdown-navigation.component';

describe('DropdownNavigationComponent', () => {
  let component: DropdownNavigationComponent;
  let fixture: ComponentFixture<DropdownNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownNavigationComponent]
    });
    fixture = TestBed.createComponent(DropdownNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
