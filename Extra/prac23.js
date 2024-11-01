//Promises

//Think of promise as like when you order something, then they will say don't worry, you can do your work we will handle rest of the things and eventually we'll notify you regardless of we succeed to deliver or not(failure)

// Promise
// Imagine that you’re a top singer, and fans ask day and night for your upcoming song.

// To get some relief, you promise to send it to them when it’s published. You give your fans a list. They can fill in their email addresses, so that when the song becomes available, all subscribed parties instantly receive it. And even if something goes very wrong, say, a fire in the studio, so that you can’t publish the song, they will still be notified.

// Everyone is happy: you, because the people don’t crowd you anymore, and fans, because they won’t miss the song.

// This is a real-life analogy for things we often have in programming:

// A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.
// A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready untill then other code is executed.

// let promise = new Promise(function(resolve, reject) {
//   // executor (the producing code, "singer")
// });


// //Promise constructor to make an (instance) promise object
// const promise = new Promise((resolve, reject) => {
//   console.log("I am an executer")
//   resolve(2)
// })
// console.log(promise)
// Promise
// [[Prototype]]: Promise
// catch: ƒ catch()
// constructor: ƒ Promise()
// finally: ƒ finally()
// then: ƒ then()
// Symbol(Symbol.toStringTag): "Promise"
// [[Prototype]]: Object
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

//The call back we are passing to the Promise constructor can be known as executer and that call back function again gets two callbacks in the form of parameters as resolve() and reject()  

// if you don't fire the resolve function then the promise will remain in pending state only 
// if you fire reject state then it would be in a rejected state
// but if you call resolve function with a resolved value as a argument then it would be in a fulfilled state and return that value

// The promise object returned by the new Promise constructor has these internal properties:

// state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
// result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called


// console.log("hello one")

// setTimeout(() => {
//   console.log("hello two in 2 seconds")
// }, 2000);


//producers

// const p1 = new Promise((resolve, reject) => {
//   console.log("Promise1 is pending")
//   setTimeout(() => {
//     console.log("I am a promise and I got resolved")
//     resolve("done")
//   }, 5000);
// })

// const p2 = new Promise((resolve, reject) => {
//   console.log("Promise2 is pending")
//   setTimeout(() => {
//     console.log("I am a promise and I got rejected");
//     reject("Failed")
//   }, 5000);
// })

// console.log(p1, p2)

//concurrently they would be fired

// now look, this "then", finally and catch methods will pass one callback function (executer) as argument in which the resolved/rejected value is then passed to the parameter of callback which we can access 
//we can call "this",finally,catch as consumers which has subscribed to the producer result via a promise

// p1.then((value) => console.log("This is value", value));
// This is value done
// this will be fired soon after p1 promise gets fulfilled(resolved or rejected)


// p2.catch((value) => console.log("This is value", value));
// This is value Failed
// after the entire p1 this will be fired soon after p2 promise gets fulfilled(resolved or rejected)
// whenever you fire/call the reject callbackFn then we need to use catch method instead of then() to handle the error

// p2.then((value) => {
//   console.log("p2 got resolved", value)
// }, (error) => {
//   console.log("p2 got an error(rejected)", error)
// })
//p2 got an error(rejected) Failed
//fun fact, it can also pass two callback arguments
//1) containing the call back which will fire if promise gets resolved
//2) the other call back function will fire if promise gets rejected (so it behaves like a .catch method)

// Attaches callbacks for the resolution and/or rejection of the Promise.
// @param onfulfilled — The callback to execute when the Promise is resolved.
// @param onrejected — The callback to execute when the Promise is rejected.

//If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction)
// .catch(f) is the same as promise.then(null, f)

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Heloooooo 1")
//   }, 2000);
// }).then((value)=>{
//   console.log("Helooooooo 2", value)
// })
// Heloooooo 1

//it will not perfom the "then" method in an pending state cuz we haven't called either resolve or reject and hence its not fulfilled to move further

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Heloooooo 1")
//     resolve("Awesome")
//   }, 2000);
// }).then((value)=>{
//   console.log("Helooooooo 2", value)
// }).catch((error)=>{
//   console.log("we got an error", error)
// })
// Heloooooo 1
// Helooooooo 2 Awesome

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Heloooooo 1")
//     reject("Awesome")
//   }, 2000);
// }).then((value)=>{
//   console.log("Helooooooo 2", value)
// }).catch((error)=>{
//   console.log("we got an error", error)
// })
// Heloooooo 1
// we got an error Awesome

