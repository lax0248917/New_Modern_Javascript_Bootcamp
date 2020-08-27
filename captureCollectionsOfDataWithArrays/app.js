// Capture Collections of Data with Arrays

//Creating Arrays
// To make an empty array
let students = [];
// An array of strings
let colors = ["red", "orange", "yellow"];
// An Array of mumbers
let lottoNums = [19, 22, 56, 12, 51];
// A mixed Array
let stuff = [true, 68, "cat", null];

// Example 1
let shoppingList = ["cereal", "cheese", "ice"];

// Array Indices
// arrays are indexed just like strings are, with the first value with an index of 0
shoppingList[1]; //returns "cheese"
shoppingList[0]; //returns "cereal"
shoppingList[8]; //returns "undefined"
shoppingList.length; //returns 3

//Modifying Arrays
//change items in an array
let shopList = ["chedder cheese", "2% milk"];
shopList[1] = "whole milk";
shopList; // will return ['chedder cheese', 'whole milk']
//Can add items to an array this way but not the best solution
shopList[2] = "ice cream";
shopList; // will return ['chedder cheese', 'whole milk', 'ice cream']
// or can do it this way as well
shopList[shopList.length] = "tomatoes";
shopList; // will return ['chedder cheese', 'whole milk', 'ice cream', 'tomatoes']

// Push and Pop
let topSongs = [
  "First Time Ever I Saw Your Face",
  "God Only Knows",
  "A Day In The Life",
  "Life On Mars",
];

// Push - add to end
topSongs.push("Fortunate Son");
// Pop - remove from end
topSongs.pop();
// Shift - remove from start
topSongs.shift();
// Unshift - add to start
topSongs.unshift("O Holy Night");
// just remember that you can unshift multiple items at once but they are added as a chunk of items, different behavior if you were to add them one at a time.

// topSongs will return [
//   'O Holy Night',
//   'God Only Knows',
//   'A Day In The Life',
//   'Life On Mars'
// ];

// More Array Methods!!!!

//Concat
let fruits = ["apple", "banana"];
let veggies = ["asparagus", "brussel sprouts"];
let meats = ["steak", "chicken"];
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFood = fruits.concat(veggies, meats);

//Includes (boolean method, returns true or false)
let ingredients = [
  "water",
  "corn starch",
  "flour",
  "cheese",
  "brown sugar",
  "shrimp",
  "eel",
  "butter",
];

console.log(ingredients.includes("fish")); // returns false (not in array)
console.log(ingredients.includes("cheese")); // returns true (in array)

if (ingredients.includes("flour")) {
  console.log("I am gluten free, I cannot eat that!!");
}

//IndexOf
console.log(ingredients.indexOf("eel")); // returns 6

//Reverse (mutates the original array)
let letters = ["T", "C", "E", "P", "S", "E", "R"];
console.log(letters.reverse()); // a reversed array that will become the new array

//Join
console.log(letters.join()); //returns R,E,S,P,E,C,T
console.log(letters.join("-")); //returns R-E-S-P-E-C-T

// if you try to join items in an array that are not of type string, it will join them and turn them into a string.

//Slice
let animals = ["shark", "salmon", "whale", "bear", "lizard", " tortoise"];
let swimmers = animals.slice(0, 3);
console.log(swimmers); //returns ["shark", "salmon", "whale"]
// just remember that the ending index does not include that item.
let quadruped = animals.slice(-3);
console.log(quadruped); // returns ['bear', 'lizard', ' tortoise']

//Splice

// to insert values
animals.splice(1, 0, "octopus");
console.log(animals); //returns ["shark", "octopus", "salmon", "whale", "bear", "lizard", " tortoise"]

//to remove values
animals.splice(3, 2);
console.log(animals); //returns ["shark", "octopus", "salmon", "lizard", " tortoise"]

//Sorting (Part 1)
// you will need to base your sort off of a function that tells it how to sort. By default it sorts by string character codes

let people = ["Mrs. Robinson", "Angie", "Jolene", "Maggie May", "Roxanne"];
console.log(people.sort()); //returns ["Angie", "Jolene", "Maggie May", "Mrs. Robinson", "Roxanne"]
let nums = [34, 10, 100000, 67, 99];
console.log(nums.sort()); //returns [10, 100000, 34, 67, 99]

// Intro to Reference Types

//Value Type Variable
//Arrays create a reference in memory to the array, not the actual value. Primitive data types are stored with their values.

//Using Const with Arrays
// values can change as long as the reference remains the same
const myEggs = ["brown", "brown"];
myEggs.push("purple");
myEggs[0] = "green";
//myEggs = ['blue', 'pink']  this would result in an error
console.log(myEggs); //returns ["green", "brown", "purple"]

//Working with Nested Arrays
const newColors = [
  ["red", "crimson"],
  ["orange", "dark orange"],
  ["yellow", "golden rod"],
  ["green", "olive"],
  ["blue", "navy blue"],
  ["purple", "orchid"],
];
//accessing specific elements in the nested arrays
console.log(newColors[1][1]); // returns dark orange
//nested arrays are good for building boards

const board = [
  ["O", null, "X"],
  [null, "X", "O"],
  ["X", "O", null],
];
