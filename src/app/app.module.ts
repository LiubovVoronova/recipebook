import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item.component';
import { NavbarComponent } from './nav/navbar.component';
import { RecipeService } from './recipes/shared/recipe.service';
import { ToastrServise } from './common/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RecipeService,
    ToastrServise
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
