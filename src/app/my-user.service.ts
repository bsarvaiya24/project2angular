import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
    return this.httpClient.get<MessageDTO>(`http://localhost:8080/PetPushers/logout_account`, this.getHttpOptions).pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(errorMsg);
      })
    );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
          return `Not Found: ${error.message}`;
        }
        case 403: {
          return `Access Denied: ${error.message}`;
        }
        case 500: {
          return `Internal Server Error: ${error.message}`;
        }
        case 400: {
          sessionStorage.removeItem("loggedUser");
          location.replace("/");
          return `Unable to find session: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
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
