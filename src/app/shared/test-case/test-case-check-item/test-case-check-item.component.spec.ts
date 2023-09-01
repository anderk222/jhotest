import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseCheckItemComponent } from './test-case-check-item.component';

describe('TestCaseCheckItemComponent', () => {
  let component: TestCaseCheckItemComponent;
  let fixture: ComponentFixture<TestCaseCheckItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCaseCheckItemComponent]
    });
    fixture = TestBed.createComponent(TestCaseCheckItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
