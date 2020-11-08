import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';

export const appRoutes: Routes = [
  {path: 'recipes', component: RecipeListComponent},
  {path: 'recipes/new', component: CreateRecipeComponent},
  {path: 'recipes/:id', component: RecipeDetailsComponent},
  {path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
