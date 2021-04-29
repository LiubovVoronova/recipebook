import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
  private recipes: Recipe[] = [];
  public recipesChanged = new Subject<Recipe[]>();

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getOneRecipe(id: number): Recipe {
    return this.recipes.find(recipe => recipe.id === id);
  }

  addRecipe(newRecipe) {
    newRecipe.ingredients = [];
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

}

