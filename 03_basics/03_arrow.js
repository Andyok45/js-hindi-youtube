const user = { 
    username: "ansh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // this will output ansh , welcome to the website 
        console.log(this); // this will output the context from which the last output is obtained the output is as follows in first line username: 'ansh', in second line price: 999, in third line welcomeMessage: [Function: welcomeMessage] 
    }

}

user.welcomeMessage()
user.username = "minnie"
user.welcomeMessage()
console.log(this) // the output will be {}
// in the browser the global object is window object so if we write console.log(this) in browser we will get windows as output

// function chai(){
//     let username = "hitesh"
//     console.log(this); // if this.username is written then output will be undefined in function this cannot be used
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai() // output is undefined 

const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}

chai() // output is undefined if only this was written then output was empty parenthesis {} 

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => (num1 + num2) // it is called implicit return as only one line statement

const addTwo = (num1 , num2) => ( {username: "ansh"})

console.log(addTwo(3,4))


