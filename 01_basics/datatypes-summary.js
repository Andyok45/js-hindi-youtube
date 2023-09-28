// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
//  expected output is false 

// Dynamic type language needs to define datatypes , Statically typed is JS
// Reference (Non primitive) 
// Array, Objects, Functions 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ansh",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(myObj);