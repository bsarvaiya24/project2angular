import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adoption-request-details',
  templateUrl: './adoption-request-details.component.html',
  styleUrls: ['./adoption-request-details.component.css']
})
export class AdoptionRequestDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location,) { }

  ngOnInit(): void {
    this.getPetDetails();
  }

  getPetDetails() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("HttpClient Request to get details for pet with id: "+id);
  }

  goBack() {
    this.location.back();
  }

}
