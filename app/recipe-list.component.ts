import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component ({
  selector: 'recipe-list',
  template: `
  <ul>
    <li *ngFor ="let currentRecipe of childRecipeList">{{currentRecipe.ingredients}} <button (click)="editButtonHasBeenClicked(currentRecipe)">Edit!</button></li>
  </ul>`
})

export class RecipeListComponent {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }
}
