// Section 10: Apply Functions to Collections of Data

// Intro to Array Callback Methods
// There are a lot of available methods that can be used with arrays, however not all of them pass in a callback function.

//forEach
//Accepts a callback function, calls the function once per element in the array
const nums = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
nums.forEach(function (n) {
	console.log(n * n);
});

const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];
numbers.forEach(function (num) {
	console.log(num * 2);
});

function printTriple (n) {
	console.log(n * 3);
}
numbers.forEach(printTriple);

// in the case you wanted to return the index as well you could ..
numbers.forEach(function (num, idx) {
	console.log(idx, num);
});

const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating  : 4.25
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 4.42
	},
	{
		title   : 'American Gods',
		authors : [ 'Neil Gaiman' ],
		rating  : 4.11
	},
	{
		title   : 'A Gentleman in Moscow',
		authors : [ 'Amor Towles' ],
		rating  : 4.36
	}
];
// Three versions of getting the same information
// foreach
books.forEach(function (book) {
	console.log(book.title.toUpperCase());
});

//forOf
for (const book of books) {
	console.log(book.title.toUpperCase());
}

//for loop
for (let i = 0; i < books.length; i++) {
	const book = books[i];
	console.log(book.title.toUpperCase());
}

// Map Method
//creates a new array with the results of calling a callback on every element in the array
const texts = [ 'rofl', 'lol', 'omg', 'ttyl' ];
const caps = texts.map(function (t) {
	return t.toUpperCase();
});
console.log(texts);
console.log(caps);

// const numbers = [20, 21, 22, 23, 24, 25, 25, 27]; all ready declared above
const words = [ 'asap', 'byob', 'rsvp', 'diy' ];
const doubles = numbers.map(function (num) {
	return num * 2; //must return a value
});

const numDetail = numbers.map(function (n) {
	return {
		value  : n,
		isEven : n % 2 === 0
	};
});
console.log(numDetail);

const abbrevs = words.map(function (word) {
	return word.toUpperCase().split('').join('.');
});
console.log(abbrevs);

//using the books array above
const bookTitle = books.map(function (b) {
	return b.title;
});
console.log(bookTitle);

//ARROW FUNCTIONS!
//syntactically compact alternative to a regular function expression
// const square = function (x) {
//   return x * x;
// }
const square = (x) => {
	return x * x;
};

const sum = (x, y) => {
	return x + y;
};

const isEven = (num) => {
	return num % 2 === 0;
};
console.log(isEven(4));

const multiply = (x, y) => {
	return x * y;
};
console.log(multiply(4, 5));

//could remove the () around the parameter if there is only one. but you have to have () if there are no parameters
// const sayHi = name => {
// 	return 'Hello' + ' ' + name;
// };
// console.log(sayHi('Sally'));
