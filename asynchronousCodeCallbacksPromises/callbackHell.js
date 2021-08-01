const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`;
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`;
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     setTimeout(() => {
//         const bodyBoundary = document.body.clientWidth;
//         const elRight = element.getBoundingClientRect().right;
//         const currLeft = element.getBoundingClientRect().left;
//         if (elRight + amount > bodyBoundary) {
//             onFailure();
//         } else {
//             element.style.transform = `translateX(${currLeft + amount}px)`;
//             onSuccess();
//         }
//     }, delay);
// };

// easy to read but can get messy
// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 1000, 1000);
//             })
//         })
//     });
// });

// moveX(btn, 100, 1000, () => {
//     //success
//     moveX(btn, 400, 1000, () => {
//         //success
//         moveX(btn, 700, 1000, () => {
//             //success
//             console.log("REALLY? We still have screen left")
//         }, () => {
//             //fail
//             alert('CANNOT MOVE FURTHER')
//         })
//     }, () => {
//         //fail
//         alert('CANNOT MOVE FURTHER')
//     })
// }, () => {
//     //fail
//     alert('CANNOT MOVE FURTHER')
// })

// the above code is just a mess to read and it over ran by callbacks.
// there is a much simpler way to write this using....PROMISES

//  Introducing Promises
// Promises are a a pattern for writing async code
// A promise is an object representing the eventual completion or failure
// of asynchronous code.

// Refactoring the above the code with Promises

const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if (elRight + amount > bodyBoundary) {
                reject({bodyBoundary, elRight, amount});
            } else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        }, delay);
    })
};

// moveX(btn, 300, 1000)
//     .then(() => {
//         return moveX(btn, 300, 1000);
//     })
//     .then(() => {
//         return moveX(btn, 300, 1000);
//     })
//     .then(() => {
//         return moveX(btn, 300, 1000);
//     })
//     .then(() => {
//         console.log('Done with both!');
//     })
//     .catch(() => {
//         console.log("Out of space!")
//     });

// even more refactoring with implicit return
moveX(btn, 300, 1000)
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .catch(({bodyBoundary, amount, elRight}) => {
        console.log(`Body is ${bodyBoundary}px wide`);
        console.log(`Element is at ${elRight}, ${amount}px is too large!`)
    });