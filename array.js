'use strict'
let arr = [1, 2, 3, 4, 5]

console.log(arr.includes(3)) // true
console.log(arr.includes(6)) // false
console.log(arr.indexOf(3)) // 2
console.log(arr.indexOf(6)) // -1
console.log(arr.push(6)) // 6
console.log(arr) // [1, 2, 3, 4, 5, 6]
console.log(arr.pop()) // 6
console.log(arr) // [1, 2, 3, 4, 5]
console.log(arr.shift()) // 1
console.log(arr) // [2, 3, 4, 5]
console.log(arr.unshift(1)) // 1 add at start
console.log(arr) // [1, 2, 3, 4, 5]
console.log(arr.slice(1, 3)) // [2, 3]
console.log(arr.splice(1, 2, 6, 7)) // return [2, 3] and remove these values from main array and 6 and 7 at that position
console.log(arr) // [1, 6, 7, 4, 5]
