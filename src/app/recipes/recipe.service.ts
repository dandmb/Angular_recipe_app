import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A recipe', 'this is the a recipe description',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww',
      [
        new Ingredient("Meat", 4),
        new Ingredient("Fries", 5),
      ]
    ),
    new Recipe(
      'Another recipe', 'this is the a recipe description',
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=60&w=1400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D',
      [
        new Ingredient("Onion", 2),
        new Ingredient("Bread", 1),
      ]
    ),
  ]

  constructor(private slService:ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice()//return a copy of the original
  }
  addIngredientToSList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
}
