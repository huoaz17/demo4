import { TestBed } from '@angular/core/testing';

import { SParamTableService } from './s-param-table.service';

describe('SParamTableService', () => {
  let service: SParamTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SParamTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
