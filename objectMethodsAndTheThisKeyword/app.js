// Object Methods and the 'This' Keyword

// Shorthand Object Properties
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const max = Math.max(...reviews);
const min = Math.min(...reviews);
const sum = reviews.reduce((sum, r) => sum + r);
const avg = sum / reviews.length;

// new way
const stats = {min, max, sum, avg}
stats; // {min: 2.8, max: 5, sum: 26.74, avg: 3.82}

// Computed Properties
// We can use a variable as a key name in an object literal property
const user = "Jools";
const userRoles = {
    [user]: "Admin"
}
userRoles; // {Jools: "Admin"}

// Old way
const role = "host";
const person = "Jools Holland";
const role2 = "Director";
const person2 = "James Cameron"
// originally if we run...
const team = {
    role: person
};
// we get {role: "Jools Holland"} person is evaluated but role is simply converted to a string and never computed
// to return the value for role we would need to...
const team = {};
team[role] = person;
// {host: "Jools Holland"}
// But now we can do it this way...

const team = {
    [role]: person,
    [role2]: person2,
    [1 + 6 + 9]: "sixteen" // can even evaluate expressions. They are turned into strings like all keys.
}
// {16: "sixteen", host: "Jools Holland", Director: "James Cameron"}

function addProp(obj, k, v) {
    const copy = {...obj};
    copy[k] = v;
    return copy;
}
const res = addProp(team, "happy", ":)")
res; // {16: "sixteen", host: "Jools Holland", Director: "James Cameron", happy: ":)"}
// rewrite as..
const addProp = (obj,k,v) => {
    return {
        ...obj,
        [k]: v
    }
}
const res = addProp(team, "happy", ":)")
res; // {16: "sixteen", host: "Jools Holland", Director: "James Cameron", happy: ":)"}

// Adding Methods to Objects
// we can add functions as properties on objects. We call them methods!

//we do this to group functions together
const math = {
    multiply : function (x, y) {
        return x * y;
    },
    divide : function (x, y) {
        return x / y;
    },
    square : function (x) {
        return x * x;
    }
};
// Now that I have declared the object and its associated functions I can use them as methods
math.divide(16, 4) // 4
math.multiply(2, 3) // 6

// New Method Syntax
// WE do this so often that there's a new shorthand way of adding methods
const math = {
    blah: "Hi!",
    add(x, y) {
        return x + y;
    },
    multiply(x, y) {
        return x * y;    }
}
math.add(50, 60) // 110

// Into to Keyword THIS!!!
// THIS: the keyword 'this' can be a major point of confusion and misery and hardship and general suffering
// in the life of a new JS developer
function sayHi() {
    console.log( "HI")
    console.log(this);
}
sayHi() // HI 
        // Window {parent: Window, postMessage: etc} //Global scope. When we create a function by itself we are adding it to
        // the global scope or the "Window". If we looked at the window object we would see sayHi added as a function.
        // at least in the browser, in node there is a different global object.

// One thing to be mindful of about the window. When we use var to declare a variable it adds it to the window or global scope.
// that does not happen with let and const
var color = "teal";
color; // teal
// or
window.color; // teal

let num = 400;
num; //400
window.num // undefined

const greet = function() {
    console.log(this);
}
greet(); //Window {parent: Window, postMessage: etc}

// Using THIS in Methods
const person = {
    first: "Cherilyn",
    last: "Sarkisian",
    nickName: "Cher",
    fullName() {
        console.log(this);
    }
}
person.fullName() // {first: "Cherilyn", last: "Sarkisian", nickName: "Cher", fullName() {console.log(this);}}
                  // the value of "This" references something different here. It references the object
const person = {
    first: "Cherilyn",
    last: "Sarkisian",
    nickName: "Cher",
    fullName() {
        // return `${this.first} ${this.last} AKA ${this.nickName}`;
        // Could use destructuring here instead
        const {
            first,
            last,
            nickName
        } = this;
        return `${first} ${last} AKA ${nickName}`;
    },
    printBio() {
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`)
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says HAHAHAHAHA`)
    }
}
// so now I can access properties in the object as follows
person.fullName(); // Cherilyn Sarkisian AKA Cher
person.printBio(); // Cherilyn Sarkisian AKA Cher is a person!

// THIS: Invocation Context
// The value of 'this' depends on the invocation contect of the function it is used in

const printBio = person.printBio();
printBio() // error: this.fullName is not a function
// We are getting this error because in this instance "this" refers to the global scope where it there is no function
// A way to think about what the keyword 'this' is referencing is to look to the left of the method. This will reference that variable
person.printBio() // here we are invoking the method on an object. so This references the object not the window. Its all about how the
// function is called.

// when we write an arrow function the keyword "this" is never changed
person.laugh() //Window {parent: Window, postMessage: etc}
               // undefined says HAHAHAHAHA
// 'this' is not changed and set to the global scope. One reason why we don't use arrow functions to declare methods.

// Annoyomatic Demo
const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    pickPhrase() {
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length)
        return phrases[idx]
    },
    start() {
        // setInterval(function () {
        //     console.log(this.pickPhrase())  //this is not going to work because now 'this' does not reference the object but the global scope
        // }, 3000);
        this.timerId = setInterval(() => { // adding an id allows us to access the function in setInterval
            console.log(this.pickPhrase())
        }, 3000) // this will work as it is an arrow function and arrow functions do not alter what "this" references.
    },
    stop() {
        clearInterval(this.timerId);
        console.log("PHEW THANK HEAVENS THAT IS OVER!")
    }
}
annoyer.start(); // will return a random phrase every 3 seconds
annoyer.stop(); // will stop the code from running

// Putting It All Together: Deck of Cards in new file

