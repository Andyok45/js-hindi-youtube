// for of 
// array specefic loops

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")
// maps adds unique values and does not repeat the same values and values are displayed in order
console.log(map)

