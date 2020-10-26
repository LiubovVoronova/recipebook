import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item.component';
import { NavbarComponent } from './nav/navbar.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
