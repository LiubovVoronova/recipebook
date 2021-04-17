import { Component } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ToastrServise } from '../../common/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmail: string;
  userPassword: string;
  mouseOverLogin;
  isLoginMode = true;
  isLoading = false;

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrServise) { }

  onLogin(form) {
    if (form.invalid) return;

    this.isLoading = true;

    if (this.isLoginMode) {
      // dd
    } else {
      this.authService.signUp(form.value.userEmail, form.value.userPassword)
        .subscribe(responseData => {
          console.log(responseData)
          this.toastr.success('User successfully signed in');
          this.isLoading = false;
        }, errorMessage => {
          console.log(errorMessage)
          this.toastr.error(errorMessage)
          this.isLoading = false;
        });
    }

    form.reset()
    // this.router.navigate(['recipes'])
  }

  onCancel() {
    this.router.navigate(['recipes'])
  }

  onSwitchButton() {
    this.isLoginMode = !this.isLoginMode;
  }

}
