import { TestBed } from '@angular/core/testing';

import { PrefixesService } from './prefixes.service';

describe('PrefixesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrefixesService = TestBed.get(PrefixesService);
    expect(service).toBeTruthy();
  });
});
