import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit(): void {
  }
  
  goBack() {
    this.location.back();
  }

}
