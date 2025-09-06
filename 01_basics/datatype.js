"use strict" 
// Enforce strict mode for better error checking, treats all js code as modern

//alert("Hello, World!"); 

// Display an alert dialog with the message "Hello, World!" , but we are use in vs code node js environment so it will not work here , it will work in browser environment

let number = 42;
let name = "Alice";
let isActive = true;
let items = [1, 2, 3];
let person = { firstName: "John", lastName: "Doe" };
let nothing = null;
let notDefined;
let uniqueId = Symbol(123456987);

console.log(typeof number);            // "number"
console.log(typeof name);             // "string"
console.log(typeof isActive);        // "boolean"
console.log(typeof items);          // "object" (arrays are objects in JavaScript)
console.log(typeof person);        // "object"
console.log(typeof nothing);      // "object" (this is a known quirk in JavaScript)
console.log(typeof notDefined);  // "undefined"
console.log(typeof uniqueId);   // "symbol" => unique and immutable identifier

console.table({ number, name, isActive, items, person, nothing, notDefined, uniqueId });