import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canDesactiveGuard } from './can-desactive.guard';

describe('canDesactiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canDesactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
