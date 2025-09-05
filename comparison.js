"use strict";
// Comparison examples

console.log( "2" > 1); // true
console.log( "01" == 1); // true
console.log( 0 == false); // true
console.log( 0 === false); // false

console.log( null == undefined); // true
console.log( null === undefined); // false

// Additional examples
console.log( "5" < 10); // true
console.log( "5" > "10"); // true (lexicographical comparison)

/*
5" > "10" compares the first character of each string:
"5" vs "1"
Since "5" comes after "1" in Unicode/ASCII order, "5" is considered greater than "10".
*/

console.log( null > 0); // false
console.log( null >= 0); // true
console.log( null == 0); // false

console.log( undefined > 0); // false
console.log( undefined < 0); // false
console.log( undefined >= 0); // false
console.log( undefined == 0); // false


// Strict equality examples
console.log( 0 === false); // false
console.log( "" === false); // false
console.log( null === undefined); // false
console.log( NaN === NaN); // false
 
console.log("2" == 2); // true
console.log("2" === 2); // false, because different types , === checks both value and type