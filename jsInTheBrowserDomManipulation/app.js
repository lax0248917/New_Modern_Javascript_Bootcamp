// JS In the Browser - DOM Manipulation

// Introduction to the DOM
// The DOM adds the ability to interact with static webpages through javascript. Forms and such can be created using HTML and CSS but adding javascript makes those forms interactive.

// IMPOORTANT NOTE: HTML & CSS
// Need a basic understanding of HTML and CSS 
// https://www.youtube.com/playlist?list=PLblA84xge2_y8F1K0wzPia9V_ULVcfg4k

// Taste of the DOM
// The DOM is a Javascript representation of a webpage
// It's your JS "Window" into the contents of a webpage
// It's just a bunch of objects that you can interact with via JS
// HTML & CSS go in and JS Objects come out
// You can play with this in the console of the browser to see the objects and manipulate the DOM for testing

// Another Fun DOM Example
// We can try out new things by creating a code snippet in the chrome console. This can found under sources > snippets

// The Document Object
// Most important part is the "Document"
// contains representations of all the content on a page, plus tons of useful methods and properties.

//It is the entry point into all the objects on a webpage

//getElementByID
//"Selecting"
// often include selecting and then manipulating

let image = document.getElementById('computer-photo');
console.dir(image);
// will return img as an object with all its properties (like src, id, etc)
// the instance where there is no element with that id it will return "null"

//getElementsByTagName
let elementList = document.getElementsByTagName('input');
console.dir(elementList);
// returns a HTMLCollection of all the elements of that tag name as a list
// HTMLCollection is an array like object that is not an array
const inputs = document.getElementsByTagName('input');
console.log(inputs[0]); // this will select the input at that index in the list. So there are some array like qualities on the HTMLColleciton

//Can interate over it
for(let input of inputs) {
    console.log(input); // logs each input
}

// this is a way to iterate over the collection and get the values of those elements
for(let input of inputs) {
    console.log(input.value);
}

// getElementsByClassName
// returns all the elements in an HTMLCollection that have the associated class name
let classes = document.getElementsByClassName('special');
console.dir(classes);

// to be able to identify a specific element with that class name we can drill down to it
// for example the class special is on an li under a ul
const ul = document.getElementsByTagName('ul')[0];
let specialLI = ul.getElementsByClassName('special');
console.log(specialLI);

//querySelector and querySelectorAll
// the boss hog of all selectors, just pass in a CSS style selector
let header = document.querySelector('h1');
console.log(header);
// just remember that it will return the first one it finds

// we can identify which one we want if there are mutliples of the same element
let mainParagraph = document.querySelector('#main');
console.log(mainParagraph);

// can use an id as well and isolate a single element like so
let liOfSpecial = document.querySelector('li.special');
console.log(liOfSpecial);

// another example
let vegetableSelection = document.querySelector('section ul li.special');
console.log(vegetableSelection);

//using attribute syntax
let attribute = document.querySelector('input[type=password]');
console.log(attribute);

//Then we can use querySelectionAll to bring back a collection
let newElementList = document.querySelectorAll('input');
console.log(newElementList);
// this returns a NodeList (similar to HTMLCollection). It also is array like
let specials = document.querySelectorAll('.special');
console.log(specials[0]);
console.log(specials.length);


