// array

const myArr = [0, 1, 2, 3, 4, 5] 
const myArr2 = new Array(1, 2, 3, 4, 5)

// Array methods 

myArr.push(6)
// adds the number 6 in the array at the last
myArr.push(7)
myArr.pop()
// removes the last element from the array

myArr.unshift(9)
// to add 9 in starting of the array, for 10k values when each value moves forward so load on computer
myArr.shift()
// removes the starting element of the array

console.log(myArr.includes(9));
// output typeof boolean here the output will be false
console.log(myArr.indexOf(3));
// shows index if the number is not in the array the output will be -1 

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
// join changes the type from array to string, joins the array as a string

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
// slices the array from 1st index to 3rd index including the 1st and second and not the third

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
// splice includes 1st 2nd and 3rd index , the original array gets manipulated and the array remains the elements that are not spliced
console.log(myn2);



