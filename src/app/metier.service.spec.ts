import { TestBed } from '@angular/core/testing';

import { MetierService } from './metier.service';

describe('MetierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetierService = TestBed.get(MetierService);
    expect(service).toBeTruthy();
  });
});
