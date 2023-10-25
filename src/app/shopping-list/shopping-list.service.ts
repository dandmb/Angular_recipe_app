import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged=new Subject<Ingredient[]>()

  private ingredients:Ingredient[]=[
    new Ingredient('Mango',5),
    new Ingredient('Apple',6)
  ]
  constructor() { }
  getIngredients(){
    return this.ingredients.slice()
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    /*
    for (let ingredient of ingredients){
      this.addIngredient(ingredient)
    }*/
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
