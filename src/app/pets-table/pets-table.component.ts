import { Component, OnInit } from '@angular/core';
import { MyPokemonService } from '../my-pokemon.service';
import { MyPokemonSpeciesService } from '../my-pokemon-species.service';
import { Pokemon } from 'src/model/pokemon';
import { VirtualPet } from 'src/model/virtualPet';
import { browser } from 'protractor';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.css']
})
export class PetsTableComponent implements OnInit {

  pokemons: Pokemon[] = [];
  virtualPets: VirtualPet[] = [];

  randomNumbers: number[] = [];

  generateRandomNumbers() {
    while(this.randomNumbers.length < 10){
      var r = Math.floor(Math.random() * 898) + 1;
      if(this.randomNumbers.indexOf(r) === -1) this.randomNumbers.push(r);
    }
  }

  constructor(private myPokemonService: MyPokemonService, private myPokemonSpeciesService: MyPokemonSpeciesService) { 
    this.myPokemonService=myPokemonService;
    this.myPokemonSpeciesService=myPokemonSpeciesService;
  }

  ngOnInit(): void {
    
    if (!sessionStorage.getItem('yourComponentNameLoadedAlready')) {
      this.generateRandomNumbers();
      this.onGetPokemon();
    }
    
  }

  onGetPokemon(){
    
    for(let i=0; i<this.randomNumbers.length; i++) {
      this.myPokemonService.getPokemon(this.randomNumbers[i]).subscribe((pokemon) => {
        // console.log(this.pokemons);
        // console.log(pokemon);
        let id = pokemon.id;
        let pet_type_id = 2;
        let pet_type = "virtual";
        let type = { pet_type_id, pet_type };
        let pet_status_id = 1;
        let pet_status = "adoptable";
        let status = { pet_status_id, pet_status };
        let species = pokemon.species.name;
        let name = pokemon.name;
        let age = pokemon.order/50;
        let sprite = pokemon.sprites.front_default;
        let breed: string = "";
        let description: string = "";
  
        let newVirtualPet: VirtualPet = {
          id,
          type,
          status,
          species,
          name,
          age,
          breed,
          description,
          sprite
        }
  
        this.myPokemonSpeciesService.getPokemonSpecies(this.randomNumbers[i]).subscribe((pokemonSpecies) => {
          let egg_groups = pokemonSpecies.egg_groups;
          let flavor_text_entries = pokemonSpecies.flavor_text_entries;
          // console.log("egg_groups length: "+egg_groups.length);
          // console.log("flavor_text_entries length: "+flavor_text_entries.length);
          for(let i = 0; i < egg_groups.length; i++){
            if(i==0){
              description += flavor_text_entries[i].flavor_text;
            }
            // console.log(egg_groups[i].name);
            breed += egg_groups[i].name;
            if(i != egg_groups.length-1){
              breed += "-";
            }
          }
          newVirtualPet.breed = breed;
          newVirtualPet.description = description;
        });
        
        this.virtualPets.push(newVirtualPet);
  
      });
    }
    

  }

}


