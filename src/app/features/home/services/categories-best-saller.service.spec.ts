import { TestBed } from '@angular/core/testing';

import { CategoriesBestSallerService } from './categories-best-saller.service';

describe('CategoriesBestSallerService', () => {
  let service: CategoriesBestSallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesBestSallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
