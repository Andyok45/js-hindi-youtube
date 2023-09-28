const mySym = Symbol("key1")

const JsUser = {
    name: "ansh",
    "full name": "Ansh Yadav",
    [mySym]: "mykey1",
    age: 18,
    location: "Varanasi",
    email: "ansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.name)
console.log(JsUser["location"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "ansh.ydv@gmail.com"
// Object.freeze(JsUser)
// freezes the values of the object JsUser now it cannot be changed if different value is written after the freeze command. 
JsUser.email = "anshminnie@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(JsUser.greeting());






