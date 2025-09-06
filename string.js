// String declaration using double and single quotes
const myName = "kushal singha";
const age = '20';

// String interpolation (template literals)
console.log(`my myName is ${myName} and my age is ${age}`);

// String object creation
const str = new String("hello world");
console.log(str); // output will be slightly different [String: 'hello world']

// Commonly used string methods and properties
console.log(myName.length);                // Length of the string
console.log(myName.charAt(2));             // Character at index 2
console.log(myName.at(-1));          // Last character (negative index means start from end and it will be start from -1 insted of 0)
console.log(myName.indexOf("s"));          // First occurrence of 's'
console.log(myName.lastIndexOf("a"));      // Last occurrence of 'a'
console.log(myName.includes("singha"));    // true if 'singha' is in myName
console.log(myName.startsWith("ku"));      // true if myName starts with 'ku'
console.log(myName.endsWith("ha"));        // true if myName ends with 'ha'
console.log(myName.slice(0, 6));           // Substring from index 0 to 5, we can use negative index also
console.log(myName.substring(2, 8));       // Substring from index 2 to 7, we can't use negative index
console.log(myName.toUpperCase());         // Uppercase
console.log(myName.toLowerCase());         // Lowercase
console.log(myName.trim());                // Remove whitespace from both ends not in between
console.log(myName.split(" "));            // Split into array by space
console.log(myName.replace("kushal", "K.")); // Replace 'singha' with 'S.'
console.log(myName.repeat(2));             // Repeat string

console.log(myName) // no change in original string bcz it it primitive data type and immutable