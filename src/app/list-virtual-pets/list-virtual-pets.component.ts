import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/model/PetDTO';
import { VirtualPet } from 'src/model/virtualPet';
import { MyPetService } from '../my-pet.service';

@Component({
  selector: 'app-list-virtual-pets',
  templateUrl: './list-virtual-pets.component.html',
  styleUrls: ['./list-virtual-pets.component.css']
})
export class ListVirtualPetsComponent implements OnInit {

  virtualPets: Pet[] = [];

  constructor(private myPetService: MyPetService) { }

  ngOnInit(): void {
    this.getVirtualPets();
  }

  getVirtualPets(){
    this.myPetService.getAllPets().subscribe((results) => {
      for (var result of results) {
        if(result.pet_type.pet_type_id === 2){
          this.virtualPets.push(result);
        }
      }
    });
  }

}
