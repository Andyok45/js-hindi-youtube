//  Javascipt Execution Context 
// {} Global EC (browser nodejs bun dino has different global EC)

//  Global EC
// Functional EC 
// In mongoose -> Eval EC
// {} runs in two phases -> One is memory creation phase (or creation phase) -> in this memory allocation is done 
//                          Second is Execution Phase  -> in this all the execution is done (like addition subtraction)


// Let there be a code 
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1 , val2)
let result2 = addNum(10 , 2)

// Now lets see how the code runs 
// Step 1 -: A global execution / environment 
// Step 2 -: Memory creation phase 
//               val1 -> undefined
//               val2 -> undefined
//               addnum -> definition the definition of the function goes in the addnum memory phase
//               result1 -> undefined
//               result2 -> undefined
// Step 3 -: Execution Phase 
//               val1 -> 10
//               val2 -> 5
//               addNum -> in execution of a function a new variable environment and execution thread is formed
//               Two phases are again formed and in memory phase 
//                                                     val1 -> undefined
//                                                     val2 -> undefined
//                                                     total -> undefined
//                                               and execution phase 
//                                                     num1 -> 10
//                                                     num2 -> 5
//                                                     total -> 15
//  after the result/ total is obtained then the new executional context created is deleted 
//  after this    result1 -> 15 
//                result2 -> 12
