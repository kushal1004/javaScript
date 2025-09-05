const employeeName = "kushal"
const employeeAge  = "20"

// const employeeAge  = "21" // not allowed

const employeeEmial = "kushal@gmail.com"

 /* 
 const cannot be updated
  const cannot be redeclared
  const is block scoped, it is not function scoped, it is not global scoped
  */

console.log(employeePhone) // undefined
console.log(employeeSalary) // reference error for let and const also, it is called temoral dead zone

var employeePhone = "9876543210"

 /*
 don't use var it is outdated, it can be updated, it can be redeclared, it can create bugs
it is function scoped,it is not block scoped , it is global scoped
 */

employeePhone = "1234567890" // not preferable

let employeeSalary = "50000"
employeeSalary = "60000" 

/*
 preferable let can be updated
 it is block scoped, it is not function scoped, it is not global scoped
 value can be changed
 but cannot be redeclared
 */

let employee; // declaration so output will be undefined

console.table([employeeName, employeeAge, employeeEmial,employeePhone,employeeSalary,employee])


function test() {
  var x = 10;
  console.log(x); // 10
}
console.log(x); // Error: x is not defined


if (true) {
  let y = 20;
  const z = 30;
  console.log(y, z); // 20 30
}
console.log(y, z); // Error: y is not defined, z is not defined