// how to create a new promise
// const willGetYouADog = new Promise((reslove, reject) => {
//     const rand = Math.random();
//     if (rand < 0.5) {
//         reslove();
//     } else {
//         reject();
//     }
// });
// willGetYouADog.then(() => {
//     console.log('YAY WE GOT A DOG!')
// });
// willGetYouADog.catch(() => {
//     console.log(':( NO DOG!')
// });

// sometimes a function will return a promise instead of creating a new promise
const makeDogPromise = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                reslove();
            } else {
                reject();
            }
        }, 5000);
    })
};

// chaining .then and .catch helps to run functions when a promise is resolved or rejected
makeDogPromise()
    .then(() => {
        console.log('YAY WE GOT A DOG!');
    })
    .catch(() => {
        console.log(':( NO DOG!');
    });

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(( )=> {
            const pages = {
                '/users': [
                    {id: 1, username: 'Bilbo'},
                    {id: 2, username: 'Esmerelda'}
                ],
                '/about' : 'This is the about page!'
            };
            const data = pages[url]
            if (data) {
                resolve({status: 200, data});
            } else {
                reject({status: 404})
            };           
        }, 1000)
    })
};

fakeRequest('/users').then((res) => {
    console.log('Status Code', res.status)
    console.log('Data', res.data)
    console.log( "Request Worked");
}).catch((res) => {
    console.log(res.status);
    console.log("Request Failed!")
});

// now we can also chain promises
// see 09_Promise_chaining folder for example
