import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdoptionRequest } from 'src/model/AdoptionRequest';
import { MyAdoptionService } from '../my-adoption.service';

@Component({
  selector: 'app-adoption-request-details',
  templateUrl: './adoption-request-details.component.html',
  styleUrls: ['./adoption-request-details.component.css']
})
export class AdoptionRequestDetailsComponent implements OnInit {

  adoptionRequest: AdoptionRequest;
  responseDescription: string = "";
  requestId: number;
  isManager: boolean = false;

  constructor(private route: ActivatedRoute, private location: Location, private myAdoptionService: MyAdoptionService) { }

  ngOnInit(): void {
    this.getAdoptionRequestWithId();
    let userRole = sessionStorage.getItem("loggedUserRole");
    if(userRole == "manager"){
      this.isManager = true;
    }
  }

  getAdoptionRequestWithId() {
    this.requestId = +this.route.snapshot.paramMap.get('id');
    this.myAdoptionService.getAdoptionRequestWithId(this.requestId).subscribe(result => {
      console.log(result);
      this.adoptionRequest = result;
    });
  }

  approveRequest() {
    const updateAdoptionRequestDTO = {
      status:"approved",
      reason: this.responseDescription
    };
    this.myAdoptionService.putAdoptionRequestResponse(this.requestId,updateAdoptionRequestDTO).subscribe(result => {
      // console.log(result);
    });
  }


  denyRequest() {
    const updateAdoptionRequestDTO = {
      status:"rejected",
      reason: this.responseDescription
    };
    this.myAdoptionService.putAdoptionRequestResponse(this.requestId,updateAdoptionRequestDTO).subscribe(result => {
      // console.log(result);
    });
  }

  goBack() {
    this.location.back();
  }

}
