import { TestBed } from '@angular/core/testing';

import { NfoService } from './nfo.service';

describe('NfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NfoService = TestBed.get(NfoService);
    expect(service).toBeTruthy();
  });
});
