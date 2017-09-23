var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("While loop:")

var ingList = 0;

while (ingList < ingredients.length) {
  ingList = ingredients + 1;
  console.log("Contents of the ingredients: " + ingList);
}

console.log("\nFor loop:")
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("\nAny loop, backwards:")
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}