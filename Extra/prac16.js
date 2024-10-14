// 1) Global Execution / Global Environment
//- Allocated inside the this {}

//2) Memory Creation Phase
//a -> undefined
//b -> undefined
//(function) demo -> definition (if you call it then only it executes)

//3) Execution Phase / execution context
//a=10
//b=20
//demo -> {new variable + execution thread} - again from same memory creation phase
//demo = 30

//switch case

// const day = 2
// switch (day) {
//   case 1:
//     console.log(day)
//     break;
//   case 2:
//     console.log("case 2")
//     // break;
//   case 3:
//     console.log("case 3")
//     // break;

//   default:
//     console.log("default")
//     break;
// }

//If break is not given then the code will execute all the way from matched case till it doesn't come across the break statement or end of switch case

// let name = "Nikhil"

// const demo = () => {
//   console.log(name)
//   // var name = "Ayush" //undefined while console logging
//   // let name = "Ayush" //Cannot access 'name' before initialization
//   const name = "Ayush" //Cannot access 'name' before initialization
// }
// demo()

//Cannot access 'name' before initialization

// truthy values - "0", 'false', " ", [], {}, function(){}

// const arr = []
// const obj = {}

// if(arr.length === 0){
//   console.log("array Its empty")
// }

// if(Object.keys(obj).length === 0){
//   console.log("object Its empty")
// }

//Nullish Coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10 //if it neither null nor undefined then it will assign first value otherwise second

val2 = null ?? 10

val3 = null ?? null ?? 10 ?? 20 //selects the first values otherthan null or undefined

console.log(val1)  //5
console.log(val2)  //10
console.log(val3)  //10

//Terniary Operator

const iceTea = 100
console.log(iceTea > 100 ? "Costly": "Cheap") //Cheap


