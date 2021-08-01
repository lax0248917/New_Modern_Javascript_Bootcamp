// Asynchronous Code, Callbacks, & Promises 

// The Call Stack
// The mechanism the JS interperter uses to keep track of its place in a script that calls mulitple functions. 
// The stack = last thing in, first thing out
// How it works - When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
// Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
// When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

//examplpe
const multiply = (x,y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5);
// square(3) + square(4) === square(5)
// so first isRightTriangle relys on square(a) so square(a) is added to the stack, then square(a) relys on the function multiply so multiply is added to the stack. multiply executes and returns 9 and is removed from the stack, then square(a) is 9... then it continues to the next function.

// Call Stack Debugging w/ Dev Tools
// utilizing "Sources" you can create breakpoints and see the call stack
// This will allow you to identify issues with how functions call other functions and makes it easy to debug code

// JS is Single Threaded
// at any given point in time, that single JS thread is running at most one line of JS code.

// How Asynchronous Callbacks Actually Work
// What happens when something takes a long time?
// const newTodo = input.value;
// savToDatabase(newTodo);
// input.value = '';
console.log('I print first!');
setTimeout(() => {
    console.log('I print after 3 seconds')
}, 3000);
console.log('I print second!');
// the trick here is that the browser does the work!
// Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimeout)
// The JS call stack recognizes these web API functions and passes them off to the browser to take care of
// Once the browser finishes those tasks, they return and are pushed onto the stack as a callback