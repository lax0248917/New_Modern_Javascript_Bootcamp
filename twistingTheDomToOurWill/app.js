// Twisting the DOM to OUR Will!

//Working with innerText & textContent

//select h1
const h1Header = document.querySelector('h1');
const text = h1Header.innerText;
console.log(text); // returns "My Webpage"

// innerText will grab all the text in the element even if its nested in other elements
const ulItem = document.querySelector('ul');
const ulText = ulItem.innerText;
console.log(ulText); // "First Thing Second Thing Third Thing"

// Be aware that when you change innerText on an element it will remove anything nested inside

// We also can use textContent
const p = document.querySelector('#main');
console.log(p.innerText); // returns the text with no formatting
//however
console.log(p.textContent); // retuns all the text it can find in the format it is found in. Its not as useful as innerText but is faster

//innerHTML
//retrieves the text and all other tags 
const form = document.querySelector('form');
console.log(form.innerHTML); 
// <input type="text" placeholder="Computer Name">
// <input type="password" placeholder="password">
// <input type="submit"> 

// Can overwrite or change all the content, for example...
// form.innerHTML = '<b>I am a bold tag </b>'
// this will parse the string for tags and it will reflect those changes in the DOM

// can add stuff without overwriting
const h1 = document.querySelector('h1');
h1.innerHTML += ' is cool' // changes the h1 to "My Webpage is cool"
// doing this with innerText will render html tags as they are not parsed as new elements, only shows the literal string

// value, src, href, and more

//value
const inputs = document.querySelectorAll('input');
console.dir(inputs);
console.log(inputs[0].value); // returns a value for computer name
// for a checkbox
console.log(inputs[2].value)// checkbox value is of text "on", but if we..
console.log(inputs[2].checked); // we see a boolean value of true or false
console.log(inputs[1].placeholder); // returns the placeholder text

const a = document.querySelector('a');
console.log(a.href);
a.href = "https://www.google.com"

//can change the src attribute
const img = document.querySelector('img');
console.log(img.src);
//img.src = "new source url" // changes the image source

//Getting and Setting Attributes

//getAttribute
const range = document.querySelector('input[type="range"');
range.getAttribute('max');
range.getAttribute('min');

//setAttribute 
// this will allow you to change the attribute that you specify in the first parameter to what is set in the second parameter
range.setAttribute('min', '-500');
console.log(range.value);

// Finding Parent/Children/Siblings
// Can find associated elements off the main element
// const firstLI = document.querySelector('li');
// console.log(firstLI.parentElement); //returns the parent of the li
// const ul = firstLI.parentElement;
// console.log(ul.children); // returns the lis
// console.log(firstLI.nextElementSibling); //returns the next available li

//Changing Multiple Elements
// const allLis = document.querySelectorAll('li');

// for (let i = 0; i < allLis.length; i++) {
//     allLis[i].innerText = 'WE ARE THE CHAMPIONS!';
// }
// for (let li of allLis) {
//     li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>'
// }

// Altering Styles
h1.style.color; // this is an empty string even thought the h1 color is set to purple. The color would need to be set with styles inline
// you can change the color
p.style.backgroundColor = 'yellow' // must use camelcase

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// allLis.forEach((li, i) => {
//     const color = colors[i];
//     li.style.color = color;
// })
// remember that inline styles are going to win out any class declaration we have. They are very specific

//getComputedStyle
const myLI = document.querySelector('li');
const styles = getComputedStyle(myLI);
console.log(styles);
// returns a massive object containing every style in CSS

//Maniuplating Classes

//how to change multiple styles at one time
const todo = document.querySelector('#todos .todo');

// how we could do it one line at a time
// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

// to do this in one line, setup a class in CSS (I created one called "done") and then use .classList
console.log(todo.classList);
// todo.classList.add('done');
//can toggle this 
todo.classList.toggle('done');

// Creating elements
const newH2 = document.createElement('h2');

newH2.innerText = 'I Like Animals';
newH2.classList.add('special');
console.dir(newH2)

// now we can append it and add it to the DOM
const section = document.querySelector('section');
section.appendChild(newH2);

const newImg = document.createElement('img');
newImg.src = "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
document.body.appendChild(newImg);
newImg.style.width = "300px";

const newATag = document.createElement('a');
newATag.href = "https://www.youtube.com/watch?v=Hz4ihJJAMJ8";
newATag.value = "youtube video";
newATag.innerText = "YouTube Video"
const firstP = document.querySelector('p');
firstP.appendChild(newATag);

// Append, Prepend, & insertBefore

const parentUL = document.querySelector('ul');
const newLI = document.createElement('li');
newLI.innerText = 'I AM A NEW LI';
parentUL.appendChild(newLI);

//cumbersome to use to insert before
// this will make it a child of the ul but insert it before the first li
const firstLI = document.querySelector('li.todo');
parentUL.insertBefore(newLI, firstLI);

const i = document.createElement('i');
i.innerText = "I AM ITALICS";
//append
// const firstP = document.querySelector('p');
firstP.append(i, newLI); // this will add the listed elements to the end of the element selected

//prepend
firstP.prepend(i, newLI); // this will add the listed elements to the beginning of the element selected

// remove and removeChild
const ul = document.querySelector('section ul');
const removeME = ul.querySelector('.special')
ul.removeChild(removeME); //removes peas from DOM

// using remove
const removeH2 = document.querySelector('h2');
removeH2.remove(); // removes the h2 from the DOM

