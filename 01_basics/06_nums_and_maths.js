const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
// adds 2 points digit after the number 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));
// the number provided we use that many integers in our final output and round off , like now the output will be 124, if the number was 4 then output would have been 123.9,

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
// adds commas 

// *************************** MATHS *************************************
console.log(Math);
console.log(Math.abs(-4));
// all negatives positive and positive stays positive

console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
// chooses the integer just above the decimal
console.log(Math.floor(4.6));
// chooses the integer just below the decimal
console.log(Math.min(4,6,8,9));

console.log(Math.random());  
// always has it's value between 0 and 1 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min) +1) + min)

