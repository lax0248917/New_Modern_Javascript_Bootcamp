// How to Model Data Efficiently

// Booleans Intro
// This primitive data type has two options "True" or "False"

true; //will return true
false; //will return false

let isLoggedIn = true;
let gameOver = false;
const isWaterWet = true;

let isHungry = true;
console.log(isHungry); //returns true
//Variables can change type, this is not usually something you would do with a boolean value.
let isAngry = false;
isAngry = 1239; // this changes the type of isAngry

// Strings
// Wrap your value in single or double quotes. Be consistant in which you choose.

('Thank you very much'); //returns Thank you very much
('he said, "hahaha" '); // this will work and return the value
// "he said, "hahaha" " // this will not work

let firstName = 'Zach';
let lastName = 'King';

console.log(firstName + ' ' + lastName); //returns Zach King

// String Indices
//All characters have an index. And they all start with the first character in the index of "0".
// All strings have a .length property.
mySong = 'Twinkle Twinkle Little Star';
console.log(mySong.length); // returns 27
// also can identify the character at a specific index
console.log(mySong[10]); // this will return "i"
// if I wanted to know what character was at the last indice
console.log(mySong[mySong.length - 1]); // this returns "r"
// strings are inmutable in javascript. (can't change the indices)

//String Methods
// Strings come with a set of built-in methods, which are actions that can be performed on a string.
// typical structure or model are thing.method().
let msg = 'you are so grounded mr';
console.log(msg.toUpperCase()); //Will return YOU ARE SO GROUNDED MR
// the original value is unchanged unless you set the change to the variable or a new variable.
let color = '   purple        ';
console.log(color.trim()); //return purple with no spaces
//Can append more than one method on a string
console.log(color.trim().toUpperCase()); // will return PURPLE no spaces

//Differnt set of string methods
// structure is thing.method(arg), some methods accept arguments that modify their behavior.
let tvShow = 'catdog';
console.log(tvShow.indexOf('cat')); // will return "0"
console.log(tvShow.indexOf('dog')); // will return "3"
console.log(tvShow.indexOf('z')); // will return "-1" (not found)

let str = 'Baseball';
console.log('Baseball'.slice(4)); // will return "ball"
// the index that is identified is the beginning of the separation.
// can have a start and an ending argument
let name = 'superhero';
console.log(name.slice(0, 5)); //will return super

let sport = 'baseball is entertaining';
console.log(sport.replace('entertaining', 'ok')); //returns baseball is ok

//Quiz
const age = '5' + '4';
console.log(age); // returns 54

'pecan pie'[7]; // will return "i"
'PUP'[3]; // undefined

let song = 'london calling';
song.toUpperCase(); // will return LONDON CALLING, but does not store the variable, so song is unchanged.

let userInput = '  TODD@gmail.com';
let cleanedInput = userInput.trim().toLowerCase();
console.log(cleanedInput); // returns todd@gmail.com

let park = 'Yellowstone';
const index = park.indexOf('Stone');
console.log(index); // returns -1

let yell = 'GO AWAY!!';
let ind = yell.indexOf('!');
console.log(ind); //will return 7

'GARBAGE'.slice(2).replace('B', ''); // will return 'RAGE'

// String Escape Characters
("He said I ain't happy"); // will return He said I ain't happy
('He said "I aint happy"'); //will return He said "I aint happy"

('Hello\nGoodbye'); // will return Hello
//  Goodbye

('c:\\'); // will return c:\

//String Template Literals
// template literals are strings that allow embedded expressions, which will be evaluated and turned into a resulting string.
// Uses backticks not quotations. Could use backticks to not worry about embedded quotation marks

let sheep = `I counted ${3 + 4} sheep`;
console.log(sheep); // will return I counted 7 sheep

let username = 'Ziggy31';
console.log(`Welcome back, ${username}`); // Welcome back, Ziggy31

console.log(`GAME OVER ${username.toUpperCase()}`); // GAME OVER ZIGGY31

let animal = 'pig';
let sound = 'oink';
console.log(`A ${animal} says ${sound}`); //A pig says oink
// we are interpolating data using template literals.
// Saves a lot of time then having to concatenate strings
let item = 'cucumbers';
let price = 1.99;
let quantity = 4;
console.log(`You bought ${quantity} ${item}, total price: $${price * quantity};`); //"You bought 4 cucumbers, total price: $7.96"

// Null and Undefined Primitive Data Types
// Null "Intentional absence of value"
let loggedInUser = null;

//Undefined is a value that we usually get back and not assign
// let color;
// console.log(color); //returns undefined
// Variables that do not have a value assinged will return undefined.

//The Math Object and Random Numbers

//Math object - contains properties and methods for mathematical constants and functions.
Math.PI; //3.1415926
//Rounding a number
Math.round(3.42); //returns 3
// remove decimal
Math.floor(3.1234); //returns 3
// Exponents
let number = Math.pow(4, 2);
console.log(number); // returns 16

//Random Numbers
//Math.random() gives us a random decimal between 0 and 1
console.log(Math.random()); //0.07878837288487 (random)
//Random Inegers
const step1 = Math.random();
const step2 = step1 * 10;
const step3 = Math.floor(step2);
const step4 = step3 + 1;
console.log(step4); // returns a random whole number between 1 and 10
//or
console.log(Math.floor(Math.random() * 10) + 1); //returns a random whole number between 1 and 10

//typeof
//typeof is an operator like the + sign
console.log(typeof 99); // returns "number"
console.log(typeof '99'); // returns "string"

//parseInt and parseFloat
// use to parse strings into numbers, but watch out for NaN;

parseInt('24'); // returns the number 24
parseFloat('24.567'); // returns the number 24.567
