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


