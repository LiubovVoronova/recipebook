import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { RecipeService } from './recipes/shared/recipe.service';
import { ToastrServise } from './common/toastr.service';
import { RecipeRouteActivatorService } from './recipes/shared/recipe-route-activator.service';
import { RecipeListResolverService } from './recipes/shared/recipe-list-resolver.service';
import {AuthService} from "./user/auth.service";

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { NavbarComponent } from './nav/navbar.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { checkDirtyState, CreateRecipeComponent} from './recipes/create-recipe/create-recipe.component';
import { Error404Component } from './errors/404.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    NavbarComponent,
    RecipeDetailsComponent,
    CreateRecipeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService,
    ToastrServise,
    RecipeRouteActivatorService,
    RecipeListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateRecipe',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
