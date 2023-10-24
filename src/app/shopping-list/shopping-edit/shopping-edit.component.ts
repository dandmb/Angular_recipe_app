import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('nameInput',{static:false}) nameInputRef!:ElementRef;
  @ViewChild('amountInput',{static:false}) amoutInputRef!:ElementRef;

  constructor(private slService:ShoppingListService) {
  }
  onAddItem() {
    const ingName=this.nameInputRef.nativeElement.value
    const ingAmount=this.amoutInputRef.nativeElement.value
    const newIngredient=new Ingredient(ingName,ingAmount)
    this.slService.addIngredient(newIngredient)
  }

  ngOnInit(): void {
  }
}
