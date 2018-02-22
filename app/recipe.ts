class Recipe {
  constructor( public name: string, public ingredients: string, public directions: string){
  }
}

var recipes: Recipe[] = []
recipes.push(new Recipe('Tacos', 'Tortilla, lettuce, tomatoes, beef, chiptole sauce, cheese, sour cream, olives', 'cook meat, put meat in Tortilla, put desired toppings on top of meat'));
recipes.push(new Recipe('Mac n Cheese', 'noodles, milk, cheese, butter', 'boil water, put noodles in water, put noodles in strainer(removing water from noodles, add cheese and milk, stir and enjoy.)'));
recipes.push(new Recipe('Cereal', 'Milk, Cereal', 'pour cereal in bowl, pour milk over cereal'));
console.log(recipes);

for(var recipe of recipes) {
  console.log(recipe)
}
