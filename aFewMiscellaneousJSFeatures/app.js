// A Few Miscellaneous JS Features

// New JS Features Intro
// Default Parameters - a way to set a default parameter when a value is not passed in for that parameter
function multiply(a, b = 1) {
    return a * b;
}
multiply(4); // 4
multiply(4, 5); // 20

function multiply(x, y) {
    if(typeof y === "undefined") {
        y = 1;
    }
    return x * y;
}
const greet = (person, greeting = "hi") => {
    console.log(`${greeting}, ${person}!`);
}
greeting("tim"); // "hi, tim!"
greeting("tim", "Yo"); // "Yo, tim!"
// can use different data types like arrays, but default params must come at the end of your list of parameters

// Spread
// the Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls)
// or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs
// (for object literals) are expected.

//Spread for Function calls
const nums = [9, 3, 2, 8];
Math.max(nums); // NaN
// use spread! Expands an iterable (array, string, etc) into individual arguments
Math.max(...nums); // 67
// Same as calling: Math.max(9,3,2,8)
function giveMeFour(a, b, c, d) {
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
    console.log("d", d)
};
const colors = ["red", "orange", "yellow", "green"];
giveMeFour(1,2,3,4); // a1 b2 c3 c4
giveMeFour(colors); // a ["red", "orange", "yellow", "green"] b, undefinded, c undefined, etc.
giveMeFour(...colors); // a"red" b"orange" etc

// Spread in Array Literals
// create a new array using an existing array. Spreads the elements from one array into a new array
const nums1 = [1,2,3];
const nums2 = [4,5,6];

[...nums1, ...nums2];
//[1,2,3,4,5,6]

["a", "b", ...nums2];
//["a", "b", 4, 5, 6]

[...nums1, ...nums2, 7, 8, 9];
//[1, 2, 3, 4, 5, 6, 7, 8, 9]

// common use case of spread is to copy an array

// Spread in Object Literals
// copies properties from one object into another object literal
const feline = {legs: 4, family: "Felidae"};
const canine = {family: "Caninae", furry: true};

const dog = {...canine, isPet: true};
//{family: "Caninae", furry: true, isPet: true}

const lion = {...feline, genus: "Panthera"};
//{legs: 4, family: "Felinae", genus: "Panthera"}

const catDog = {...feline, ...canine};
//{legs: 4, family: Caninae, furry: true} took last item if has same key, order matters


// The Arguments Object and Rest
// Available inside every function
// It's an array-like object, has a length property, does not have array methods like push/pop
// Contains all the arguments passed to the function
// Not available inside of arrow functions

function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
sumAll(8,4,3,2); // 17
sumAll(2,3); // 5

function sum() {
    return arguments.reduce((total, currVal) => {
        return total + currVal;
    })
} // this will throw an error because arguments can not be used with array methods like reduce. 
// we have to change arguments into an array first

function sum() {
    const argsArr = [...arguments];
    return argsArr.reduce((total, currVal) => {
        return total + currVal;
    })
}

//REST
// Collects all remaining arguments into an actual array
function sumAll(...nums) {
    let total = 0;
    for (let n of nums) total += n;
    return total;
}
sumAll(1,2,3,4,5) // 15
sumAll(1,2); // 3

function sum(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

function fullName(first, last, ...titles) {
    console.log("first", first)
    console.log("last", last)
    console.log("titles", titles)
}
fullName("tom", "jones", "III", "Order of the Phoeinix");
// first tom
// last jones
// titles ["III", "Order of the Phoenix"]

// Destructuring 
// A short, clean syntax to "unpack":
    // Values from arrays
    // Properties from objects
// Into distinct variables

// Destructuring Arrays
const raceResults = [
    "Eliud Kipchoge",
    "Feyisa Lelisa",
    "Galen Rupp",
    "Ghirmay Ghebreslassie",
    "Alphonce Simbu",
    "Jared Ward"
];

const gold = raceResults[0]
const silver = raceResults[1]
const bronze = raceResults[2]

const  [gold, silver, bronze] = raceResults;
gold; // "Eliud Kipchoge"
bronze; // "Galen Rupp"
// Order matters

const [first, , , fourth] = raceResults;
first; // "Eliud Kipchoge"
fourth; // "Ghirmay Ghebreslassie"

const [winners, ...others] = raceResults;
winners; // "Eliud Kipchoge"
others; // ["Feyisa Lelisa","Galen Rupp","Ghirmay Ghebreslassie","Alphonce Simbu","Jared Ward"]

// Object Destructuring 
const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}
const {first, last, country} = runner;
first; // "Eliud"
last; // "Kipchoge"
country; // "Kenya"
// variable names must be key names in the object
// you can change what the variable name will be
const {country: nation, title: honorific} = runner;
nation; // "Kenya"
honorific; // "Elder of the Order of the Golden Heart of Kenya"
// can use "Rest"
const {first, last, ...other} = runner;
first; // "Eliud"
last; // "Kipchoge"
other; //{country: "Kenya", title: "Elder of the Order of the Heart of Kenya"}

// Nested Destructuring
const results = [
    {
        first: "Eliud",
        last: "Kipchoge",
        country: "Kenya"
    },
    {
        first: "Feyisa",
        last: "Lelisa",
        country: "Ethopia"
    },
    {
        first: "Galen",
        last: "Rupp",
        country: "United States"
    }
]

const [,{country}] = results;
country; // "Ethopia"

const [{first: goldWinner}, {country}] = results;
goldWinner; // "Eliud"
country; "Ethopia"

// Destructuring Parameters
const fullName = ({first, last}) => {
    return `${first} ${last}`
}
const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
}
fullName(runner); // "Eliud Kipchoge"

function person(person) {
    const {first, last, title} = person;
    console.log(`${first} ${last}, ${title}`)
}

// but an easier way to do the above would look like...
function person({first, last, title}) {
    console.log(`${first} ${last}, ${title}`)
}

const response = [
    "HTTP/1.1",
    "200 OK",
    "application/json"
]

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`)
}
parseResponse(response); // Status: 200 OK
