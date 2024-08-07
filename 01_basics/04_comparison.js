// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);   // output -> true  (automatically converts string to num)
// console.log("02" > 1);  // output -> true 

console.log(null > 0);   
console.log(null == 0);
console.log(null >= 0);

// (1) => false (2) => false (3) => true
// the reason is that an equality check == and comparisons > < >= <= work differently. 
// comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 id true and (1) null > 0 is false
// === strict check -> checks datatype

// console.log(undefined == 0);   }
// console.log(undefined > 0);    }   all gives false  
// console.log(undefined < 0);    }
