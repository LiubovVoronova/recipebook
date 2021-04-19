import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from "../shared/recipe.model";
import { Subscription } from 'rxjs';
import { AuthService } from '../../user/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipesSub: Subscription;
  userSub: Subscription;
  isAuthenticated = false;

  constructor(private recipeService: RecipeService, private authService: AuthService, private dataStorage: DataStorageService) {
  }

  ngOnInit() {
    this.userSub = this.authService.currentUser.subscribe(user => {
      this.isAuthenticated = !!user;
    });

    this.recipesSub = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );

    if (this.isAuthenticated) {
      this.dataStorage.fetchRecipes().subscribe(result => {
        this.recipes = result;
      })
    } else {
      this.dataStorage.getTenRandomRecipes()
    }
  }

  //TODO add the Refresh button for random recipes

  ngOnDestroy() {
    this.recipesSub.unsubscribe();
  }
}
