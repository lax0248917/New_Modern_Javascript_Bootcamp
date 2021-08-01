// Lets learn Fetch!

// FETCH API 
// the newer way of making requests via JS
// supports promises
// not supported in interent explorer

// fetch example
fetch('https://icanhazdadjoke.com/', {
    headers : { Accept : 'application/json'}
})
    .then((res) => {
        if (res.status !== 200) {
            console.log('Problem!', res.status);
            return;
        }
        res.json().then((data) => {
            console.log(data);
        })
    })
    .catch( function (err) {
        console.log('Fetch Error', err);
    });

// Refactor of XHR
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

fetch('https://swapi.dev/api/planets/')
.then((response) => {
    if (!response.ok) 
        throw new Error(`Status Code Error: ${response.status}`);

    return response.json()
})
.then((data) => {
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
})
.then((response) => {
    if (!response.ok) 
        throw new Error(`Status Code Error: ${response.status}`);

    return response.json()
})
.then((data) => {
    console.log(data.title);
})
.catch((err) => {
    console.log("Something went wrong with fetch!")
    console.log(err);
})

// this is significantly better than XHR, but still difficult with dealing with status codes.
// one more solution that is even better and that is Axios...but before that, lets refactor the fetch code
// to see how we can make it better

const checkStatusAndParse = (response) => {
    if (!response.ok) 
        throw new Error(`Status Code Error: ${response.status}`);

    return response.json()
};

const printPlanets = (data) => {
    console.log('Loaded 10 more planets...');
    for (const planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next)
};

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return fetch(url);
}
fetchNextPlanets()
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextPlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.catch((err) => {
    console.log("Something went wrong with fetch!")
    console.log(err);
});