import { Component, OnInit } from '@angular/core';
import { MyPokemonService } from '../my-pokemon.service';
import { Pokemon } from 'src/model/pokemon';
import { VirtualPet } from 'src/model/virtualPet';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.css']
})
export class PetsTableComponent implements OnInit {

  petData: { 
    id: number,
    type: { pet_type_id: number, pet_type: string },
    status: { pet_status_id: number, pet_status: string }, 
    species: string,
    breed: string,
    name: string,
    age: number,
    description: string
  }[];

  pokemons: Pokemon[] = [];
  virtualPets: VirtualPet[] = [];
  // newVirtualPet: VirtualPet;

  myPokemonService: MyPokemonService; 

  constructor(myPokemonService: MyPokemonService) { 
    this.myPokemonService=myPokemonService;
  }

  ngOnInit(): void {
    // this.renderTable();
    this.onGetPokemon();
  }

  onGetPokemon(){
    this.myPokemonService.getPokemon().subscribe((pokemon) => {
      console.log(this.pokemons);
      console.log(pokemon);
      let id = pokemon.id;
      let pet_type_id = 2;
      let pet_type = "virtual";
      let type = { pet_type_id, pet_type };
      let pet_status_id = 1;
      let pet_status = "adoptable";
      let status = { pet_status_id, pet_status };
      let species = pokemon.species.name;
      // let breed = 
      let name = pokemon.name;
      let age = pokemon.order;
      // let description =
      let sprite = pokemon.sprites.front_default;

      // breed: string,
      // description: string
      
      let newVirtualPet: VirtualPet = {
        id,
        type,
        status,
        species,
        name,
        age,
        sprite
      }
      
      this.virtualPets.push(newVirtualPet);
      this.pokemons.push(pokemon);
    });
  }

//   renderTable() {
//     fetch('https://pokeapi.co/api/v2/pokemon/1', {
//         method: 'GET',
//         credentials: 'include'
//     }).then((response) => {
//         if (response.status === 400) {
//             window.location.href = '/';
//         }
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }

}
