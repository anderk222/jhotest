import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListToolbarComponent } from './check-list-toolbar.component';

describe('CheckListToolbarComponent', () => {
  let component: CheckListToolbarComponent;
  let fixture: ComponentFixture<CheckListToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckListToolbarComponent]
    });
    fixture = TestBed.createComponent(CheckListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
