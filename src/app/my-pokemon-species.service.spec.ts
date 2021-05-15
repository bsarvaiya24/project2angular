import { TestBed } from '@angular/core/testing';

import { MyPokemonSpeciesService } from './my-pokemon-species.service';

describe('MyPokemonSpeciesService', () => {
  let service: MyPokemonSpeciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPokemonSpeciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
