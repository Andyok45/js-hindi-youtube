const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)
// adds the dc_heroes array as an element in marvel_heroes array 

console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);
// merges two arrays and makes a copy of it

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // infinity defines that till infintiy depth the numbers must be flat 
// combines all the array in array and makes a single array
console.log(real_another_array);

console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
// makes an array from the string

console.log(Array.from({name: "Ansh"}))
// interesting case as the output shows empty array since we did not define that the array has to be formed from the keys or the values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]


