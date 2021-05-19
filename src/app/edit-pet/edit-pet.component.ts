import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
