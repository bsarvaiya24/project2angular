import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-adoption-requests',
  templateUrl: './user-adoption-requests.component.html',
  styleUrls: ['./user-adoption-requests.component.css']
})
export class UserAdoptionRequestsComponent implements OnInit {

  loggedUserType: string;

  constructor(private location: Location,) { }

  ngOnInit(): void {
    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    if(!loggedUser){
    // if(loggedUser.user_role.user_role_id == 1){
      this.loggedUserType = "none";
    } else {
      this.loggedUserType = loggedUser.user_role.user_role;
    }
  }

  goBack() {
    this.location.back();
  }

}
