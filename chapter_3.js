// alert(): Shows a message with an OK button.
// prompt(): Shows a message with an input field, allowing the user to enter a value. Returns the input or null if canceled.
// confirm(): Shows a message with an OK and Cancel button. Returns true if OK is clicked.
// alert("Hello, World!");
// prompt("What is your name?", "John");
// confirm("Are you sure?");

// chapter no = 3

// Loops in JS

// Loops are used to execute a piece of code again & again
// There are 3 types of loops in JS
// 1. For Loop
// 2. While Loop
// 3. Do-While Loop

// for loop: Used to execute a block of code repeatedly for a specified number of times.

// Syntax: for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

// print 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log("Maheen Ali");
}

// calculate sum 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(sum);
}

// while loop: Used to execute a block of code repeatedly as long as a specified condition is true


// Syntax: while (condition) {
//     // code to be executed
// }
// print 1 to 10
let i = 1;
while (i <= 10) {
    console.log("Maheen Ali");
    i++;
}


// do-while loop: Used to execute a block of code repeatedly as long as a specified condition
// is true.
// Syntax: do {
//     // code to be executed
// } while (condition);

// print 1 to 10

do {
    console.log("Maheen Ali");
    i++;
} while (i <= 10);



// Infinite Loop : A Loop that never ends


// for-of Loop
// The for-of loop is used to iterate over the elements of an array or a string.
// Syntax: for (variable of iterable) {
//     // code to be executed
// }

// print array elements
let fruits = "apple";
let size = 0;
for (let fruit of fruits) {
    console.log(fruit);
    size++;
}
console.log("size=" + size);


// for-in Loop
// The for-in loop is used to iterate over the properties of an object.
// Syntax: for (variable in object) {
//     // code to be executed
// }

// print object properties
let person = {
    name: "Maheen Ali",
    age: 20,
    city: "Karachi"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// practice questions

// Qs1. Print all even numbers from 0 to 100


for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// Qs2. Print all odd numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Qs3. Print all numbers from 0 to 100 that are divisible by 5

for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}


// Qs3. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let userName=90; 
let gameNumber=prompt("enter the correct number");

while(userName!=gameNumber){
    userName=prompt("enter the correct number");
    }
    
    console.log("Congratulations! You entered the correct number.");



    
