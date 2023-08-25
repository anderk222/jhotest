import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCheckListComponent } from './card-check-list.component';

describe('CardCheckListComponent', () => {
  let component: CardCheckListComponent;
  let fixture: ComponentFixture<CardCheckListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCheckListComponent]
    });
    fixture = TestBed.createComponent(CardCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
