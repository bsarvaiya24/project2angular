import { Component, OnInit } from '@angular/core';
import { MyUserService } from '../my-user.service';

@Component({
  selector: 'app-navbartop',
  templateUrl: './navbartop.component.html',
  styleUrls: ['./navbartop.component.css']
})
export class NavbartopComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private myUserService: MyUserService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("loggedUser")){
      this.isLoggedIn = true;
    }
  }

  ngOnChanges(changes): void {
    if(sessionStorage.getItem("loggedUser")){
      this.isLoggedIn = true;
    }
  }

  logout() {
    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    if(loggedUser){
      
      this.myUserService.getLogout().subscribe(() => {
        console.log("Returned from server : Logout successful");
        sessionStorage.removeItem("loggedUser");
        location.reload();
      });
    }
  }

}
