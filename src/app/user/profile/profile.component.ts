import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {ToastrServise} from "../../common/toastr.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit {
  profileForm: FormGroup;
  private firstName;
  private lastName;

  constructor(private authService: AuthService,
              private toastr: ToastrServise,
              private router: Router) {}

  ngOnInit(): void {
    // this.firstName = new FormControl(this.authService.currentUser.firstName,
    //   [Validators.required, Validators.pattern('[a-zA-z].*')]);
    // this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    // this.profileForm = new FormGroup({
    //   firstName: this.firstName,
    //   lastName: this.lastName
    // })
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  onSaveProfile(formValues) {
    if (this.profileForm.valid) {
      // this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['recipes'])
    }
  }

  onCancel() {
    this.router.navigate(['recipes'])
  }

}
