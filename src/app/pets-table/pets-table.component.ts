import { Component, OnInit } from '@angular/core';
import { MyPokemonService } from '../my-pokemon.service';
import { MyPokemonSpeciesService } from '../my-pokemon-species.service';
import { VirtualPet } from 'src/model/virtualPet';
import { PetDTO } from 'src/model/PetDTO';
import { MyPetService } from '../my-pet.service';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.css']
})
export class PetsTableComponent implements OnInit {

  virtualPets: VirtualPet[] = [];

  randomNumbers: number[] = [];

  imageToStore: string | ArrayBuffer;

  generateRandomNumbers() {
    while(this.randomNumbers.length < 10){
      var r = Math.floor(Math.random() * 898) + 1;
      if(this.randomNumbers.indexOf(r) === -1) this.randomNumbers.push(r);
    }
  }

  constructor(private myPokemonService: MyPokemonService, private myPokemonSpeciesService: MyPokemonSpeciesService, private myPetService: MyPetService) { 
    this.myPokemonService=myPokemonService;
    this.myPokemonSpeciesService=myPokemonSpeciesService;
  }

  ngOnInit(): void {
    this.generateRandomNumbers();
    this.onGetPokemon();
    
  }

  onGetPokemon(){
    
    for(let i=0; i<this.randomNumbers.length; i++) {
      this.myPokemonService.getPokemon(this.randomNumbers[i]).subscribe((pokemon) => {
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
          for(let i = 0; i < egg_groups.length; i++){
            if(i==0){
              description += flavor_text_entries[i].flavor_text;
            }
            breed += egg_groups[i].name;
            if(i != egg_groups.length-1){
              breed += "-";
            }
          }
          if(breed==""){
            breed="pokemon"
          }
          if(description==""){
            description="No description found."
          }
          newVirtualPet.breed = breed;
          newVirtualPet.description = description;
        });
        
        this.virtualPets.push(newVirtualPet);
  
      });
    }
  }

  addVirtualPet(currentPetId) {
    console.log(currentPetId);
    for (let virtualPet of this.virtualPets) {
      if(virtualPet.id === currentPetId){

        this.myPokemonService.getImage(virtualPet.sprite).subscribe(base64data => {
          let base64Image = 'data:image/jpg;base64,'+base64data;
          const petDTO: PetDTO = {
            pet_name: virtualPet.name,
            pet_age: virtualPet.age,
            pet_species: virtualPet.species,
            pet_breed: virtualPet.breed,
            pet_description: virtualPet.description,
            pet_type: "digital",
            pet_image: base64Image.split(",")[1]
          };
          console.log(petDTO);
          this.myPetService.addPet(petDTO).subscribe(event => {
            console.log(event);
          });
        });

      }
    }
  }

}
