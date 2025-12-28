import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { inloggedGuard } from './inlogged-guard';

describe('inloggedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => inloggedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
