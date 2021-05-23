import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffcanvasComponent implements OnInit {

  isLoggedIn: boolean = false;
  isManager: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem("loggedUser")){
      this.isLoggedIn = true;
      let userRole = sessionStorage.getItem("loggedUserRole");
      if(userRole == "manager"){
        this.isManager = true;
      }
    }
  }

}
