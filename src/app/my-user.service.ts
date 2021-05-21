import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from 'src/model/LoginDTO';
import { MessageDTO } from 'src/model/MessageDTO';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyUserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }

  postLogin(loginDTO: LoginDTO) {
    return this.httpClient.post<LoginDTO>(`http://localhost:8080/PetPushers/login_account`, loginDTO, this.httpOptions);
  }

  test() {
    return this.httpClient.get<MessageDTO>(`http://localhost:8080/PetPushers/test`, {
      withCredentials: true,
    });

  }

}
