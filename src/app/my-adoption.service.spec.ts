import { TestBed } from '@angular/core/testing';

import { MyAdoptionService } from './my-adoption.service';

describe('MyAdoptionService', () => {
  let service: MyAdoptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAdoptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
