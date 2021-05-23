import { TestBed } from '@angular/core/testing';

import { MyPetService } from './my-pet.service';

describe('MyPetService', () => {
  let service: MyPetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
