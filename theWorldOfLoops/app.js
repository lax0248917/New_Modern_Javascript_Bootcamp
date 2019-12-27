// The World of Loops

//Intro to Loops
// For loops, while loops, avoid infinite loops, iterate over arrays and objects.

//Loops: Doing things repeatedly
//Loops allow us to repeat code, print "hello" 10 times, sum all numbers in an array
//There are multiple types, for loop, while loop, for...of loop, for...in loop.

//For Loops
for (let i = 0; i < 10; i++) {
  console.log('HELLO');
}

for (let num = 1; num <= 20; num++) {
  console.log(`${num}x${num} = ${num * num}`);
}

for (let i = 50; i >= 0; i -= 10) {
  console.log(i);
}

for (let i = 200; i >= 0; i -= 25) {
  console.log(i);
}

//Infinite Loops- they are bad! 
//for (let i = 20; i > 0; i++) {
// console.log(i); 
//}    This will run forever and your computer is not happy about it.

//For Loops + Arrays
const examScores = [98, 77, 84, 91, 57, 66];
for (let i = 0; i < examScores.length; i++) {
  console.log(examScores[i]);
}

const myStudents = [
  {
    firstname: 'Zeus',
    grade: 86
  },
  {
    firstname: 'Artemis',
    grade: 97
  },
  {
    firstname: 'Hera',
    grade: 72
  },
  {
    firstname: 'Apollo',
    grade: 90
  }
];
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   console.log(`${student.firstname} scored ${student.grade}`);
// }

//Reverse a word
const word = 'stressed';
let reversedWord = ''
for (let i = word.length -1; i >= 0; i--) {
  reversedWord += (word[i]);
}
console.log(reversedWord); //returns desserts

//Average of grades
let total = 0;

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade;
}
console.log(total / myStudents.length); // returns 86.25


//Nested For Loops
for (let i = 1; i <= 10; i ++) {
  console.log('OUTER LOOP', i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log('  INNER LOOP', j);
  }
}



