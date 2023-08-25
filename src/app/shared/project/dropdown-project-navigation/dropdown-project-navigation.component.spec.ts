import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownProjectNavigationComponent } from './dropdown-project-navigation.component';

describe('DropdownProjectNavigationComponent', () => {
  let component: DropdownProjectNavigationComponent;
  let fixture: ComponentFixture<DropdownProjectNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownProjectNavigationComponent]
    });
    fixture = TestBed.createComponent(DropdownProjectNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
