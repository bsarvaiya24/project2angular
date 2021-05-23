import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/model/PetDTO';
import { VirtualPet } from 'src/model/virtualPet';
import { MyPetService } from '../my-pet.service';

@Component({
  selector: 'app-list-real-pets',
  templateUrl: './list-real-pets.component.html',
  styleUrls: ['./list-real-pets.component.css']
})
export class ListRealPetsComponent implements OnInit {

  realPets: Pet[] = [];

  constructor(private myPetService: MyPetService) { }

  ngOnInit(): void {
    this.getRealPets();
  }

  getRealPets(){
    this.myPetService.getAllPets().subscribe((results) => {
      for (var result of results) {
        if(result.pet_type.pet_type_id === 1){
          this.realPets.push(result);
        }
      }
    });
  }

}
