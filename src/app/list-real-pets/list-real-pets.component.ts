import { Component, OnInit } from '@angular/core';
import { VirtualPet } from 'src/model/virtualPet';

@Component({
  selector: 'app-list-real-pets',
  templateUrl: './list-real-pets.component.html',
  styleUrls: ['./list-real-pets.component.css']
})
export class ListRealPetsComponent implements OnInit {

  realPets: VirtualPet[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
