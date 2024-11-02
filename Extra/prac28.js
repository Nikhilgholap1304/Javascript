"use strict";

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

// let err = new Error("Its an error")
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

// let json = '{"name": "nikhil", "age": 20}'

// try {
//   let user = JSON.parse(json)
//   console.log(user) //object

//   console.log(user.skill) //undefined
//   //the code will run normally and runtime will not throw an error
//   //eventhough this is an error from our perspective where we couldn't be able to get that
//   //in such cases we will throw error manually using throw keyword

//   if(!user.skill){
//     throw new Error("No value"); //whatever constructor you are using is a name and the argument you are passing is the message
//   }
// } catch (error) {
//   console.log(error)
//   //Error: No value
// }

// “Throw” operator
// The throw operator generates an error.
// The syntax is:
// throw <error object>

//For built-in errors (not for any objects, just for errors), the name property is exactly the name of the constructor. And message is taken from the argument.



// Rethrowing
// In the example above we use try...catch to handle incorrect data. But is it possible that another unexpected error occurs within the try {...} block? Like a programming error (variable is not defined) or something else, not just this “incorrect data” thing.

// let json = '{ "age": 30 }'; // incomplete data

// try {
//   user = JSON.parse(json); // <-- forgot to put "let" before user

//   // ...
// } catch (err) {
//   alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
//   // (no JSON Error actually)
// }

//rethrowing of error
//here what it says is we only want the expected or relevent error and to rethrow / or do not try to handle the rest of the errors... 

// In our case, try...catch is placed to catch “incorrect data” errors related to json. But by its nature, catch gets all errors from try. Here it gets an unexpected error, but still shows the same "JSON Error" message. That’s wrong and also makes the code more difficult to debug

//rethrow as the name suggest whatever error we were suppose to handle that thrown error is to rethrow it and won't handle it


// Catch should only process errors that it knows and “rethrow” all others./////////////////////////////

// Usually, we can check the error type using the instanceof operator:

//e.g

// I have used "use strict" for this
// try{
//   user = {name: "Nikhil"} //not used let,var or const
// }catch(err){
//   // if(err.name === "ReferenceError"){
//   //   console.log('ReferenceError')
//   // } //is same as
//   if(err instanceof ReferenceError){
//     console.log("Reference Error")
//     //Reference Error
//   }
// }

// well surprisingly, it can be used anywhere to check if a certain obj is an instance of the class or not
// let a = Promise.resolve();
// console.log(a instanceof Promise)
// //true 
// console.log(a instanceof Error)
// //false


//This is truly an rethrowing

// try {
//   user = { name: "Nikhil" } //not used let,var or const 
//   // let a = 0/2; //this line will not execute cuz the control will be exited and will continue form catch
//   // console.log(a)
// } catch (err) {
//   if (err instanceof TypeError) {
//     console.log("Type Error")
//   } else {
//     throw err
//   }
// }

//As you can see above we only handle the error what we know or expect however the the errors which we can't handle we be rethrown.. may be to a outer try..catch block like following


// try {
//   try {
//     user = { name: "Nikhil" }
//   } catch (err) {
//     if (err instanceof TypeError) {
//       console.log("Type Error")
//     } else {
//       throw err
//     }
//   }
// } catch (error) {
//   console.log("External Error: ", error)
//   //External Error:  ReferenceError: user is not defined
// }


//Time to talk about finally

// try…catch…finally
// Wait, that’s not all.

// The try...catch construct may have one more code clause: finally.

// If it exists, it runs in all cases:

// after try, if there were no errors,
// after catch, if there were errors.


// The finally clause is often used when we start doing something and want to finalize it in any case of outcome.

// For instance, we want to measure the time that a Fibonacci numbers function fib(n) takes. Naturally, we can start measuring before it runs and finish afterwards. But what if there’s an error during the function call? In particular, the implementation of fib(n) in the code below returns an error for negative or non-integer numbers.

// The finally clause is a great place to finish the measurements no matter what.

// Here finally guarantees that the time will be measured correctly in both situations – in case of a successful execution of fib and in case of an error in it:


// let start = Date.now();

// try {
//   result = fib(num);
// } catch (err) {
//   result = 0;
// } finally {
//   diff = Date.now() - start;
// this will count the number of time taken to execute the code
// }


// The finally clause works for any exit from try...catch. That includes an explicit return.

// In the example below, there’s a return in try. In this case, finally is executed just before the control returns to the outer code.

const f1 = () => {
  try {
    return 1
  } catch (err) {
    console.log(err)
  } finally {
    console.log("This will execute no matter what")
  }
  console.log("This will not work")
  //so you just found the difference between normal statement and final construct/block
  //it doesn't matter even if the function returns earlier in try block or returns something in catch block, finally will still run and execute that too before returning something
}
console.log(f1())
//This will execute no matter what
//1

//he try...finally construct, without catch clause, is also useful. We apply it when we don’t want to handle errors here (let them fall through), but want to be sure that processes that we started are finalized



