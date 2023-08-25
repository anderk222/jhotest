import { TestBed } from '@angular/core/testing';

import { CheckListStoreService } from './check-list-store.service';

describe('CheckListStoreService', () => {
  let service: CheckListStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckListStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
