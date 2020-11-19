import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Recipe} from "./recipe.model";

@Injectable()

export class RecipeService {
  getRecipes(): Observable<Recipe[]> {
    const subject = new Subject<Recipe[]>()
    setTimeout(() => { subject.next(recipes); subject.complete(); },
      2000);
    return subject;
  }
  getOneRecipe(id: number): Recipe {
    return recipes.find(recipe => recipe.id === id);
  }
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Creamy Tomato Soup',
    category: 'Starter',
    area: 'British',
    description: 'Put the oil, onions, celery, carrots, potatoes and bay leaves in a big casserole dish, or two saucepans. Fry gently until the onions are softened – about 10-15 mins. Fill the kettle and boil it.\\r\\nStir in the tomato purée, sugar, vinegar, chopped tomatoes and passata, then crumble in the stock cubes. Add 1 litre boiling water and bring to a simmer. Cover and simmer for 15 mins until the potato is tender, then remove the bay leaves. Purée with a stick blender (or ladle into a blender in batches) until very smooth. Season to taste and add a pinch more sugar if it needs it. The soup can now be cooled and chilled for up to 2 days, or frozen for up to 3 months.\\r\\nTo serve, reheat the soup, stirring in the milk – try not to let it boil. Serve in small bowls with cheesy sausage rolls.',
    image: 'https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg',
    ingredients: []
  },
  {
    id: 2,
    title: 'Crock Pot Chicken Baked Tacos',
    category: 'Chicken',
    area: 'Mexican',
    description: 'Put the uncooked chicken breasts in the crock pot. Pour the full bottle of salad dressing over the chicken. Sprinkle the rest of the ingredients over the top and mix them in a bit with a spoon.\\r\\nCover your crock pot with the lid and cook on high for 4 hours.\\r\\nRemove all the chicken breasts from the crock pot and let cool.\\r\\nShred the chicken breasts and move to a glass bowl.\\r\\nPour most of the liquid over the shredded chicken.\\r\\nFOR THE TACOS:\\r\\nMake the guacamole sauce by mixing the avocado and green salsa together. Pour the guacamole mixture through a strainer until smooth and transfer to a squeeze bottle. Cut the tip off the lid of the squeeze bottle to make the opening more wide if needed.\\r\\nMake the sour cream sauce by mixing the sour cream and milk together until you get a more liquid sour cream sauce. Transfer to a squeeze bottle.\\r\\nIn a 9x 13 glass baking dish, fill all 12+ tacos with a layer of refried beans, cooked chicken and shredded cheese.\\r\\nBake at 450 for 10-15 minutes just until the cheese is melted and bubbling.\\r\\nOut of the oven top all the tacos with the sliced grape tomaotes, jalapeno and cilantro.\\r\\nFinish with a drizzle of guacamole and sour cream.\\r\\nEnjoy!',
    image: 'https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg',
    ingredients: []
  },
  {
    id: 3,
    title: 'Chocolate Gateau',
    category: 'Dessert',
    area: 'French',
    description: 'Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\\r\\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\\r\\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\\r\\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.',
    image: 'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg',
    ingredients: []
  }
];
