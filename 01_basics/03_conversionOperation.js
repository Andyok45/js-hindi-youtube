let score = "33"

console.log(typeof score)
console.log(typeof(score))
// output // string 
//           string

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
// if instead of 33 it was 33abc (a string) it will still show type as number but the value will be NaN (not a number) 
// if score is null then number output will be 0 
// if the score will be undefined then the output will be NaN
// true => 1 ; false => 0 

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true 0 => false 
// "" => false 
// "hitesh" => true

let someNumber = 33 
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

// ***************** Operations *****************

let value = 3 
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " ansh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2)        // output 12       
console.log(1 + "2")        // output 12
console.log("1" + 2 + 2)    // output 122  
console.log(1 + 2 + "2")    // output 32   

