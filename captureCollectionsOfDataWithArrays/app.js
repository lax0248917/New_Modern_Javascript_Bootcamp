// Capture Collections of Data with Arrays

//Creating Arrays
// To make an empty array
let students = [];
// An array of strings
let colors = ['red', 'orange', 'yellow'];
// An Array of mumbers 
let lottoNums = [19,22,56,12,51];
// A mixed Array 
let stuff = [true, 68, 'cat', null];

// Example 1 
let shoppingList = ['cereal', 'cheese', 'ice'];

// Array Indices
// arrays are indexed just like strings are, with the first value with an index of 0
shoppingList[1]; //returns "cheese"
shoppingList[0]; //returns "cereal"
shoppingList[8]; //returns "undefined"
shoppingList.length; //returns 3

//Modifying Arrays
//change items in an array
let shopList = ['chedder cheese', '2% milk'];
shopList[1] = 'whole milk';
shopList // will return ['chedder cheese', 'whole milk']
//Can add items to an array this way but not the best solution
shopList[2] = 'ice cream';
shopList // will return ['chedder cheese', 'whole milk', 'ice cream']
// or can do it this way as well
shopList[shopList.length] = 'tomatoes';
shopList // will return ['chedder cheese', 'whole milk', 'ice cream', 'tomatoes']

// Push and Pop
// Push - add to end  