//this method will execute if promise gets resolved else it would be skipped and catch method will execute when an promise gets rejected

//IMP
// on the present evidences the promise is also significantly used to handle the asyncronous functions / behaviour / activites to make it synchrous and to execute it one after the another based on resolve or reject

// Promises allow us to do things in the natural order


//Promise Chaining
//the promise which doesn't takes time can be called as "immediately resolved promise"
//The idea is to pass the result through the chain of .then handlers

//the .then handler is then called, which returns a new promise(resolved with two values)
//the next .then() gets the result of previous one and this keeps on going

//every call to .then() returns a new promise whose value is passed to the next one and so on.
//we can create custom promises inside .then()

// new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     resolve("Done you dumbass")
//   }, 2000);
// }).then((value)=>{
//   setTimeout(() => {
//     console.log("then1",value)
//   }, 1000);
// }).then((value)=>{
//   setTimeout(() => {
//     console.log("then2",value)
//   }, 500);
// })
//! won't work


///Example
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1st step done you moron")
  }, 2000);
}).then((value) => {
  return new Promise((resolve) => {
    console.log(value)
    setTimeout(() => {
      resolve("2nd step done you jerk")
    }, 2000);
  })
}).then((value) => {
  return new Promise((resolve) => {
    console.log(value)
    setTimeout(() => {
      resolve("3rd step done you bastard")
    }, 2000);
  })
}).then((value) => console.log(value)).finally(() => {
  console.log("well this is finally and gonna run no matter what")
})

// 1st step done you moron
// 2nd step done you jerk
// 3rd step done you bastard

//invoked a promise contructor directly without creating a promise object to save lines and who wants to use that object again and again like obj.then() obj.then()
//it we have actually called promise constructor so no need to return the new promise with its fulfilled state

//we can pass anything inside the resolve and call it if we want that promise to resolve it otherwise reject it

//when we use "then" method to pass one callback; getting one value as a paramter is nothing but the same value we have passed as a argument while calling resolve or reject callbacks in previous "then" or an promise constructor
//if it were to continue then it has to return new promise with fullfilled state

//rest of the "then's" also passes one callback function only for resolved promise (second one is for error) and what value it gets as a parameter is also the same value we passed to the resolve/reject methods inside the new returned promise which was in previous .then()

//and it can go on


// Cleanup: finally
// Just like there’s a finally clause in a regular try {...} catch {...}, there’s finally in promises.

// The call .finally(f) is similar to .then(f, f) in the sense that f runs always, when the promise is settled: be it resolve or reject.

// The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.

// E.g. stopping loading indicators, closing no longer needed connections, etc.

new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve or maybe reject */
})
  // runs when the promise is settled, doesn't matter successfully or not
  .finally(() => "stop loading indicator")
  // so the loading indicator is always stopped before we go on
  .then(result => "show result", err => "show error")

//As said for finally(handler), it’s a place to do generic cleanup, no matter what the outcome was.

//To summarize:

// A finally handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.
// If a finally handler returns something, it’s ignored.
// When finally throws an error, then the execution goes to the nearest error handler.

//Promise Chaining is the chaining of those promises using "then" method and passing values from one to other ans in a synchronized way
//Multiple Handlers indicates just having multiple .then(), each will run independently and won't be interconnected and waiting for previous promise to get fulfilled.... also we don't return new promise inside ".this()"

// Promise handlers .then/.catch/.finally are always asynchronous.

// Even when a Promise is immediately resolved, the code on the lines below .then/.catch/.finally will still execute before these handlers.

let promise = Promise.resolve();
promise.then(() => console.log("promise done!"));
console.log("code finished"); // this alert shows first
//code finished
//promise done!

//As you already know promise is used to handle to asynchronous activities , hence the promise handler itself are asynchrnous in nature and will take time since would be first pushed to queue

//so as you already know that synchronous code will run first then asynchronous will

// Promise handling is always asynchronous, as all promise actions pass through the internal “promise jobs” queue, also called “microtask queue” (V8 term).

// So .then/catch/finally handlers are always called after the current code is finished.

// If we need to guarantee that a piece of code is executed after .then/catch/finally, we can add it into a chained .then call method.