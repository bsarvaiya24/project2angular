import { Component, OnInit } from '@angular/core';
import { VirtualPet } from 'src/model/virtualPet';

@Component({
  selector: 'app-list-virtual-pets',
  templateUrl: './list-virtual-pets.component.html',
  styleUrls: ['./list-virtual-pets.component.css']
})
export class ListVirtualPetsComponent implements OnInit {

  virtualPets: VirtualPet[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
