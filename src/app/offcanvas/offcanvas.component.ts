import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/User';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffcanvasComponent implements OnInit {

  isLoggedIn: boolean = false;
  isManager: boolean = false;
  currentUser: User;

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem("loggedUser")){
      this.currentUser = JSON.parse(sessionStorage.getItem("loggedUser"));
      this.isLoggedIn = true;
      let userRole = sessionStorage.getItem("loggedUserRole");
      if(userRole == "manager"){
        this.isManager = true;
      }
    }
  }

}
