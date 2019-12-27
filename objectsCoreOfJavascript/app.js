// Objects - The Core of Javascript

//Intro to Objects

//Objects are collections of properties
//Properties are a Key-Value pair
//Rather than accessing data using an index, we use custom keys

// Creating Object Literals
const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13'
};

//how to access the information, use the dot method
console.log(fitBitData.totalMiles); //returns 211.7
console.log(fitBitData.avgCalorieBurn); // returns 5755

//All keys are converted to strings, except symbols.

//Commas are necessary to seperate properties, not necessary for singular properties.

//Accessing Object Properties
const numbers = {
  100: 'one hundred',
  16: 'sixteen',
};
// console.log(numbers.100); //this will not work 'unexpected number'
console.log(numbers[100])

//invalid identifiers can be passed into a variable to access data

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
};

console.log(palette.red); //returns #eb4d4b
console.log(palette['blue']); //returns #30336b
let color = 'yellow';
console.log(palette[color]); //returns #f9ca24
// if you try to access something that is not in the object you get undefined
// can pass in expressions
console.log(palette["bl" + "ue"]); //returns #30336b


// Updating and Adding Properties
const userReviews = {};

userReviews['queenBee49'] = 4.0;

userReviews.mrSmith78 = 3.5;

console.log(userReviews); //{queenBee49: 4, mrSmith78: 3.5}

userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;
console.log(userReviews); //{queenBee49: 6, mrSmith78: 4.5}

// Nested Arrays & Objects
const student = {
  firstName: 'David',
  lastName: 'Jones',
  strengths: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88
  }
};
console.log(student); // returns 
// firstName: "David"
// lastName: "Jones"
// strengths: (2) ["Music", "Art"]
// exams: {midterm: 92, final: 88}

const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(avg); //returns 90

console.log(student.strengths[1]); //returns 'Art'

// Example of an array nested with objects
const shoppingCart = [
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2
  }
];

const game = {
  player1: {
    username: 'Zach',
    playingAs: 'X'
  },
  player2: {
    username: 'Jake',
    playingAs: 'O'
  },
  board: [['X', null, 'O'],
          ['O', 'X', null],
          ['O', null, 'X']]
};


// Objects and Reference Types
// the data that is entered for an object is stored in memory with a reference number in the same manner as arrays. Many people use const when assgining variable names to objects.

// Array/Object Equality 
let nums = [1, 2, 3];
let mystery = [1, 2, 3];
console.log(nums === mystery); // returns false
console.log(nums == mystery); // returns false
// what happens is that the address that the nums array is stored is different than the reference address for the mystery array, so therefore they do not equal eachother. 
// to be able to compare arrays or objects, they need to be related.
let moreNums = nums;
console.log(nums === moreNums); // true
console.log(nums == moreNums); // true




