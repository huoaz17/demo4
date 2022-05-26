import { TestBed } from '@angular/core/testing';

import { ParmaTableService } from './parma-table.service';

describe('ParmaTableService', () => {
  let service: ParmaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParmaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
