// Writing Reusable Code with Functions

// Our First Function!
// What are functions???? They are reusable code that contains a chunk of code that we can run at a later time.

// There is a distinction between methods and functions, but methods are technically functions.

// syntax for function declarations is:
// function funcName(){
//  do something
// }
function grumpus () {
	console.log('ugh...you again...');
	console.log('for the last time...');
	console.log('LEAVE ME ALONE!!!');
}

// for (let i = 0; i < 50; i++) {
// 	grumpus();
// } // will print the above statements 50 times

function rollDie () {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

// function throwDice () {
// 	for (let i = 0; i < 5; i++) {
// 		rollDie();
// 	}
// }

// Passing Arguments into Functions allows us to impact the Output
function greet (nickname) {
	console.log(`Hi, ${nickname}!`);
}

function throwDice (numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDie();
	}
}

//the variable that is entered in the parenthesis when a function is declared is called a parameter. When that function is called, the value entered into that parameter is called an argument.
function square (num) {
	console.log(num * num);
}
square(4);

// define a function with multiple parameters
function sum (x, y) {
	console.log(x + y);
}

// order in how the parameters are defined does matter. They fill from left to right.
function divide (a, b) {
	console.log(a / b);
}

// Return Statement
// This is a way to return the value when a function is executed. Currently we have been using console.log() to do this but nothing is really returned just printed. Return statments are necessary to capture the values.

function add (x, y) {
	return x + y;
} //when ran in the console it will return whatever it evaluates to and then you can assign that value to a variable.

//return statements end the function execution.
function plus (x, y) {
	return x + y;
	console.log('RUN THIS CODE!');
} // the last piece of code is not ran therefore not displayed in the console. This is not the case as long as the function is not true

// function isPurple (color) {
// 	if (color.toLowerCase() === 'purple') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// the above code could be refactored, remove the if-else

// function isPurple (color) {
// 	if (color.toLowerCase() === 'purple') {
// 		return true;
// 	}
// 	return false;
// }

// or in one line
function isPurple (color) {
	return color.toLowerCase() === 'purple';
}

function containsPurple (arr) {
	for (let color of arr) {
		if (color === 'purple' || color === 'magenta') {
			return true;
		}
	}
	return false;
}

//Function Challenge 1 - Password Validator
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//  - be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89FjjInms', 'dogLuvr'); //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false

function isValidPassword (password, username) {
	if (password.length < 8) {
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	if (password.indexOf(username) !== -1) {
		return false;
	}
	return true;
}

// A refactored version for this could be
// function isValidPassword (password, username) {
// 	const tooShort = password.length < 8;
// 	const hasSpace = password.indexOf(' ') !== -1;
// 	const tooSimilar = password.indexOf(username) !== -1;
// 	return !tooshort && !hasSpace && !tooSimilar;
// }

// Function Challenge 2 - Average
// Write a function to find the average value in an array of numbers
// avg([0, 50]) // 25
// avg([75, 76, 80, 95, 100]) // 85.2

function avg (arr) {
	let total = 0; //starting point of total
	for (let num of arr) {
		// iterate the variable num over the arr for values
		total += num; //take total, add the value of num for the length of array
	}
	let res = total / arr.length; // divide total by arrays length, assign var
	return res; // display the result
}

// Function Challenge 3 - Pangram
// A pangram is a sentence that contains every letter of the alphabet, like: "The quick brown fox jumps over the lazy dog"
// Write a function called isPangram which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignore string casing!
// isPangram("The five boxing wizards jump quickly") //true
// isPangram("The five boxing wizards jump quick") //false

function isPangram (str) {
	let newString = str.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (newString.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}

// Function Challenge 4 - Get Playing Card
// Write a getCard() function which returns a random playing card object like:
//  {
//	  value: 'K'
//    suit: 'clubs'
//  }
// pick a radom value from:
//-----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
// pick a random suit from:
//-----clubs, spades, hearts, diamonds
// return both in an object

// My Attempt keeping my notes
// function getCard () {
// 	// define values array
// 	let cardValue = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
// 	// define suit array
// 	let cardSuit = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
// 	// return a random value
// 	let randomValue = cardValue[Math.floor(Math.random() * cardValue.length)];
// 	console.log(randomValue);
// 	// return a random suit
// 	let randomSuit = cardSuit[Math.floor(Math.random() * cardSuit.length)];
// 	console.log(randomSuit);
// 	// return both as an object
// 	let result = {
// 		value : randomValue,
// 		suit  : randomSuit
// 	};
// 	return result;
//}

// My finsihed code
// function getCard () {
// 	const cardValue = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
// 	const cardSuit = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

// 	let randomValue = cardValue[Math.floor(Math.random() * cardValue.length)];
// 	let randomSuit = cardSuit[Math.floor(Math.random() * cardSuit.length)];
// 	let result = {
// 		value : randomValue,
// 		suit  : randomSuit
// 	};
// 	return result;
// }

// Refactor of the above code using a function to remove duplicated operations

function pick (arr) {
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard () {
	const cardValue = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	const cardSuit = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	return { value: pick(cardValue), suit: pick(cardSuit) };
}
