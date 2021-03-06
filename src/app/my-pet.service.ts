import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdoptionRequest } from 'src/model/AdoptionRequest';
import { Pet, PetDTO } from 'src/model/PetDTO';
import { VirtualPet } from 'src/model/virtualPet';

@Injectable({
  providedIn: 'root'
})
export class MyPetService {

  // postHttpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     Authorization: 'my-auth-token',
  //   }),
  //   withCredentials: true
  // };

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

  constructor(private httpClient: HttpClient) { }

  getRealPets(){
    return this.httpClient.get<VirtualPet[]>(`http://ec2-3-134-105-36.us-east-2.compute.amazonaws.com:8080/PetPushers/view_adoptable_pet`, this.getHttpOptions);
  }

  getAllPets(){
    return this.httpClient.get<Pet[]>(`http://ec2-3-134-105-36.us-east-2.compute.amazonaws.com:8080/PetPushers/view_adoptable_pet`, this.getHttpOptions);
  }

  getPetWithId(id: number){
    return this.httpClient.get<Pet>(`http://ec2-3-134-105-36.us-east-2.compute.amazonaws.com:8080/PetPushers/view_adoptable_pet/${id}`, this.getHttpOptions);
  }

  addPet(petDTO: PetDTO){
    return this.httpClient.post<PetDTO>(`http://ec2-3-134-105-36.us-east-2.compute.amazonaws.com:8080/PetPushers/create_pet_adoption`, petDTO, this.postPetHttpOptions);
  }
  
}
