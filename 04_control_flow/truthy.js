const userEmail = "ansh.ydv@gmail.com"

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Dont have user email");
}

// if the userEmail = "" then output is Dont have user Email
// if the userEmail = [] then output is Got user Email

// falsy values
// false, 0, -0, In BigInt 0n, "", null, undefined, NaN are all falsy values

// truthy values
// surprising truthy values are "0", 'false', " ", [], {}, function(){}

//  false == 0 is true , false == ' ' is true, 0 == ' ' is true


//  Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // then output is 5
// val2 = null ?? 10 // then output is 10
// val3 = undefined ?? 15 // then output is 15 
// val4 = null ?? 10 ?? 20 // then output is 10




// Terniary Operator 

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Price is more than 80") : console.log("Price is less than 80")