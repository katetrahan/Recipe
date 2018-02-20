import { Component } from '@angular/core';
// import { Recipe } from './recipe';

@Component ({
  selector: 'app-root',
  template: `
  <h1>Recipe App</h1>
  <h3>{{currentFood.name}}</h3>
  <ul>
    <li><strong>Name:</strong> {{currentFood.name}}</li>
    <li><strong>Ingredients:</strong> {{currentFood.ingredients}}</li>
    <li><strong>Directions:</strong> {{currentFood.directions}}</li>
  </ul>`
})

export class AppComponent{
  currentFood: Recipe = new Recipe('Tacos', "Tortilla, salsa, sour cream, cheese", "put ingredients in Tortilla");

}

export class Recipe {
  constructor( public name: string, public ingredients: string, public directions: string){

  }
}
