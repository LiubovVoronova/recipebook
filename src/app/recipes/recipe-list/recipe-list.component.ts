import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../shared/recipe.service';
import {ToastrServise} from '../../common/toastr.service';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from "../shared/recipe.model";

@Component({
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
              private toastr: ToastrServise,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.route.snapshot.data.recipes;
  }

  showArea(recipeArea) {
    this.toastr.success(recipeArea);
  }
}
