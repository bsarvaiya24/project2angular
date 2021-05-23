import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdoptionRequest } from 'src/model/AdoptionRequest';
import { MyAdoptionService } from '../my-adoption.service';


@Component({
  selector: 'app-view-all-requests',
  templateUrl: './view-all-requests.component.html',
  styleUrls: ['./view-all-requests.component.css']
})
export class ViewAllRequestsComponent implements OnInit {

  adoptionRequests: AdoptionRequest[] = [];

  constructor(private location: Location, private myAdoptionService: MyAdoptionService) { }

  ngOnInit(): void {
    this.getAllRequests();
  }

  getAllRequests() {
    this.myAdoptionService.getAllAdoptionRequests().subscribe((requests) => {
      console.log(requests);
      for (var request of requests) {
        this.adoptionRequests.push(request);
      }
    });
  }

  goBack() {
    this.location.back();
  }

}
