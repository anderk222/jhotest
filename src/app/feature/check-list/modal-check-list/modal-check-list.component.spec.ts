import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCheckListComponent } from './modal-check-list.component';

describe('ModalCheckListComponent', () => {
  let component: ModalCheckListComponent;
  let fixture: ComponentFixture<ModalCheckListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCheckListComponent]
    });
    fixture = TestBed.createComponent(ModalCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
