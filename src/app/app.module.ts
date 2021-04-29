import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { RecipeService } from './recipes/shared/recipe.service';
import { ToastrServise } from './common/toastr.service';
import { RecipeRouteActivatorService } from './recipes/shared/recipe-route-activator.service';
import { AuthService } from "./user/auth.service";

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { NavbarComponent } from './nav/navbar.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { checkDirtyState, CreateRecipeComponent} from './recipes/create-recipe/create-recipe.component';
import { Error404Component } from './errors/404.component';
import { IngredientListComponent } from './recipes/ingredient-list/ingredient-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './user/auth-interceptor.service';
import { CommonSharedModule } from './common/common-shared.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    NavbarComponent,
    RecipeDetailsComponent,
    CreateRecipeComponent,
    Error404Component,
    IngredientListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        CommonSharedModule
    ],
  providers: [
    RecipeService,
    ToastrServise,
    RecipeRouteActivatorService,
    AuthService,
    {
      provide: 'canDeactivateCreateRecipe',
      useValue: checkDirtyState
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
