import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  template: `
    <div class="well hoverwell thumbnail"
         [routerLink]="['/recipes', recipeItem.id]">
      <img src="{{recipeItem.image}}" alt="recipeItem.title">
      <div>
        <h3>{{recipeItem.title}}</h3>
        <div>{{recipeItem.category}}</div>
      </div>
    </div>`,
  styles: [`
    .well div {
      color: #bbb;
    }
    img {
      width: 150px;
      float: left;
      margin-right: 20px;
    }
    .thumbnail {
      min-height: 190px;
    }
  `]
})

export class RecipeItemComponent {
  @Input() recipeItem: any;
}
