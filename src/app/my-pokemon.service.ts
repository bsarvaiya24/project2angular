import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class MyPokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon> {
    let stringId = id.toString();
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${stringId}`);
    // return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${stringId}`, {
    //   withCredentials: true,
    // });
  }

}
