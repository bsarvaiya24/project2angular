import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdoptionRequest, AdoptionRequestDTO, UpdateAdoptionRequestDTO } from 'src/model/AdoptionRequest';
import { MessageDTO } from 'src/model/MessageDTO';

@Injectable({
  providedIn: 'root'
})
export class MyAdoptionService {

  constructor(private httpClient: HttpClient) { }

  postPetHttpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      Authorization: 'my-auth-token',
    }),
    withCredentials: true
  };

  getHttpOptions = {
    headers: new HttpHeaders({
      Authorization: 'my-auth-token'
    }),
    withCredentials: true
  };

  addAdoptionRequest(adoptionRequest: AdoptionRequestDTO){
    return this.httpClient.post<AdoptionRequestDTO>(`http://localhost:8080/PetPushers/make_adoption_request`, adoptionRequest, this.postPetHttpOptions);
  }

  putAdoptionRequestResponse(requestId: number,updateAdoptionRequestDTO: UpdateAdoptionRequestDTO){
    return this.httpClient.put<AdoptionRequest>(`http://localhost:8080/PetPushers/update_adoption_request/${requestId}`, updateAdoptionRequestDTO, this.postPetHttpOptions);
  }

  getAllAdoptionRequests() {
    return this.httpClient.get<AdoptionRequest[]>(`http://localhost:8080/PetPushers/view_adoption_status`, this.getHttpOptions);
  }

  getUserAdoptionRequests(userId: number) {
    return this.httpClient.get<AdoptionRequest[]>(`http://localhost:8080/PetPushers/view_adoption_status/${userId}`, this.getHttpOptions);
  }

  getAdoptionRequestWithId(id: number) {
    return this.httpClient.get<AdoptionRequest>(`http://localhost:8080/PetPushers/view_adoption_status/${id}`, this.getHttpOptions);
  }

}
