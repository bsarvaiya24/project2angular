import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VirtualPet } from 'src/model/virtualPet';
import { MyPokemonService } from '../my-pokemon.service';
import { MyPokemonSpeciesService } from '../my-pokemon-species.service';
import { Pet } from 'src/model/PetDTO';
import { MyPetService } from '../my-pet.service';
import { AdoptionRequestDTO } from 'src/model/AdoptionRequest';
import { MyAdoptionService } from '../my-adoption.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  pet: Pet;
  showAdoption: boolean = false;
  submitSuccess: boolean = false;
  requestDescription: string;

  constructor(private route: ActivatedRoute, private location: Location, private myPokemonService: MyPokemonService, private myPokemonSpeciesService: MyPokemonSpeciesService, private myPetService: MyPetService, private myAdoptionService: MyAdoptionService ) { }

  ngOnInit(): void {
    // this.getVirtualPet();
    this.getPetData();
  }

  getPetData() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.myPetService.getPetWithId(id).subscribe(result => {
      this.pet = result;
    });
  }

  // getVirtualPet(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');

  //   this.myPokemonService.getPokemon(id).subscribe(pokemon => {

  //     let id = pokemon.id;
  //     let pet_type_id = 2;
  //     let pet_type = "virtual";
  //     let type = { pet_type_id, pet_type };
  //     let pet_status_id = 1;
  //     let pet_status = "adoptable";
  //     let status = { pet_status_id, pet_status };
  //     let species = pokemon.species.name;
  //     let name = pokemon.name;
  //     let age = pokemon.order/50;
  //     let sprite = pokemon.sprites.front_default;
  //     let breed: string = "";
  //     let description: string = "";

  //     let newVirtualPet: VirtualPet = {
  //       id,
  //       type,
  //       status,
  //       species,
  //       name,
  //       age,
  //       breed,
  //       description,
  //       sprite
  //     }

  //     this.myPokemonSpeciesService.getPokemonSpecies(id).subscribe((pokemonSpecies) => {
  //       let egg_groups = pokemonSpecies.egg_groups;
  //       let flavor_text_entries = pokemonSpecies.flavor_text_entries;
  //       // console.log("egg_groups length: "+egg_groups.length);
  //       // console.log("flavor_text_entries length: "+flavor_text_entries.length);
  //       for(let i = 0; i < egg_groups.length; i++){
  //         if(i==0){
  //           description += flavor_text_entries[i].flavor_text;
  //         }
  //         // console.log(egg_groups[i].name);
  //         breed += egg_groups[i].name;
  //         if(i != egg_groups.length-1){
  //           breed += "-";
  //         }
  //       }
  //       newVirtualPet.breed = breed;
  //       newVirtualPet.description = description;
  //     });
      
  //     this.virtualPet = (newVirtualPet);
  //   });
  // }

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
    if(!sessionStorage.getItem("loggedUser")){
      alert("Please log in to make adoption requests!");
    } else {
      let adoptionRequestDTO: AdoptionRequestDTO = {
        petId: this.pet.pet_id,
        description: this.requestDescription
      }
      this.myAdoptionService.addAdoptionRequest(adoptionRequestDTO).subscribe(event => {
        console.log(event);
        this.submitSuccess = true;
      });
    }
  }

}
