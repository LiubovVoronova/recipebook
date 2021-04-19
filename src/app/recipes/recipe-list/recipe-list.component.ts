import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { ToastrServise } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from "../shared/recipe.model";
import { Subscription } from 'rxjs';
import { AuthService } from '../../user/auth.service';

@Component({
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private toastr: ToastrServise,
              private auth:AuthService) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
    // if (this.auth.isAuthenticated()) {
    //
    // }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showArea(recipeArea) {
    this.toastr.success(recipeArea);
  }
}
