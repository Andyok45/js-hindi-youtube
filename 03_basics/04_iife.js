// Immedietly Invoked Function Expressions (IIFE)
// we use iife to avoid pollution from global scope as it gets immedietly executed 

(function chai(){
    console.log(`DB CONNECTED`);
})();
// above one is a named iife
// iife does not know where to stop so to write another iife we end the previous one with a semicolon 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('ansh')