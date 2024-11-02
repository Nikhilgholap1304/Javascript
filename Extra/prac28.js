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

// let err1 = new SyntaxError("Its an syntax error")
// let err2 = new AggregateError("Its an Aggregate error")
// let err3 = new TypeError("Its an Type error")
// let err4 = new ReferenceError("Its an Reference error")

//also you can use the err object properties which are .name and .message which most of the objects will comprise of
//which are same as how you put message inside while creating constructor
// try {
//   noSuchVariable;
// } catch (err) {
//   console.log(err.name)
//   //ReferenceError
//   console.log(err.message)
//   //noSuchVariable is not defined
//   console.log(err.stack)
//   //ReferenceError: noSuchVariable is not defined
// }

// console.log(typeof json) //representing json string
let json = '{"name": "nikhil", "age": 20}'

try {
  let user = JSON.parse(json)
  console.log(user) //object

  console.log(user.skill) //undefined
  //the code will run normally and runtime will not throw an error
  //eventhough this is an error from our perspective where we couldn't be able to get that
  //in such cases we will throw error manually using throw keyword

  if(!user.skill){
    throw new Error("No value"); //whatever constructor you are using is a name and the argument you are passing is the message
  }
} catch (error) {
  console.log(error)
  //Error: No value
}

// “Throw” operator
// The throw operator generates an error.
// The syntax is:
// throw <error object>

//For built-in errors (not for any objects, just for errors), the name property is exactly the name of the constructor. And message is taken from the argument.



