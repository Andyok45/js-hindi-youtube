// if 
const temperature = 41 

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log(" temperature is greater than 50");
}

const score = 200

if (score > 100 ) {
    const power = "fly"
    console.log(`User power: ${power}`);
}

const balance = 650

if(balance < 500) {
    console.log("less than");
} else if (balance < 750) {
    console.log(" less than 750 ");
} else if (balance < 900){
    console.log("less than 900");
} else {
    console.log("balance less than 1200");
}

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}