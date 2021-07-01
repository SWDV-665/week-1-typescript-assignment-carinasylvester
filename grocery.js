/* SWDV 665
Week 1: Grocery App - TypeScript Assignment
Carina Sylvester */

export {}

// Creates a Grocery class and declares attributes with their data types
var Grocery = /** @class */ (function () {
    // Adds a constructor
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());

// Creates a list of Grocery items
var GroceryList = [
    new Grocery("Milk", 3),
    new Grocery("Bread", 6),
    new Grocery("Eggs", 11)
];

// Accesses the HTML element with ID app
var element = document.getElementById("app");

// Creates and appends a paragraph p for each item in the grocery list
GroceryList.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = e.name + " : " + e.quantity;
    element.appendChild(p);
});
