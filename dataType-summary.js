/*
  data types are mainly of two types and this catogory is based on how they store data in memory and how they are accessed
  1. Primitive data types (or call by value)

    [nn bb ss u]
     - number
     - null
     - boolean
     - bigint
     - string
     - symbol
     - undefined
     
  2. Reference data types (or Non-primitive data types)
     - object
     - array
     - function
*/

// call by value (primitive data types)
let a = 10;
let b = a; // b gets a copy of a's value
console.log(b) //10
b = 20;
console.log(b) //20
console.log(a); // 10 (a is unchanged)

// call by reference (reference data types)
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 references the same array as arr1
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (arr1 is changed)

/*
JavaScript is a dynamically typed language. This means that variables in JavaScript do not have a fixed type declared at the time of their creation. Instead, the type of a variable is determined at runtime based on the value it currently holds.
*/

const myFunction = ()=>{
    console.log("hello world")
}
myFunction();
console.log(typeof myFunction); // output will be function but actually it is an object or nicely u can say it is a function object
