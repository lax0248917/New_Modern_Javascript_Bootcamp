// Communicating with Events
// basically we are listening for a thing and then run code at that time

//The thing    Event Type    the code to run
// button       click           change the color
// input       hits return       gets search results
// image       mouseover       display the img caption

// 3 basic ways to do this but 2 should not be used
// adding event listeners inline in HTML is not suggested
// <button onclick="alert('YOU CLICKED ME')">Click Me!</button>

// 2nd way
// const btn = document.querySelector('#clicker');

// btn.onclick = function () {
//     console.log('YOU CLICKED ME! GO AWAY!');
// }
// btn.ondblclick = function () {
//     console.log('double click');
// }

//Best way
// addEventListener
// able to have multiple events on one element
// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     alert('HI!!!');
// });

// btn.addEventListener('mouseover', function () {
//     btn.innerText = "STOP TOUCHING ME";
// });

// btn.addEventListener('mouseout', function () {
//     btn.innerText = "Click Me";
// });


// Events on Multiple Elements
// a way to utilize a loop to add events to multiple elements
// const colors = ['red', 'orange','yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];

// const changeColor = function () {
//     const h1 = document.querySelector('h1');
//     h1.style.color = this.style.backgroundColor; // recognize the use if the keyword "this"
// };
// const container = document.querySelector('#boxes')

// for (let color of colors) {
//     const box = document.createElement('div');
//     box.style.backgroundColor = color;
//     box.classList.add('box');
//     container.append(box);
//     box.addEventListener('click', changeColor)
// }

// The Event Object
// 
// const colors = ['red', 'orange','yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];

// const changeColor = function (evt) {
//     console.log(evt);
//     const h1 = document.querySelector('h1');
//     h1.style.color = this.style.backgroundColor; // recognize the use if the keyword "this"
// };
// const container = document.querySelector('#boxes')

// for (let color of colors) {
//     const box = document.createElement('div');
//     box.style.backgroundColor = color;
//     box.classList.add('box');
//     container.append(box);
//     box.addEventListener('click', changeColor)
// }
// // this will give you the event inlcuding the key pressed
// document.body.addEventListener('keypress', function (e) {
//     console.log(e);
// })

// Key Events: keypress, keyup & keydown
// const input = document.querySelector('#username');

// input.addEventListener('keydown', function (e) {
//     console.log("KEY DOWN!")
// })
// input.addEventListener('keyup', function (e) {
//     console.log("KEY up!")
// })
// // this one only works on keys that add characters, and return equals a keypress
// input.addEventListener('keypress', function (e) {
//     console.log("KEY PRESS!")
// })

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // adds check to make sure data is entered when pressing return, if field is empty return early and break out of function
        if (!this.value) {
            return
        }
        // add a new item to list
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.append(newItem);
        // clear field
        this.value = ''
    }
})



