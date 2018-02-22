import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe App</h1>
    <h3>{{currentFood}}</h3>
    <recipe-list [childRecipeList]="masterRecipeList" (clickSender)="editRecipe($event)"></recipe-list>
    <hr>
    <edit-recipe [childSelectedRecipe]="selectedRecipe" (doneButtonClickedSender)="finishedEditing()"></edit-recipe>
  </div>`
})

export class AppComponent{
  currentFood: string = 'Recipes';
  selectedRecipe = null; // edit form isnt displayed when page first loads

  masterRecipeList : Recipe[] = [
    new Recipe('Tacos', "Tortilla, salsa, sour cream, cheese", "put ingredients in Tortilla"),
    new Recipe('Mac and Cheese', 'cheese, milk, butter, noodles', 'boil water, add noodles, add cheese and milk when noodles are soft, stir'),
    new Recipe('Cereal', 'Cereal and Milk', 'put cereal in bowl and pour milk over cereal')
  ];

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

}
