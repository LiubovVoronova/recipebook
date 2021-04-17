import { Injectable } from "@angular/core";
import { AuthResponseData, User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ToastrServise } from '../common/toastr.service';
import { throwError } from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: User
  private authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvtEvWG4YmQQIJekIxUh_Y2UWGHIVdKdA'

  constructor(private http: HttpClient) {
  }

  signUp(userEmail: string, userPassword: string) {
    return this.http
      .post<AuthResponseData>(this.authUrl, { email: userEmail, password: userPassword, returnSecureToken: true })
      .pipe(catchError(errorResponse => {
        let errorMessage = 'Something went wrong';

        if (!errorResponse.error || !errorResponse.error.error) {
          return throwError(errorMessage);
        }
        switch (errorResponse.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'The email address is already in use by another account';
            break
          case 'OPERATION_NOT_ALLOWED':
            errorMessage = 'Password sign-in is disabled for this project';
            break
          case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            errorMessage = 'All requests from this device are blocked due to unusual activity. Try again later';
            break
        }
        return throwError(errorMessage);
      }))

  }

  isAuthenticated() {
    return !!this.currentUser
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
