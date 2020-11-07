import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../shared/recipe.service';

@Component({
  templateUrl: './recipe-details.component.html',
  styles: [`
    .container {padding: 0 20px 0 20px;}
    .recipe-details-image {height: 100px;}
  `
  ]
})

export class RecipeDetailsComponent implements OnInit {
  recipe: any;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipe = this.recipeService.getOneRecipe(52841);
  }
}
