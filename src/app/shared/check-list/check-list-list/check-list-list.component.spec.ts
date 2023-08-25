import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListListComponent } from './check-list-list.component';

describe('CheckListListComponent', () => {
  let component: CheckListListComponent;
  let fixture: ComponentFixture<CheckListListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckListListComponent]
    });
    fixture = TestBed.createComponent(CheckListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
