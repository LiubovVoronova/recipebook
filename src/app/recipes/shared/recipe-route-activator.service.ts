import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { RecipeService } from './recipe.service';


@Injectable()
export class RecipeRouteActivatorService implements CanActivate {
  constructor(private recipeService: RecipeService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const recipeExists = !!this.recipeService.getOneRecipe(+route.params.id);
    if (!recipeExists) {
      this.router.navigate(['/404']);
    }
    return recipeExists;
  }
}
