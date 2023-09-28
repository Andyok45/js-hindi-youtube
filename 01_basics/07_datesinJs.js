// Dates

let myDate = new Date()
console.log(myDate.toString);
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreateDate.toDateString());
let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
// as months start from 0
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
    
})