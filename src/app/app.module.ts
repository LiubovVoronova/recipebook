import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { NavbarComponent } from './nav/navbar.component';
import { RecipeService } from './recipes/shared/recipe.service';
import { ToastrServise } from './common/toastr.service';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    NavbarComponent,
    RecipeDetailsComponent,
    CreateRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService,
    ToastrServise
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
