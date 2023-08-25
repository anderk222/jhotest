import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCheckListComponent } from './toolbar-check-list.component';

describe('ToolbarCheckListComponent', () => {
  let component: ToolbarCheckListComponent;
  let fixture: ComponentFixture<ToolbarCheckListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarCheckListComponent]
    });
    fixture = TestBed.createComponent(ToolbarCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
