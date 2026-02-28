//let score = 33
let score = "33abc" //it will be give the output as string
//let score = null //it will be give the output as object
//let score = undefined //it will be give the output as undefined
//let score = true //it will be give the output as boolean

//console.log(typeof score)
let valueInNumber = Number(score) //it will be give the output as NaN
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

let isLoggedIn = "saransh" //if kept empty it will be give the output as false
let booleanIsLoggedIn = Boolean(isLoggedIn) 
//console.log(booleanIsLoggedIn)

let someNumber = 23
let stringNumber = String(someNumber)
//console.log(stringNumber) //it will be give the output as 23 but in string form
//console.log(typeof stringNumber)

// operations-------------
let value = 33
negValue = -value
//console.log(negValue) //it will be give the output as -33

let str1 = "Hello"
let str2 = " Saransh"
let str3 = str1 + str2 
//console.log(str3)

//console.log("1" +2 + 2) //it will be give the output as 122 because of string concatenation
//console.log(1 + 2 + "2") //it will be give the output as 32 because of string concatenation

//console.log(+true) //it will be give the output as 1
//console.log(+"") //it will be give the output as 0

//in js == which is equality check is different from comparison operators like >, <, >=, <=.
// in js == is different from === because == is a loose equality check which means it will do type coercion if the types of the operands are different, while === is a strict equality check which means it will not do type coercion and will return false if the types of the operands are different.