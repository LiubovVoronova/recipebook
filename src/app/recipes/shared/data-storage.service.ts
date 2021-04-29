import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../user/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  private dataBaseUrl = 'https://kitchenapp-ad647.firebaseio.com/recipes.json';
  private mealDataBaseUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(this.dataBaseUrl, recipes)
      .subscribe(response => {
        console.log(response)
    })
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(this.dataBaseUrl)
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }

  getRandomRecipe(): Observable<Recipe> {
    return this.http
      .get<Recipe>(this.mealDataBaseUrl)
      .pipe(
        map(randomRecipe => {
          const fullRecipe = randomRecipe['meals'][0];
          return {
            id: fullRecipe.idMeal,
            title: fullRecipe.strMeal,
            category: fullRecipe.strCategory,
            area: fullRecipe.strArea,
            description: fullRecipe.strInstructions,
            image: fullRecipe.strMealThumb,
            ingredients: []
          }
        })
      )
  }

  getTenRandomRecipes() {
    // The Meal DB allows only one random recipe per request
    let numberOfRequests = 10;
    let randomRecipes: Recipe[] = [];

    for (let i = 0; i < numberOfRequests; i++) {
      this.getRandomRecipe().subscribe(randomRecipe => {
        if (randomRecipes.length > 0) {
          const sameId = randomRecipes.some(item => item.id === randomRecipe.id)
          sameId ? numberOfRequests++ : randomRecipes.push(randomRecipe);
        } else {
          randomRecipes.push(randomRecipe);
        }

        if (randomRecipes.length === 10) {
          this.recipeService.setRecipes(randomRecipes);
        }
      });
    }
  }
}
