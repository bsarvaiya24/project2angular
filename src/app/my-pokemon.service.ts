import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class MyPokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemon(): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/1');
  }

}
