import { Component, OnInit, Type } from '@angular/core';
import { Location } from '@angular/common';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { VirtualPet } from 'src/model/virtualPet';
import { MyPetService } from '../my-pet.service';
import { Pet } from 'src/model/PetDTO';

@Component({
  selector: 'app-manager-view-all-pets',
  templateUrl: './manager-view-all-pets.component.html',
  styleUrls: ['./manager-view-all-pets.component.css']
})
export class ManagerViewAllPetsComponent implements OnInit {

  // showDeleteModal: boolean = false;
  petList: Pet[] = [];

  constructor(private location: Location,private modalService: NgbModal, private myPetService: MyPetService) { }

  ngOnInit(): void {
    this.getAllPets();
  }

  goBack() {
    this.location.back();
  }

  getAllPets(){
    this.myPetService.getAllPets().subscribe(results => {
      console.log(results);
      for (var result of results) {
        this.petList.push(result);
      }
    })
  }


}
