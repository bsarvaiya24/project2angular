import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-adoption-requests',
  templateUrl: './user-adoption-requests.component.html',
  styleUrls: ['./user-adoption-requests.component.css']
})
export class UserAdoptionRequestsComponent implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
