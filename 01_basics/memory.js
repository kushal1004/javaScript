/*
JavaScript is a dynamically typed language. This means that variables in JavaScript do not have a fixed type declared at the time of their creation. Instead, the type of a variable is determined at runtime based on the value it currently holds.
*/

// stack memory (for primitive data types)
let num1 = 42; // num1 is stored in stack memory
let num2 = num1; // num2 gets a copy of num1's value
num2 = 100; // Changing num2 does not affect num1   
console.log(num1); // 42
console.log(num2); // 100   

// heap memory (for reference data types)
let obj1 = { name: "Alice" }; // obj1 is stored in heap memory
let obj2 = obj1; // obj2 references the same object as obj1
obj2.name = "Bob"; // Changing obj2 also affects obj1
console.log(obj1.name); // "Bob"
console.log(obj2.name); // "Bob"

// and this obj1 and obj2 both are stored in stack memory but the actual object { name: "Bob" } is stored in heap memory and both obj1 and obj2 hold the reference (or address) to that object in heap memory.

/*
In summary, primitive data types are stored directly in stack memory, and variables hold their actual values. Reference data types are stored in heap memory, and variables hold references (or addresses) to the actual objects in heap memory.
*/

/*
+-------------------+         +-----------------------------+
|     Stack         |         |            Heap             |
+-------------------+         +-----------------------------+
| num1: 42          |         |                             |
| num2: 100         |         |   { name: "Bob" }           |
| obj1: ───────────────────────────(actual object)          |
| obj2: ─────────────────────────────|                     |
+-------------------+         +-----------------------------+
 
*/