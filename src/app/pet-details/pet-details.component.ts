import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VirtualPet } from 'src/model/virtualPet';
import { MyPokemonService } from '../my-pokemon.service';
import { MyPokemonSpeciesService } from '../my-pokemon-species.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  virtualPet: VirtualPet;
  showAdoption: boolean = false;
  requestDescription: string;
  adoptionRequest = {adoption_request_pet_id: 1, adoption_request_description: ""};

  constructor(private route: ActivatedRoute, private location: Location, private myPokemonService: MyPokemonService, private myPokemonSpeciesService: MyPokemonSpeciesService ) { }

  ngOnInit(): void {
    this.getVirtualPet();
  }

  getVirtualPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.myPokemonService.getPokemon(id).subscribe(pokemon => {

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

      this.myPokemonSpeciesService.getPokemonSpecies(id).subscribe((pokemonSpecies) => {
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
      
      this.virtualPet = (newVirtualPet);
    });
  }

  goBack(): void{
    this.location.back();
  }

  showAdoptionRequest(): void {
    this.showAdoption = true;
  }

  hideAdoptionRequest(): void {
    this.showAdoption = false;
  }

  submitRequest(): void {
    this.adoptionRequest.adoption_request_pet_id = this.virtualPet.id;
    this.adoptionRequest.adoption_request_description = this.requestDescription;
    console.log("POST http request, adoptionRequest object sent:");
    console.log(this.adoptionRequest);
  }

}
