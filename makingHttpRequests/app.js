// Making HTTP Requests

//Intro to AJAX
// Asynchronous Javascript and XML/JSON

//JSON and XML
// XML Example
// name -> Todd
// email -> todd@gmail.com
// age -> 89
// <name>
//     <first>Todd</first>
//     <last>Smith</last>
// </name>
// <email>Todd@gmail.com</email>

// we have a way to parse xml to turn it into useable information in javascript
// A better way is JSON
//JSON - Javascript Object Notation - A format for sending data

// {
//     "name": {
//         "first": "Todd",
//         "last" : "Smith"
//     },
//     "email" : "todd@gmail.com"
// }

// XMLHttpRequests: The Basics
// tHe "Original" way of sending requests via JS
// Does not support promises, so...lots of callbacks!
// wtf is going on with the weird capitalization
// clunky syntax that I find difficult to remember!

// XHR example
// const myReq = new XMLHttpRequest();

// myReq.onload = function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// };
// myReq.onerror = function (err) {
//     console.log("ERROR!", err);
// };
// myReq.open('get', 'https://icanhazdadjoke.com', true);
// myReq.setRequestHeader('Accept', 'application/json');
// myReq.send();

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function () {
//     console.log(" It worked");
//     const data = JSON.parse(this.responseText)
//     for (let planet of data.results) {
//         console.log(planet.name);
//         // for fun, adding the planet names to the webpage
//         const ul = document.querySelector('#planets');
//         const newLi = document.createElement('li');
//         newLi.innerText = `${planet.name}`
//         ul.append(newLi)
//     }
// });
// firstReq.addEventListener('error', () => {
//     console.log("ERROR!!!")
// })
// firstReq.open('GET', 'https://swapi.dev/api/planets/')
// firstReq.send();
// console.log("request sent");

//Chaining XMLHttpRequests
const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function () {
    console.log("First Request worked");
    const data = JSON.parse(this.responseText)
    const filmURL = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', function () {
        console.log("Second request worked")
        const filmData = JSON.parse(this.responseText)
        console.log(filmData);
    })
    filmReq.addEventListener('error', function (e) {
        console.log("Error!", e);
    })
    filmReq.open('GET', filmURL);
    filmReq.send();
    // for (let planet of data.results) {
    //     console.log(planet.name);
    // }
});
firstReq.addEventListener('error', () => {
    console.log("ERROR!!!")
})
firstReq.open('GET', 'https://swapi.dev/api/planets/')
firstReq.send();
console.log("request sent");

// such an easier way with "FETCH!!"