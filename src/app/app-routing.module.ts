import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { Error404Component } from './errors/404.component';
import { RecipeRouteActivatorService } from './recipes/shared/recipe-route-activator.service';
import { UserModule } from "./user/user.module";
import { RecipeListResolverService } from './recipes/shared/recipe-list-resolver.service';


export const appRoutes: Routes = [
  { path: 'recipes/new', component: CreateRecipeComponent, canDeactivate: ['canDeactivateCreateRecipe']},
  { path: 'recipes', component: RecipeListComponent, resolve: [RecipeListResolverService]},
  { path: 'recipes/:id', component: RecipeDetailsComponent, canActivate: [RecipeRouteActivatorService]},
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'user', loadChildren: () => UserModule }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
