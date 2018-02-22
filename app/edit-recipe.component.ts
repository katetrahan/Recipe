import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component ({
  selector: 'edit-recipe',
  template: `
  <div>
    <div *ngIf="childSelectedRecipe">
      <h3>{{childSelectedRecipe.ingredients}}</h3>
      <h3>Edit Recipe</h3>
      <label>Enter Recipe:</label>
      <input [(ngModel)]="childSelectedRecipe.ingredients">
      <br>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>`
})

export class EditRecipeComponent {
  @Input() childSelectedRecipe: Recipe;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
