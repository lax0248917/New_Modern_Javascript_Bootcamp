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
} else if (ratings === 2) {
	console.log('MEETS EXPECTATIONS');
} else if (ratings === 1) {
	console.log('NEEDS IMPROVEMENT');
}

//else
// Example 1
let rate = 6;

if (rate === 3) {
	console.log('YOU ARE A SUPERSTAR!');
} else if (rate === 2) {
	console.log('MEETS EXPECTATIONS');
} else if (rate === 1) {
	console.log('NEEDS IMPROVEMENT');
} else {
	console.log('INVALID RATING!');
}

// Example 2

let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
	console.log(`Congrats, you have the new high score of ${userScore}`);
	highscore = userScore;
} else {
	console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}

//Nesting Conditionals
// Example 1
let password = 'Superman';
if (password.length >= 6) {
	if (password.indexOf(' ') !== -1) {
		console.log('Password cannot include spaces');
	} else {
		console.log('Valid password!!');
	}
} else {
	console.log('Password too short!');
}

// Truth and Falsy Values
// All values have an inherent truthy or falsy boolean value
let mystery = 5;

if (mystery) {
	console.log('TRUTHY');
} else {
	console.log('FALSY');
}
// will return TRUTHY

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
let passwords = 'Superman';
if (passwords.length >= 6 && passwords.indexOf(' ') !== -1) {
	console.log('Valid Password');
} else {
	console.log('Invalid Password');
}

//Example 2
let nums = 3;
if (nums >= 1 && nums <= 10) {
	console.log('Number is between 1 and 10');
} else {
	console.log('Please guess a number between 1 and 10');
}

// Or
// ||
// only one needs to be true for the whole thing to be true
true || false; // returns true
1 !== 1 || 10 === 10; // returns true
10 / 2 === 5 || null; // returns true
0 || undefined; // returns false

// Example 1
let age = 10;

if (age < 6 || age >= 65) {
	console.log('YOU GET IN FOR FREE');
} else {
	console.log('YOU MUST PAYYYYY!!');
}

// Example 2
let color = 'purple';
if (color === 'purple' || color === 'Lilac' || color === 'violet') {
	console.log('GREAT CHOICE!');
}

//Not
// !
!null; // true
!(0 === 0); // false
!(3 <= 4); // false

// Example 1
let loggedInUsers;

if (!loggedInUsers) {
	console.log('GET OUT OF HERE!');
}

let flavor = 'watermelon';

if (flavor !== 'grape' && flavor !== 'cherry') {
	console.log('WE DONT HAVE THAT FLAVOR!');
}

//Operator Precedence

//what does this evaluate too?
let x = 7;
x == 7 || (x === 3 && x > 10); //returns true because the AND operator takes precedence. NOT has higher precedence than AND which has higher precedence than OR

// The Switch Statement
let day = 4;

// if (day === 1) {
//   console.log("MONDAY");
// }
// else if (day === 2) {
//   console.log("TUESDAY");
// }
// else if (day === 3) {
//   console.log("WEDNESDAY");
// }
// else if (day === 4) {
//   console.log("THURSSDAY");
// }
// else if (day === 5) {
//   console.log("FRIDAY");
// }
// else if (day === 6) {
//   console.log("SATURDAY");
// }
// else if (day === 7) {
//   console.log("SUNDAY");
// }
// else {
//   console.log('INVALID DAY');
// }

// A better way to do this is to use a switch statement

switch (day) {
	case 1:
		console.log('MONDAY');
		break;
	case 2:
		console.log('TUESDAY');
		break;
	case 3:
		console.log('WEDNESDAY');
		break;
	case 4:
		console.log('THURSDAY');
		break;
	case 5:
		console.log('FRIDAY');
		break;
	case 6:
		console.log('SATURDAY');
		break;
	case 7:
		console.log('SUNDAY');
		break;
	default:
		console.log('INVALID DAY');
}

let emoji = 'sad face';

switch (emoji) {
	case 'sad face':
	case 'happy face':
		console.log('yellow');
		break;
	case 'eggplant':
		console.log('purple');
		break;
	case 'heart':
	case 'lips':
		console.log('red');
		break;
}

//Ternary Operator
// there are three pieces and it allows a more simplistic if or else (yes or no) statement
// Format is condition ? expIfTrue: expIfFalse
let numb = 7;

// if (numb === 7) {
//   console.log('Lucky!');
// }
// else {
//   console.log('BAD!');
// }

// rewrite as:
numb === 7 ? console.log('Lucky!') : console.log('BAD!');

let status = 'offLine';

// let color;
// if (status === 'offline') {
//   colors = 'red';
// }
// else {
//   colors = 'green';
// }

let colors = status === 'offLine' ? 'red' : 'green'; // returns 'red'
