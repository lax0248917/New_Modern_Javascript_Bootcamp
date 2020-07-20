//Primitive Types
// - Number
// - String
// - Boolean
// - Null
// - Undefined
// - 2 others symbol and bigInt

// Running Code in JS Console
// - Great for debugging and running little pieces of code

// Introducing Numbers
// - Javascript has ONE Number type
// - Positive, negative, decimals (limited level of preceision), Whole Numbers
// - Simple Operations (Addition, Subtraction, Multiplication, Division, Modulo (remainder), exponent)
// +, -, *, /, %, **

// NaN - not a number
// - 0/0 equals NaN
// - 1 + NaN still equals NaN
// - 1/0 equals Infinity
// - -1/0 equals -Infinity
// - 0 and -0

// Numbers Quiz
// 1.5 + 1.5 * 2 //4.5
// (10 % 6) ** 2 //16
// 200 + 0/0 //NaN

// Variables & Let
// - basic syntax: let someName = value
// - using "let" allows you to update the value of a variable but not re-assign the variable

let age = 72;
age; // returns 72
let hens = 4;
let roosters = 2;
console.log(hens + roosters); // returns 6

// How to update values
age = age + 1;
// Be sure to understand that the variable age has already been defined above, to change its value you can reference the defined variable and make changes, the next time you access that variable it will contain the new value.
// Make sure to use camelCase when naming variables, they should be descriptive of what they are defining
let myAge = 38;
// Also, when using "let", once you define a variable you can not use "let" again to assign a different value to the same variable. It is already defined in that scope.

// Unary Operators
let score = 0;
score = score + 10;
score; //returns 10

score += 1;
score; // returns 11

score -= 100;
score; // returns -89

score = 150;
let bonusMult = 3;
score *= bonusMult;
score; // returns 450

let counter = 0;
counter++; // counter ++ is not the same, this has two sides
counter; // returns 1

let sum = 4;
sum--;
sum; // returns 3

// Introducing Const
// - const works just like let, except you CANNOT change the value
const year = 1973;
year += 1; // returns error

//when to use const over let
const pi = 3.14159;
const daysInWeek = 7;
const minHeightForRide = 60;
// in situations where you don't want to change the variable.
// can not have variables with the same name regardless of const or let

// Var Keyword
// var is available but not widely used today
var eggs = 12;
eggs; // returns 12

// Variables Quiz
//What is the value of eggCount
let eggCount = 42;
eggCount + 2;
// eggCount = 42

//What is the value of rating after this code runs?
const rating = 7.5;
rating = 8;
//error

//What's the value of wind_speed
let wind_speed = 76;
wind_speed += 5; //81
wind_speed--; //80
// should be camelCase // windSpeed
