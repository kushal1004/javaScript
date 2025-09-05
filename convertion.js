"use strict"

let age = 20 //number
let marks = "95" //string

console.log(typeof marks) //string

//convert string into number

let newMarks = Number(marks);
console.log(typeof newMarks) //number
console.log(newMarks) //95

let xyz = "95abc" //string

console.log(Number(xyz)) //NaN => Not a Number , it is a special numeric value that represents an undefined or unrepresentable value in mathematics and computer science

let a = null
console.log(Number(a)) //0

let b = undefined
console.log(Number(b)) //NaN

console.log(typeof NaN) //number

// convert bollean into number and number into boolean
let isTrue = true
console.log(Number(isTrue)) //1
let isFalse = false
console.log(Number(isFalse)) //0
console.log(Boolean(1)) //true
console.log(Boolean(0)) //false
console.log(Boolean(100)) //true
console.log(Boolean(-100)) //true
console.log(Boolean("")) //false
console.log(Boolean("Hello")) //true
console.log(Boolean(" ")) //true (a string with a space is considered true)

//convert number into string and string into number
let salary = 50000
console.log(typeof salary) //number

let newSalary = String(salary) //number convert into String
console.log(typeof newSalary) //string
console.log(newSalary) //50000