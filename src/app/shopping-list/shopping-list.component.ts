import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingredient[]=[
    new Ingredient('Mango',5),
    new Ingredient('Apple',6)
  ]

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}
