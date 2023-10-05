// var c = 300
let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a) the value defined inside scope does not come out of the scope 
// console.log(b) the value defined inside scope does not come out of the scope
console.log(c) // the value inside the scope comes out of the scope 
// when a value of c = 300 is assigned and 30 is assigned in scope then the value is changed from 300 to 30
console.log(a) // value out of the scope is 100 and inside the if scope is 10 


//  in browser the code scope is different and in coding environment where we code using node there scope is different 


function one(){
    const username = "ansh"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    // console.log(website); it will show error

    two()

}

one()

if (true){
    const username = "ansh"
    if (username === "ansh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); will not be access as outside of the scope
}

// console.log(username); will not be access as outside of the scope

// +++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++
addone(5) // no issues and the output is also gonna remain the same 

function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
// as we stored the function in a const so if we place addTwo above the function it will show error
addTwo(5)
