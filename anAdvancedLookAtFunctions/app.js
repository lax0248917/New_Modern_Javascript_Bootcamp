// An Advanced Look at Functions

// Function Scope
// Scope is like variable visibility: the location where a variable is defined dictats where it may be used.

function helpMe () {
	let msg = "I'm on fire!";
	msg; //I'm on fire!
}
//msg; //NOT DEFINED!
// Msg is only scoped to the function that it resides in.

function lol () {
	let person = 'Tom';
	const age = 45;
	var color = 'teal';
	console.log(age); // 45
}
function changeColor () {
	let color = 'purple';
	const age = 19;
	console.log(age); // 19
}
lol();
changeColor();
//console.log(color); //will return the error that Color is not defined.
// the variables can be named the same since they only reside in the associated scope of their repective functions.
// Can call the function but can not access those variables from outside the function.

// Unless...

let bird = 'mandarin duck';

function birdWatch () {
	let bird = 'golden pheasant';
	console.log(bird);
}
birdWatch(); //golden pheasant
console.log(bird); //mandarin duck
//When a variable is declared outside of a function it is accessible inside the function as well as outside of the function.

// Block Scope
// if (true) {
// 	const animal = 'eel';
// 	console.log(animal); // eel
// }
// console.log(animal); // error

// The above code uses block scope for both const and let variables.
// This is not the case for var. Var does not use block scope

// let animals = [ 'grizzly bear', 'panda bear', 'spectacled bear' ];
// var i = 10;
// for (var i = 0; i < animals.length; i++) {
// 	console.log(i, animals[i]);
// }
// console.log(i); // 3

// The above code shows that i is still accessible from the for loop. If I replace var in the for loop with let, then it will run the loop and then print 10 for i. Using let will block scope the variable to the loop it is used in.

// Write a function that doubles an array
function doubleArr (arr) {
	const result = []; //scoped to the entire function
	for (let num of arr) {
		let double = num * 2; // double is scoped to this block, and not accessbile outside of the block of code
		result.push(double);
	}
	return result; // however result is available
}

// Lexical Scope
// When dealing with nested functions there is a pattern that uses lexical scope to access variables.

function outer () {
	let movie = 'Amadeus';
	function inner () {
		function extraInner () {
			console.log(movie.toUpperCase()); // here the nested function can access the variable decalred in the parent function
		}
	}
	extraInner();
}
// Refers to the fact to functions being scoped to their parent functions. This works in only this direction. Also, a variable declared within a parent function is available to the nested function, but no the other way around. If the variable is defined in the nested function it will use that value first when executing the function.

// Functional Expression - there is anthor syntax we can use to define functions:
const square = function (num) {
	return num * num;
};
square(7); //49
// since functions are technically objects, we can store them in a variable. We can even pass them around as arguments.
function add (x, y) {
	return x + y;
}

const total = function (x, y) {
	return x + y;
};

const product = function multiply (x, y) {
	// can add a function name
	return x * y;
}; // call this using the variable product to call the function

// Higher Order Functions!
function add (x, y) {
	return x + y;
}

const subtract = function (x, y) {
	return x - y;
};

function multiply (x, y) {
	return x * y;
}

const divide = function (x, y) {
	return x / y;
};

const operations = [ add, subtract, multiply, divide ];
// when calling this function I can pass in the index of whichever function I want to be ran. or....

// We can use a for..of loop
for (let func of operations) {
	let result = func(30, 5);
	console.log(result);
}
// this will itrerater over all the functions and return the values based on what what passed into func.

const thing = {
	doSomething : multiply
};
// from here now that we have an object (or value), and a function associated to a key:value pair, we can append the function to the object with () and now we have created a ...... METHOD
thing.doSomething(50, 2); // 100

// Functions as Arguments

//functions that accept other functions as arguments
function callThreeTimes (f) {
	f();
	f();
	f();
}

function cry () {
	console.log("BOO HOO I'M SO SAD");
}

function rage () {
	console.log('I HATE EVERYTHING');
}

function repeatNTimes (action, num) {
	for (let i = 0; i < num; i++) {
		action();
	}
}
repeatNTimes(cry, 10);

function pickOne (f1, f2) {
	let rand = Math.random();
	console.log(rand);
	if (rand < 0.5) {
		f1();
	} else {
		f2();
	}
}

// Functions that can return functions as the return value
function multiplyBy (num) {
	return function (x) {
		return x * num;
	};
}
const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

//another example
// function makeBetweenFunc (x, y) {
// 	return function (num) {
// 		if (num >= x && num <= y) {
// 			return true;
// 		}
// 		return false;
// 	};
// }
// could refactor to this
function makeBetweenFunc (x, y) {
	return function (num) {
		return num >= x && num <= y; //booleen expression so it returns true or false
	};
}
const isChild = makeBetweenFunc(0, 18);
isChild(17); //true

const isInNineties = makeBetweenFunc(1990, 1999);
isInNineties(92); //true

//another example
const isNiceWeather = makeBetweenFunc(60, 79);
isNiceWeather(98); //false

// Callback Functions
// when you pass another function in a function and then call that function its called a callback
function grumpus () {
	alert('GAHHH GO AWAY!!');
}
setTimeout(grumpus, 5000);

setTimeout(function () {
	alert('Welcome');
}, 5000);
// both of the above examples show how to use callbacks
// Below is an example of how to pass in a function into a method
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
	alert('WHY DID YOU CLICK ME?');
});

//Hoisting Functions
//Var
console.log(animal); // if this was the only code it would return not defined but since var is below it, JS will run that part of code first so we get undefined
var animal = 'Tapir'; // here it initializes animal to tapir
console.log(animal); // Tapir

// howl();
// function howl () {
// 	console.log('AWOOOOOOO');
// } // This code will still run

// hoot();
// let hoot = function () {
// 	console.log('HOOO HOOO');
// }; // This code will not

//Let and Const
//let or const declarations will not hoist
