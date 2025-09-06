//Dates

const myDate = new Date()
console.log(myDate) // current date and time
console.log(myDate.getFullYear()) // year
console.log(myDate.getMonth() + 1) // month (0-11) +1 is added to get 1-12
console.log(myDate.toString()) // full date and time
console.log(myDate.toJSON()) // ISO format
console.log(myDate.toLocaleDateString()) // date only
console.log(myDate.toLocaleString()) // date and time
console.log(myDate.toLocaleTimeString()) // time only
console.log(myDate.toDateString()) // date only


//const newDate = new Date(2004, 5, 9) // June 9, 2004 (month is 0-indexed)
const newDate = new Date("2024-10-10") // October 10, 2024 
console.log(newDate.toDateString()) // date only

const myTimeStamp = Date.now() // current timestamp in milliseconds
console.log(myTimeStamp)
console.log(Math.floor(myTimeStamp/1000))  // current timestamp in seconds

console.log(myDate.toLocaleString('default',{
    weekdays: 'long'
}))