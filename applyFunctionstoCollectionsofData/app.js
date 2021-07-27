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
const doubles = numbers.map(function (num) {
	return num * 2; //must return a value
});

// doubles; // [40, 42, 44, 46, 48, 50, 52, 54]

const numDetail = numbers.map(function (n) {
	return {
		value  : n,
		isEven : n % 2 === 0 // returns a boolean value
	};
});
console.log(numDetail);

const words = [ 'asap', 'byob', 'rsvp', 'diy' ];
const abbrevs = words.map(function (word) {
	return word.toUpperCase().split('').join('.'); //.split('') will separate each letter and create an array ex. ["a", "s", "a", "p"] 
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

//could remove the () around the parameter if there is only one. but you have to have () if there are no parameters or more than one.
// const sayHi = name => {
// 	return 'Hello' + ' ' + name;
// };
// console.log(sayHi('Sally'));

// Arrow Functions: Implicit Returns
const square = n => {
	return n * n;
}

const square = n => (
	n * n 
)

const square = n => n * n;
// All of the above is valid and the same

const nums = [1,2,3,4,5,6,7,8];

const doubles1 = nums.map(function (n) {
	return n * 2;
})

const doubles2 = nums.map(n => {
	return n * 2;
})

const doubles3 = nums.map(n => n * 2);
// 3 variations to the same result

const parityList = nums.map(function (n) {
	if (n % 2 === 0) return 'even';
	return "odd";
})

const parityList = nums.map((n) => {
	if (n % 2 === 0) return 'even';
	return 'odd';
})

const parityList = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');
// 3 variations to the same result

// Array.find
// returns the value of the first element in the array that satisfies the provided testing function
let movies = [
	"The Fantastic Mr. Fox",
	"Mr. and Mrs. Smith",
	"Mrs. Doubtfire",
	"Mr. Deeds"
]
let movie = movies.find(movie => {
	return movie.includes("Mrs. ")
}) // "Mr. and Mrs. Smith"

let movie2 = movies.find(m => m.indexOf("Mrs") === 0); // "Mrs. Doubtfire"

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

const goodBook = books.find((b) => b.rating >= 4.3)
goodBook(); // {title: "Bone: The Complete Editionm", authors: Array(1), rating: 4.42}

const neilBook = books.find((b) => {
	return b.authors.includes("Neil Gaiman");
})

// Could also write the above as an implicit return 
const neilBook = b => b.authors.includes("Neil Gaiman");

neilBook(); // {title: "Good Omens", author: Array(1), rating: 4.25}
// array.find() will only return the first match

// Filter
//Creates a new array with all elements that pass the test implemented by the provided function.
const nums = [9,8,7,6,5,4,3,2,1];
const odds = nums.filter((n) => {
	return n % 2 === 1; // our callback returns true or false
	// if it returns true, n is added to the filtered array
})// [9,7,5,3,1]

const smallNums = nums.filter((n) => n < 5); // [4,3,2,1]
const bigNums = nums.filter(n => n > 5); // [9,8,7,6]

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

const goodBooks = books.filter((b) => {
	return b.rating > 4.3;
})
// will return a list of objects with a rating greater than 4.3
// Lets say that the above array of objects had a genre property and we wanted to get the books that include fantasy

const fantasyBooks = books.filter(function (book) {
	book.genres.includes("fantasy");
})
// this would return every object in the array that had fantasy as a value for genre.
// Here is a way to mimic a search
const query = "";
const results = books.filter(book => {
	const title = book.title.toLowerCase();
	return title.includes(query.toLowerCase()); 
})

// Some and Every
// Every: tests whether all elements in the array pass the provided function. It returns a boolean value.
const words = ["dog", "dig", "log", "bag", "wag"];
words.every((word) => {
	return word.length === 3;
}) // true

words.every((word) => word[0] === "d"); // false

words.every((w) => {
	let lastLetter = w[w.length - 1];
	return lastLetter === 'g'
}) // true

// Some: Similiar to Every, but returns true if ANY of the array elements pass the test function
const words = ["dog", "jello", "log", "cupcake", "bag", "wag"];

//Are any of the words longer than 4 characters
words.some((word) => {
	return word.length > 4;
}) //true

// Do any of the words start with "Z"?
words.some((word) => {
	word[0] === "Z";
}) // false

// Do any of the words contain "cake"?
words.some((word) => {
	word.includes("cake");
}) // true

// Revisiting Sort
// arr.sort(compareFunc(a,b))
// if compareFunc(a,b) returns less than 0 - sort a before b
// if compareFunc(a,b) returns 0 - leave a and b unchanged with respect to each other
// if compareFunc(a,b) returns greater than 0 - sort b before a
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
const ascSort = prices.sort((a, b) => {
	a - b;
}) // [12, 35.99, 99.99, 400.5, 3000, 9500]

const descSort = prices.sort((a, b) => {
	b - a;
}) // [9500, 3000, 400.5, 99.99, 35.99, 12]
// *** Remember that Sort is an array method that mutates the original array *** you can use .slice()
// slice() with nothing passed in will copy the array. 

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

books.sort((a, b) => {
	a.rating - b.rating;
}) // will change this array so that lowest rating is listed first in the books object

// Reduce - built in array method that Executes a reducer function on each element of the array, resulting in a single value
[3,5,7,9,11].reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}); // 35

const nums = [3,4,5,6,7];
nums.reduce((total, currentVal) => {
	return total * currentVal;
}) // 2520 

// Reduce Pt. 2
// Finding Max Val
let grades = [89,96,58,77,62,93,81,99,73];
const topScore = grades.reduce((max, currVal) => {
	if (currVal > max) return currVal;
	return max;
})
topScore; // 99

// A shorter option w/ Math.max & implicit return
const topScore = grades.reduce((max, currVal) => (
	Math.max(max, currVal)
))

// Third part to reduce - Initial Value
[4,5,6,7,8].reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}); // returns: 30

[4,5,6,7,8].reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 100); //Returns: 130

//Even More Reduce!
// Tallying
const votes = ["y","y","n","y","n","y","n","y","n","n","n","y","y"];

const results = votes.reduce((tally, vote) => {
	if(tally[vote]) {
		tally[val]++;
	}else {
		tally[val] = 1;
	}
	return tally;
}, {});
results; // {y:7, n:6}

const results = votes.reduce((tally, vote ) => {
	tally[vote] = (tally[vote] || 0) + 1;
	return tally;
}, {}); //INITIAL VALUE: {}
results; // {y: 7, n: 6}

// Another reduce example
const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating  : 2.25
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 3.42
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

// Want an object that contains arrays of books based on rating
const groupedByRating = books.reduce((groupedBooks, book) => {
	const key = Math.floor(book.rating);
	if(!groupedBooks[key]) {
		groupedBooks[key] = [];
	}
	groupedBooks[key].push(book);
	return groupedBooks;
}, {}) 