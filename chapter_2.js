// chapter no = 2

//Comments in JS

 //Part of Code which is not executed

//Single-line comment: Use // for one line.

// This is a single-line comment (//)

// Multi-line comment: Use /* */ 

/* 
This is a 
multi-line comment 
*/



// Operators
//Used to perform some operation on data

//1- Arthematic Operators

let a=4;
let b=7;

console.log("a=" , a , "b=", b);
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a%b=", a%b);
console.log("a**b=", a**b);

// Unary Operators (part of assignment operators)

let c=8;
let d=5;

console.log("c=" , c , "d=", d);
c++;
console.log("c=" , c );
d--;
console.log("d=" , d);


// increment/decrement (a++ / a--)
// prefix/postfix increment/decrement (++a / --a)
// Pre (++a): Increments/decrements first, then returns the value.
// Post (a++): Returns the value first, then increments/decrements.

console.log("d++=" , d++); //4
console.log("d=" , d);  //5

console.log("++d=" , ++d); //6
console.log("d=" , d);  //6


console.log("d--=" , d--); //6
console.log("d=" , d);  //5

console.log("--d=" , --d); //4
console.log("d=" , d);  //4


// Assignment Operators

console.log("a=" , a , "b=", b);
console.log("a+=b=", a+=b); //a=a+b
console.log("a-=b=", a-=b); //a=a-b
console.log("a*=b=", a*=b); //a=a*b
console.log("a/=b=", a/=b); //a=a/b
console.log("a%=b=", a%=b); //a=a%b
console.log("a**=b=", a**=b); //a=a**b

// Comparison Operators

console.log("c=" , c , "d=", d);
console.log("c==d", c==d); //false 
console.log("c!=d", c!=d); //true 

// Not equal to & type !==
// Not equal to & type !==
// Equal to ==
// Not equal to !=

console.log("c===d", c===d); //false 
console.log("c!==d", c!==d); //true 

console.log("c>d", c>d); //true
console.log("c<d", c<d); //false
console.log("c>=d", c>=d); //true
console.log("c<=d", c<=d); //false


// Logical Operators

console.log("c==d && c!=d =",c==d && c!=d ) ; //false 
console.log("c==d || c!=d =",c==d || c!=d ) ; //true 
console.log("!(c>d)", !(c>d)); //false


// Conditional Statements
// To implement some condition in the code

// if Statement

let age=15; // Depends on input

if(age<18){
    console.log("You are not an adult");
}

if(age>18){
    console.log("You are an adult");
}


// One More Example 

let mode="black";  // Depends on input
let color;

if(mode=="black"){
    color="black";
}
 
if(mode=="white"){
    color="white"; 
}
 
console.log(color);


// if-else Statement


if(mode=="black"){
    color="black";
}
 
else{
    color="white";
}
console.log(color);


//Write a JavaScript program to check if a given number is even or odd.

let num=25;

if(num%2==0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}

// else-if Statement

let x=10;
let y;
 if(x=10){
    y="Ten";
 }
 else if(x>10){
    y="Greater than 10";
 }
 else{
    y="Less than 10";
 }
console.log(y);

// Ternary Operators
// its a special operators
// condition ? true output : false output  // a?b:c

let checkTernary = age>18 ? "adult" : "not adult" ;
console.log(checkTernary);

// switch statements

// Program to check the day of the week using a switch statement

let day = 4;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// comparison between if/else and switch statements
// if/else
// Checks multiple conditions (range, complex logic) 
// switch
// Checks one variable against multiple fixed values.



// Practice Questions

//Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.

let number = prompt("Enter a number:");

if (number % 5 == 0) {
    console.log("The number is a multiple of 5");
}
else {
    console.log("The number is not a multiple of 5");
}

// Qs2. Write a code which can give grades to students according to their scores:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0-59: F

let score = prompt("Enter your score:");

if (score >= 90 && score <= 100) {
    console.log("Grade: A");
}
else if (score >= 80 && score < 90) {
    console.log("Grade: B");
}
else if (score >= 70 && score < 80) {
    console.log("Grade: C");
}
else if (score >= 60 && score < 70) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}
