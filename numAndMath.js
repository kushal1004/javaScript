"use strict"
const balance = 400;
console.log(balance)

const salary = new Number(50000)
console.log(salary) // output will be slightly different [Number: 50000]

// Commonly used number methods and properties
console.log(salary.toFixed(2));        // Format number to 2 decimal places
console.log(salary.toString());      // Convert number to string
console.log(Number.isInteger(balance));  // Check if balance is an integer

const num1 = 123.89564
console.log(num1.toPrecision(4)); 
// Formats a number to a specified length , considering both integer and decimal parts 4 means total 4 digits,(including before and after decimal point) output will be 123.9

console.log(salary.valueOf()); // Get the primitive value of the Number object

console.log(salary.toLocaleString('en-IN'))

// ++++++++++++++++++++++++   Math Object    +++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-40)) // absolute value , conver negative value to positive
console.log(Math.round(4.6)) // round to nearest integer
console.log(Math.ceil(4.1)) // round up to next integer
console.log(Math.floor(4.9)) // round down to previous integer
console.log(Math.min(1, 2, 3, -4, -5, 6)) // minimum value
console.log(Math.max(1, 2, 3, -4, -5, 6)) // maximum value
console.log(Math.sqrt(16)) // square root
console.log(Math.pow(2, 3)) // 2 to the power of 3 (2^3)
console.log(Math.floor(Math.random() * 10) +1) // random number between 1 and 10


//get random value within the range of min and max
const min =10;
const max = 20;
console.log(Math.random() * (max - min + 1) +min) // random number between min and max (including decimal values) to avoid the zero we add +1
console.log(Math.floor(Math.random() * (max - min + 1)) +min) // random integer between min and max (inclusive)