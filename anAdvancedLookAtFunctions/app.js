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
