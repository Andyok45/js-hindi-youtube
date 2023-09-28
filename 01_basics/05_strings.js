const name = "ansh" 
const repoCount = 50 

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ansh-hh-c')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
// in slice we can write from negative values that'll start from backwards of the string
console.log(anotherString);

const newStringOne = "    ansh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ansh.com/ansh%20yadav"

console.log(url.replace('%20','-'))
// to replace a part of the url wiht something else
console.log(url.includes('sundar'))
// to check if something is included in the url 

console.log(gameName.split('-'))