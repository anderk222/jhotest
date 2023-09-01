import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCasesCheckItemComponent } from './test-cases-check-item.component';

describe('TestCasesCheckItemComponent', () => {
  let component: TestCasesCheckItemComponent;
  let fixture: ComponentFixture<TestCasesCheckItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCasesCheckItemComponent]
    });
    fixture = TestBed.createComponent(TestCasesCheckItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
