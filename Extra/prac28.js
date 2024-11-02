// setTimeout(() => {
//   console.log("run")
// }, 1000);

// // console.log(a)//it will throw an error and nothing will execute
// setTimeout(() => {
//   console.log("run")
//   // console.log(a)//it will throw an error and only first setTimeout will execute
// }, 2000);

// setTimeout(() => {
//   console.log("run")
// }, 3000);

// setTimeout(() => {
//   console.log("run")
// }, 4000);

//Error Handling
//try and catch

// try {
//   console.log(yo)
// }catch(err){
//   console.log("Balle Balle")
// }
// console.log("hii")

// as you saw earlier that if error comes than the rest of the code will not execute and it stops the script right away
//for that we use Error Handling and handle that error grace fully and also do not stop the script from executing the rest of the code

// e.g
// try {
//   alert('Start of try runs');  // (1) <--
//   lalala; // error, variable is not defined!
//   alert('End of try (never reached)');  // (2)
// } catch (err) {
//   alert(`Error has occurred!`); // (3) <--
// }

//try...catch only works for runtime errors
// The JavaScript engine first reads the code, and then runs it. The errors that occur on the reading phase are called “parse-time” errors and are unrecoverable (from inside that code). That’s because the engine can’t understand the code.

// So, try...catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.

// try...catch works synchronously
// which means if any scheduled / asynchrounous thing is present inside the try then try and catch would already get executed afterwards even if the asynchronous thing get executed afer some time the try and catch wouldn't work

// try{
//   setTimeout(() => {
//     console.log(yo)
//     console.log("After Yo")
//   }, 2000);
// } catch {
//   console.log("You got an error")
// }
// console.log("rest of the code")

// That’s because the function itself is executed later, when the engine has already left the try...catch construct.


// setTimeout(() => {
//   try {
//     noSuchVariable;
//   } catch (err) {
//     console.log("No such variable error")
//   }
// }, 1000);

let err = new Error("Its an error")
// console.log(err)

// As you can see there's an built-in constructor from which we can create new err object from Error Class

let err1 = new SyntaxError("Its an syntax error")
let err2 = new AggregateError("Its an Aggregate error")
let err3 = new TypeError("Its an Type error")
let err4 = new ReferenceError("Its an Reference error")



