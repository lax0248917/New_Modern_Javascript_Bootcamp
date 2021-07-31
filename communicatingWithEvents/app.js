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
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    alert('HI!!!');
});

btn.addEventListener('mouseover', function () {
    btn.innerText = "STOP TOUCHING ME";
});

btn.addEventListener('mouseout', function () {
    btn.innerText = "Click Me";
});


