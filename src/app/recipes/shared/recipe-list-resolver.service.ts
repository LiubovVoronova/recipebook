import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {RecipeService} from './recipe.service';
import {map} from 'rxjs/operators';


@Injectable()

export class RecipeListResolverService implements Resolve<any> {

  constructor(private recipeService: RecipeService) {}

  resolve() {
   return this.recipeService.getRecipes().pipe(map(recipes => recipes ));
  }

}
