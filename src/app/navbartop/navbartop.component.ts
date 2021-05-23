import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyUserService } from '../my-user.service';

@Component({
  selector: 'app-navbartop',
  templateUrl: './navbartop.component.html',
  styleUrls: ['./navbartop.component.css']
})
export class NavbartopComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private myUserService: MyUserService, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("loggedUser")){
      this.isLoggedIn = true;
    }
  }

  logout() {
    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    if(loggedUser){
      
      this.myUserService.getLogout().subscribe((response) => {
        console.log(response);
        console.log("Returned from server : Logout successful");
        sessionStorage.removeItem("loggedUser");
        location.replace("/PetPushersAngular/");
      });
    }
  }

}
