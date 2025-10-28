import { TestBed } from '@angular/core/testing';

import { JosepeService } from './josepe.service';

describe('JosepeService', () => {
  let service: JosepeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JosepeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
