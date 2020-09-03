// The World of Loops

//Intro to Loops
// For loops, while loops, avoid infinite loops, iterate over arrays and objects.

//Loops: Doing things repeatedly
//Loops allow us to repeat code, print "hello" 10 times, sum all numbers in an array
//There are multiple types, for loop, while loop, for...of loop, for...in loop.

//For Loops
for (let i = 0; i < 10; i++) {
	console.log('HELLO');
}

for (let num = 1; num <= 20; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}

for (let i = 50; i >= 0; i -= 10) {
	console.log(i);
}

for (let i = 200; i >= 0; i -= 25) {
	console.log(i);
}

//Infinite Loops- they are bad!
//for (let i = 20; i > 0; i++) {
// console.log(i);
//}    This will run forever and your computer is not happy about it.

//For Loops + Arrays
const examScores = [ 98, 77, 84, 91, 57, 66 ];
for (let i = 0; i < examScores.length; i++) {
	console.log(examScores[i]);
}

const myStudents = [
	{
		firstname : 'Zeus',
		grade     : 86
	},
	{
		firstname : 'Artemis',
		grade     : 97
	},
	{
		firstname : 'Hera',
		grade     : 72
	},
	{
		firstname : 'Apollo',
		grade     : 90
	}
];

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  console.log(`${student.firstname} scored ${student.grade}`);
}

//Reverse a word
const word = 'stressed';
let reversedWord = '';
for (let i = word.length - 1; i >= 0; i--) {
	reversedWord += word[i];
}
console.log(reversedWord); //returns desserts

//Average of grades
let total = 0;

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	total += student.grade;
}
console.log(total / myStudents.length); // returns 86.25

//Nested For Loops
for (let i = 1; i <= 10; i++) {
	console.log('OUTER LOOP', i);
	for (let j = 10; j >= 0; j -= 2) {
		console.log('  INNER LOOP', j);
	}
}

const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];
let totalScore = 0;

for (let i = 0; i < gameBoard.length; i++) {
	const row = gameBoard[i];
	for (let j = 0; j < row.length; j++) {
		const value = row[j];
		totalScore += value;
		console.log(totalScore);
	}
}

// Intro to While Loops

for (let i = 0; i <= 5; i++) {
	console.log(i);
}

let j = 0;
while (j <= 5) {
	console.log(j);
	j++;
} // returns the same as the above for loop

// Common practice for a while loop, will run till condition is made false.
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congrats you win!!');

// Break Keyword

// this works but is not best practice for a for loop since you set the conditions from the beginning.
for (let i = 0; i < 10; i++) {
	console.log(i);
	if (i === 5) {
		break;
	}
}

// the break keyword, if used in a nested loop, does not stop the outter loops from running.

// More common in while loops
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
while (true) {
	if (target === guess) break;
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congrats you win!!');

// For...Of Loop

// syntax = for (variable of interable) {
	// code to run
// }

let subreddits = [
	'soccer',
	'popheads',
	'cringe',
	'books'
];

for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]);
}

// the same loop as above using for...of loop
for (let elem of subreddits) {
	console.log(elem);
}
for (let char of 'cockadoodledoo') {
	console.log(char.toUpperCase());
}

// Comparing For and For...Of

const magicSquare = [
	[ 2, 7, 6 ],
	[ 9, 5, 1 ],
	[ 4, 3, 8 ]
];

for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let sum = 0;
	for (let j = 0; j < row.length; j++) {
		sum += row[j];
	}
	console.log(`${row} summed to ${sum}`);
}

// Can do the same thing using a For..Of, for loops should be used if you need to access an index
for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`${row} summed to ${sum}`);
}

//Iterating over an object using a for...of loop, just remember that objects are not iterable. You can iterate over an objects keys and/values
const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

// for (const x of movieReviews) {
// 	console.log(x);
// } this does not work

for (let movie of Object.keys(movieReviews)) {
	console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let totals = 0;
for (let r of ratings) {
	totals += r;
}
let avg = totals / ratings.length;
console.log(avg);

// A New Type of Loop to do what we just did above, called For...In

// Syntax = for (variable in object) {
	// code to run or statement
//}

const jeopardyWinnings = {
	regularPay            : 2522700,
	watsonChallenge       : 300000,
	tournamentOfChampions : 500000,
	battleOfTheDecades    : 100000
};

for (let prop in jeopardyWinnings) {
	console.log(prop);
	console.log(jeopardyWinnings[prop]);
}

let totaling = 0;
for (let prop in jeopardyWinnings) {
	totaling += jeopardyWinnings[prop];
}
console.log(`Ken Jennings Total Earings: ${totaling}`);

for (let k in [ 88, 99, 77, 66 ]) {
	console.log(k);
}

// one thing to remember is that forOf and forIn loops, the first will iterate over an array using the values, and the second will iterate over an object using the keys.
