function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}

sayMyName // this is the reference there is no output in this case this just tells that function is present
sayMyName() // with the parenthesis it is the execution

// function addTwoNumbers (numb1 , numb2){
//     console.log(numb1 + numb2);
// }
// (numb1 , numb2) is called parameters 
// ( 3 , 4) are called arguments

addTwoNumbers(3,4) // output 7 
addTwoNumbers(3, "4") // output 34
addTwoNumbers(3 , "a") // output 3a 
addTwoNumbers(3 , null) // output 3

const result = addTwoNumbers( 3 , 5 ) // storing output of the function in a const
// when we do console.log(result) then the output is undefined
// so we do not do this we rather do something else

function addTwoNumbers(numb1 , numb2){
    // let result = numb1 + numb2
    // return result
    // also we can write the above thing in single line as 
    return numb1 + numb2
    console.log("Ansh") // this code is not executed as it is written after return
}

function loginUserMessage(username = "sam"){     // we give a default value to avoid undefined and if user inputs value then it will overwrite sam 
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("ansh"))
console.log(loginUserMessage()) // when no value is passed then output is undefined has just logged in
console.log(loginUserMessage("")) // output is just logged in

function calculateCartPrice(...numb1){ // ... is used as rest operator in this case as it packs all the values as an array
    return numb1
}

console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "ansh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject (user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));



