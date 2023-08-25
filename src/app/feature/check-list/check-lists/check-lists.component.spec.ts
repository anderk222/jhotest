import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListsComponent } from './check-lists.component';

describe('CheckListsComponent', () => {
  let component: CheckListsComponent;
  let fixture: ComponentFixture<CheckListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckListsComponent]
    });
    fixture = TestBed.createComponent(CheckListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
