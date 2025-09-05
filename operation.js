let value = 10
let negativeValue = -value
console.log(negativeValue) // -10

/********** don't use this type of code in your projetc , always use () to simpelified the answer **********/

console.log(2 + 3) // 5
console.log(2 - 3) // -1
console.log(2 * 3) // 6
console.log(2 / 3) // 0.6666666666666666
console.log(2 % 3) // 2 (modulus operator gives the remainder)
console.log(2 ** 3) // 8 (exponentiation operator, 2 raised to the power of 3)

console.log(1 + "2") // "12" (number is converted to string and concatenated)
console.log("Hello " + "World") // "Hello World" (string concatenation)
console.log("5" * "4") // 20 (strings are converted to numbers and multiplied)
console.log("10" - 2) // 8 (string is converted to number and subtracted)
console.log("10" / 2) // 5 (string is converted to number and divided)
console.log("10" % 3) // 1 (string is converted to number and modulus is calculated)
console.log("2" ** 3) // 8 (string is converted to number and exponentiation is performed)
console.log("Hello" * 3) // NaN (Not a Number, invalid multiplication)
console.log("Hello" - 3) // NaN (Not a Number, invalid subtraction)
console.log("Hello" / 3) // NaN (Not a Number, invalid division)

console.log(true + 1) // 2 (true is converted to 1)
console.log(false + 1) // 1 (false is converted to 0)
console.log( 1 + "2" +1) // "121" (1 is converted to string and concatenated)
console.log( 1 + 2 + "1") // "31" (1+2=3, then 3 is converted to string and concatenated)
console.log( 1 + 2 + +"1") // 4 (+"1" converts string "1" to number 1, then 1+2+1=4)
console.log("1"+2+2) // "122" (2 is converted to string and concatenated)
console.log("1"+(2+2)) // "14" (2+2=4, then 4 is converted to string and concatenated)
console.log("1"-"1"+2) // 2 (both strings are converted to numbers, 1-1=0, then 0+2=2)

console.log(+"") // 0 (empty string is converted to 0)
console.log(+"123") // 123 (string is converted to number)
console.log(+true) // 1 (true is converted to 1)
console.log(+false) // 0 (false is converted to 0)
console.log(+null) // 0 (null is converted to 0)
console.log(+undefined) // NaN (undefined cannot be converted to a number)