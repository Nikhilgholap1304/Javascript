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

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Heloooooo 1")
//   }, 2000);
// }).then((value)=>{
//   console.log("Helooooooo 2", value)
// })
// Heloooooo 1

//it will not perfom the "then" method in an pending state cuz we haven't called either resolve or reject and hence its not fulfilled to move further

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Heloooooo 1")
    resolve("Awesome")
  }, 2000);
}).then((value)=>{
  console.log("Helooooooo 2", value)
}).catch((error)=>{
  console.log("we got an error", error)
})
// Heloooooo 1
// Helooooooo 2 Awesome

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Heloooooo 1")
    reject("Awesome")
  }, 2000);
}).then((value)=>{
  console.log("Helooooooo 2", value)
}).catch((error)=>{
  console.log("we got an error", error)
})
// Heloooooo 1
// we got an error Awesome
