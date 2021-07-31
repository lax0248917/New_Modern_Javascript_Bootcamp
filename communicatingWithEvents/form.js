// Form Events and PreventDefault

const form = document.querySelector('#signup-form')
const creditCard = document.querySelector('#cc');
const termsCheckBox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

// form.addEventListener('submit', function (e) {
//     alert('SUBMITTED THE FORM!');
//     console.log('cc', creditCard.value);
//     console.log('terms', termsCheckBox.checked);
//     console.log('veggieSelect', veggieSelect.value);
//     e.preventDefault(); //prevents behavior of submit of sending data
// });


// Input & Change Events
// gives the ability to stay in sync as user inputs data

// const formData = {};
// creditCard.addEventListener('input', (e) => {
//     console.log('CREDIT CARD CHANGED', e);
//     formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
//     console.log('VEGGIE CHANGED', e);
//     formData['veggie'] = e.target.value;
// })
// termsCheckBox.addEventListener('input', (e) => {
//     console.log('CHECKBOX', e);
//     formData['agreeToTerms'] = e.target.checked;
// })

//Refactor
//input event
// const formData = {};
// for (let input of [creditCard, termsCheckBox, veggieSelect]) {
//     input.addEventListener('input', ({target}) => {
//         const {name, type, value, checked} = target;
//         formData[name] = type === 'checkbox' ? checked : value;
//         console.log (formData);    
//     })
// };

//change event
const formData = {};
for (let input of [creditCard, termsCheckBox, veggieSelect]) {
    input.addEventListener('change', ({target}) => {
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log (formData);    
    })
};