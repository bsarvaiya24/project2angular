import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdoptionRequest } from 'src/model/AdoptionRequest';
import { MyAdoptionService } from '../my-adoption.service';

@Component({
  selector: 'app-user-adoption-requests',
  templateUrl: './user-adoption-requests.component.html',
  styleUrls: ['./user-adoption-requests.component.css']
})
export class UserAdoptionRequestsComponent implements OnInit {

  adoptionRequests: AdoptionRequest[] = [];

  constructor(private location: Location, private route: ActivatedRoute, private myAdoptionService: MyAdoptionService) { }

  ngOnInit(): void {
    this.getUserRequests();
  }

  getUserRequests() {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.myAdoptionService.getAllAdoptionRequests().subscribe((requests) => {
      console.log(requests);
      for (var request of requests) {
        if(request.adoption_request_user.user_id === userId){
          this.adoptionRequests.push(request);
        }
      }
    });
  }

  goBack() {
    this.location.back();
  }



}
