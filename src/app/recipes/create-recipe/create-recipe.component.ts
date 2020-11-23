import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient, Recipe } from "../shared/recipe.model";
import { RecipeService } from "../shared/recipe.service";

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  isDirty = true;
  newRecipe: Recipe;
  newIngredient: Ingredient;

  constructor(private router: Router,
              private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  saveNewRecipe(newRecipeValues) {
    this.recipeService.saveRecipe(newRecipeValues);
    this.isDirty = false;
    this.router.navigate(['/recipes']);
  }

  returnToMain() {
    this.router.navigate(['/recipes']);
  }
}

export function checkDirtyState(component: CreateRecipeComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this recipe. Do you want to cancel?');
  } else {
    return true;
  }
}
