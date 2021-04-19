import { Injectable } from "@angular/core";
import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken:	string,
  expiresIn: string,
  localId: string,
  registered?: string
}

@Injectable()
export class AuthService {
  private signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvtEvWG4YmQQIJekIxUh_Y2UWGHIVdKdA';
  private loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvtEvWG4YmQQIJekIxUh_Y2UWGHIVdKdA';
  currentUser = new BehaviorSubject<User>(null);
  private tokenExpTimer;

  constructor(private http: HttpClient, private router: Router) {
  }

  signUp(userEmail: string, userPassword: string) {
    return this.http
      .post<AuthResponseData>(this.signUpUrl, { email: userEmail, password: userPassword, returnSecureToken: true })
      .pipe(catchError(AuthService.handleError),
        tap(resData => {
          this.updateCurrentUser(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }
      ))
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpDate: string;
    } = JSON.parse(localStorage.getItem('userData'))
    if(!userData) return

    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpDate));

    if (loadedUser.token) {
      this.currentUser.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  login(userEmail: string, userPassword: string) {
    return this.http
      .post<AuthResponseData>(this.loginUrl, { email: userEmail, password: userPassword, returnSecureToken: true })
      .pipe(catchError(AuthService.handleError),
        tap(resData => {
            this.updateCurrentUser(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
          }
        ))
  }

  logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userData');
    if (this.tokenExpTimer) {
      clearTimeout(this.tokenExpTimer);
    }
    this.tokenExpTimer = null;
    this.router.navigate(['/user/login']);
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration)
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  private updateCurrentUser(email: string, id: string, token: string, expDate: number) {
    const expirationDate = new Date(new Date().getTime() + expDate * 1000);
    const user = new User(email, id, token, expirationDate);
    this.currentUser.next(user);
    this.autoLogout(expDate * 1000);
    localStorage.setItem('userData', JSON.stringify(user))
  }

  private static handleError (errorResponse: HttpErrorResponse) {
    let errorMessage = 'Something went wrong';

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'The email address is already in use by another account';
        break
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'All requests from this device are blocked due to unusual activity. Try again later';
        break
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found';
        break
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password'
        break
    }
    return throwError(errorMessage);
  }
}
