import {Component, OnInit} from '@angular/core';
import {RecipeService} from './shared/recipe.service';
import {ToastrServise} from '../common/toastr.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  recipes: any[];
  constructor(private recipeService: RecipeService, private toastr: ToastrServise) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  showArea(recipeArea) {
    this.toastr.success(recipeArea);
  }
}
