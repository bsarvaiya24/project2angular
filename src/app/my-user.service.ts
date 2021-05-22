import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from 'src/model/LoginDTO';
import { MessageDTO } from 'src/model/MessageDTO';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User, UserDTO } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class MyUserService {

  postHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
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

  postLogin(loginDTO: LoginDTO) {
    return this.httpClient.post<User>(`http://localhost:8080/PetPushers/login_account`, loginDTO, this.postHttpOptions);
  }

  getLogout() {
    return this.httpClient.get<MessageDTO>(`http://localhost:8080/PetPushers/logout_account`, this.getHttpOptions);
  }

  postSignup(userDTO: UserDTO) {
    return this.httpClient.post<LoginDTO>(`http://localhost:8080/PetPushers/register_account`, userDTO, this.postHttpOptions);
  }

  test() {
    return this.httpClient.get<MessageDTO>(`http://localhost:8080/PetPushers/test`, {
      withCredentials: true,
    });

  }

}
