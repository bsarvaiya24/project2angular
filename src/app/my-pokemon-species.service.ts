import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonSpecies } from 'src/model/pokemonSpecies';

@Injectable({
  providedIn: 'root'
})
export class MyPokemonSpeciesService {

  constructor(private httpClient: HttpClient) { }

  getPokemonSpecies(id: number): Observable<PokemonSpecies> {
    let stringId = id.toString();
    return this.httpClient.get<PokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${stringId}`);
  }

}
