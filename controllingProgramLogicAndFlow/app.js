//Controlling Program Logic and Flow

//Making Decisions in JS

// Comparisions
// > // greater than
// < // less than
// >= //greater than or equal to
// <= // less than or equal to
// == //equality
// != // not equal
// === // strict equality 
// !== // strict non-equality

//Double Equals (==)
// compares values but does not care about type. the number 99 and the string "99" are returned true

// 4 == 4 // returns true
// 4 == "4" // returns true
// 0 == 's' // returns false
// 0 == '' // returns true
// 0 == false // returns true
// null == undefined // returns true
// true == false // returns false

// //Triple Equals (===)
// // cares about value and type. Is more specific. Use it! 
// 9 === 9 // returns true
// 9 === "9" // returns false
// 0 === false // returns false
// undefined === null // returns false


//Conditional Statements
// if , else if, else

//if
// Example 1
if (1 === 1) {
  console.log("It's True!");
}

// Example 2
let rating = 3;

if (rating === 3) {
  console.log('YOU ARE A SUPERSTAR!');
}

// Example 3
let num = 37; 

if (num % 2 !== 0) {
  console.log('ODD NUMBER');
}

//else if
// Example 1
let ratings = 1;

if (ratings === 3) {
  console.log('YOU ARE A SUPERSTAR!');
}
else if (ratings === 2) {
  console.log("MEETS EXPECTATIONS");
}
else if (ratings === 1) {
  console.log("NEEDS IMPROVEMENT");
}

//else
// Example 1
let rate = 6;

if (rate === 3) {
  console.log('YOU ARE A SUPERSTAR!');
}
else if (rate === 2) {
  console.log("MEETS EXPECTATIONS");
}
else if (rate === 1) {
  console.log("NEEDS IMPROVEMENT");
}
else {
  console.log("INVALID RATING!");
}

// Example 2

let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highscore = userScore;
}
else {
  console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}

//Nesting Conditionals
// Example 1
let password = "Superman";
if (password.length >= 6) {
  if (password.indexOf(' ') !== -1) {
    console.log("Password cannot include spaces");
  }
  else {
    console.log("Valid password!!")
  }
}
else {
  console.log("Password too short!");
}


// Truth and Falsy Values
// All values have an inherent truthy or falsy boolean value
let mystery = 5;

if (mystery) {
  console.log('TRUTHY');
}
else {
  console.log('FALSY');
}

//Falsy Values:
//false, 0, ""(empty string), null, undefined, NaN
// Everything else is truthy!

//Logical Operators
// and (&&) or (||) not (!)

//And 
true && true; // returns true
true && false; //returns false
1 <= 4 && 'a' === 'a'; //returns true

// Example 1
let passwords = "Superman";
if (passwords.length >= 6 && passwords.indexOf(' ') !== -1 ) {
  console.log('Valid Password');
}
else {
  console.log("Invalid Password");
}

//Example 2
let nums = 3;
if (nums >= 1 && nums <= 10) {
  console.log("Number is between 1 and 10");
}
else {
  console.log("Please guess a number between 1 and 10");
}






