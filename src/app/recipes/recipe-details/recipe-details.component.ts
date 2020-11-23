import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {RecipeService} from '../shared/recipe.service';
import {Recipe} from "../shared/recipe.model";

@Component({
  templateUrl: './recipe-details.component.html',
  styles: [`
    .container {padding: 0 20px 0 20px;}
    .recipe-details-image {height: 200px;}
  `
  ]
})

export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipe = this.recipeService.getOneRecipe(+this.route.snapshot.params.id);
  }
}
