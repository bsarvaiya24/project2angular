import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: any;

  constructor() { }

  ngOnInit(): void {
    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    if(loggedUser){
      this.currentUser = loggedUser;
    }
  }

}
