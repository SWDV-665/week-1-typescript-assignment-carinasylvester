/* SWDV 665
Week 1: Grocery App - TypeScript Assignment
Carina Sylvester */

export {}

// Creates a Grocery class and declares attributes with their data types
class Grocery {
  name: string;
  quantity: number;

  // Adds a constructor
  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }
}

// Creates a list of Grocery items
let GroceryList = [
  new Grocery("Milk", 3),
  new Grocery("Bread", 6),
  new Grocery("Eggs", 11)
]

// Accesses the HTML element with ID app
const element = document.getElementById("app");

// Creates and appends a paragraph p for each item in the Grocery list
GroceryList.forEach(e => {
  const p = document.createElement("p");
  p.textContent= e.name + " : " + e.quantity;
  element.appendChild(p);
});
