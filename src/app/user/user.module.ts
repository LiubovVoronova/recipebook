import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { userRoutes } from "./user.routes";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from './login/login.component';
import { CommonSharedModule } from '../common/common-shared.module';


@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      CommonSharedModule,
      RouterModule.forChild(userRoutes),
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: []
})

export class UserModule {

}
