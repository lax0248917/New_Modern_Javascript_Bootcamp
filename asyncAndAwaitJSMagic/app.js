// Async & Await: JS Magic
// function getData() {
//     const data = axios.get('https://swapi.dev/api/planets/').then((data) => {
//         console.log(data);
//     })
//     console.log(data);
// }

// A better way to right functions that will run syncronously, as in the way that they are written

// the Async keyword
// Async functions always return a promise
// If the function returns a value, the promise will be resolved with that value
// If the function throws an exeception, the promise will be rejected

// async function hello() {
//     return 'Hey guy!';
// }
// hello()
// // Promise {<resolved>: "Hey guy!"}
// async function uhOh() {
//     throw new Error('oh no!');
// }
// uhOh();
// // Promise {<rejected: Error: oh no!}

// async function greet() {
//     return 'HELLO!!!';
// }
// greet().then((val) => {
//     console.log("PROMISE RESOLVED WITH: ", val)
// })

// // async function add (x, y) {
// //     return x + y
// // }

// // What happens if the promise is not resolved?
// async function add (x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw 'X and Y must be numbers!';
//     }
//     return x + y
// }

// add('e', 'r')
//     .then((val) => {
//         console.log("PROMISE RESOLVED WITH: ", val);
//     })
//     .catch((err) => {
//         console.log("PROMISE REJECTED WITH:", err);
//     });

// Async keyword allows us to handle code that returns a promise allowing for .then and .catch

// The Await Keyword
// We can only use the await keyword inside of functions declared with async
// await will pause the execution of the function, waiting for a promise to be resolved

// function getPlanets() {
//     return axios.get('https://swapi.dev/api/planets')
// }

// getPlanets().then((res) => {
//     console.log(res.data);
// })

// async function getPlanets() {
//     const res = await axios.get('https://swapi.dev/api/planets'); // adding await here allows the promise to resolve before the next line of code is ran. Otherwise it would fail as there is no data yet for the console to log
//     console.log(res.data);
// }
// getPlanets();

//Error handling in Async functions
// async function getPlanets() {
//     try {
//         const res = await axios.get('https://swapi.dev/api/plandfdfets');
//         console.log(res.data);
//     } catch (e) {
//         console.log("IN CATCH", e)
//     }   
// }
// getPlanets();

// Multiple Awaits
// using some old code
// const moveX = (element, amount, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const bodyBoundary = document.body.clientWidth;
//             const elRight = element.getBoundingClientRect().right;
//             const currLeft = element.getBoundingClientRect().left;
//             if (elRight + amount > bodyBoundary) {
//                 reject({bodyBoundary, elRight, amount});
//             } else {
//                 element.style.transform = `translateX(${currLeft + amount}px)`;
//                 resolve();
//             }
//         }, delay);
//     })
// };

// const btn = document.querySelector('button');
// moveX(btn, 300, 1000)
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .then(() => moveX(btn, 300, 1000))
//     .catch(({bodyBoundary, amount, elRight}) => {
//         console.log(`Body is ${bodyBoundary}px wide`);
//         console.log(`Element is at ${elRight}, ${amount}px is too large!`)
//     });

//refactor with async
// async function animateRight(el, amt) {
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
// }
// animateRight(btn, 100).catch((err) => {
//     console.log("All Done");
//     animateRight(btn, -100);
// })

// Parallel vs. Sequential Requests

//sequential, but since these requests don't depend on one another we could write this in parallel
// async function get3Pokemon() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }
// get3Pokemon();

// // Parallel (is faster)
// async function get3Pokemon() {
//     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1'); // these will show undefined as poke1 is now a promise not a value as it is above, so we change the variable name
//     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     // since we don't need to wait for the first one before getting the second one, all we need to do is await the response to resolve all three then log them
//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom3;
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }
// get3Pokemon();

// Refactor with Promise.all
async function get3Pokemon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    
    const results = await Promise.all([prom1, prom2, prom3]) // Promise.all accepts an array where we can put the resolved promises
    printPokemon(results);
}

function printPokemon(results) {
    for (let pokemon of results) {
        console.log(pokemon.data.name)
    }
}
get3Pokemon();