import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  currentUser: User

  loginUser(userName: string, userPassword: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Barsik',
      lastName: 'Cat'
    }
  }

  isAuthenticated() {
    return !!this.currentUser
  }
}
