// chapter no = 4 
// strings in JS
// 1. string is a collection of characters
// 2. string is a sequence of characters
// 3. string is a collection of characters that can be of any length and can be empty


 

let string = "MaheenAli";
let string2 = 'AsifAli';

console.log(string,string2 );

// in-built properties
//String Length
console.log(string.length , string2.length); 

// String Indices
console.log(string[0], string[1], string[2]); 

//Template Literals in JS
//A way to have embedded expressions in strings
// `this is a template literal`

let specialType = `this is a template literal`;
console.log(specialType);
console.log(typeof specialType);


let obj={
    item : "pen",
    price : 50 ,
}

console.log("The cost price" , obj.item , "is" , obj.price , "rupees" );
console.log(`The cost price ${obj.item } is ${obj.price } rupees`);


//String Interpolation
//To create strings by doing substitution of placeholders
//Example: "Hello, my name is ${name} and I am ${age} years old
let name = "John";
let agee = 25;

console.log(`Hello, my name is ${name} and I am ${agee} years old`);

// \t \n

let text = "It's a First Line. \n It's a Second Line.";
console.log(text);

let text1 = "Name:\tJohn Doe";
let text2 = "Age:\t25";
console.log(text1);
console.log(text2);



//String Concatenation
//To join two or more strings together
let str1 = "Hello ";
let str2 = "World!";

console.log(str1 + str2);

//String Methods
//String methods are used to perform operations on strings
//Example: toUpperCase(), toLowerCase(), trim(), etc.
//toUpperCase() method
//Converts a string to uppercase
console.log(string.toUpperCase());
//toLowerCase() method
//Converts a string to lowercase
console.log(string.toLowerCase());
//trim() method
//Removes leading and trailing spaces from a string
console.log(string.trim()); // removes whitespaces

//str.slice(start, end?) // returns part of string
// str1.concat( str2 ) // joins str2 with str1
// str.replace( searchVal, newVal )
// str.charAt( idx )


// Let‘s Practice
// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = “Maheen Ali” , username should be "@MaheenAli494"

let name1 = prompt("Enter your full name");
let username = "@" + name1 + name1.length;
console.log(username);









