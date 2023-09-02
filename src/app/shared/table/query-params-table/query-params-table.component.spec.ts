import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamsTableComponent } from './query-params-table.component';

describe('QueryParamsTableComponent', () => {
  let component: QueryParamsTableComponent;
  let fixture: ComponentFixture<QueryParamsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueryParamsTableComponent]
    });
    fixture = TestBed.createComponent(QueryParamsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
