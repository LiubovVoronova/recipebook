import { Component } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string;
  userPassword: string;
  mouseOverLogin;

  constructor(private authService: AuthService,
              private router: Router) { }

  onLogin(formValues) {
    this.authService.loginUser(formValues.userName, formValues.userPassword);
    this.router.navigate(['recipes'])
  }

  onCancel() {
    this.router.navigate(['recipes'])
  }

}
