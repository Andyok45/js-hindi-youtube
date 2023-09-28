let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
// if instead of 33 it was 33abc (a string) it will still show type as number but the value will be NaN (not a number) , if score is null then number output will be 0 and if the score will be undefined then the output will be NaN
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
