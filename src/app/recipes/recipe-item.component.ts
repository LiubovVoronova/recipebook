import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{recipeItem.title}}</h2>
      <div>{{recipeItem.description}}</div>
    </div>`,
  styles: [`
    .well div {
      color: #bbb;
    }
  `]
})

export class RecipeItemComponent {
  @Input() recipeItem: any;
}
