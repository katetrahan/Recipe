import { Component } from '@angular/core';
// import { Recipe } from './recipe';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe App</h1>
    <h3>{{currentFood.name}}</h3>
    <ul>
      <li *ngFor ="let currentRecipe of recipes">{{currentRecipe.ingredients}} <button (click)="editRecipe()">Edit!</button></li>
    </ul>
  </div>`
})

export class AppComponent{
  currentFood: string = 'Recipes';
  recipes: Recipe[] = [
    new Recipe('Tacos', "Tortilla, salsa, sour cream, cheese", "put ingredients in Tortilla"),
    new Recipe('Mac and Cheese', 'cheese, milk, butter, noodles', 'boil water, add noodles, add cheese and milk when noodles are soft, stir'),
    new Recipe('Cereal', 'Cereal and Milk', 'put cereal in bowl and pour milk over cereal')
  ];

  editRecipe() {
    alert("You requested to edit a recipe");
  }
}

export class Recipe {
  constructor( public name: string, public ingredients: string, public directions: string){
  }
}
