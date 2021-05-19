import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-requests',
  templateUrl: './view-all-requests.component.html',
  styleUrls: ['./view-all-requests.component.css']
})
export class ViewAllRequestsComponent implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
