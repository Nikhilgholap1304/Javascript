//Promises

//Think of promise as like when you order something, then they will say don't worry, you can do your work we will handle rest of the things and eventually we'll notify you regardless of we succeed to deliver or not(failure)

// Promise
// Imagine that you’re a top singer, and fans ask day and night for your upcoming song.

// To get some relief, you promise to send it to them when it’s published. You give your fans a list. They can fill in their email addresses, so that when the song becomes available, all subscribed parties instantly receive it. And even if something goes very wrong, say, a fire in the studio, so that you can’t publish the song, they will still be notified.

// Everyone is happy: you, because the people don’t crowd you anymore, and fans, because they won’t miss the song.

// This is a real-life analogy for things we often have in programming:

// A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.
// A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

// let promise = new Promise(function(resolve, reject) {
//   // executor (the producing code, "singer")
// });

console.log("hello one")

//Promise constructor to make an (instance) promise object
const promise = new Promise((resolve, reject) => {
  console.log("I am an executer")
  resolve(2)
})
console.log(promise)
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

// setTimeout(() => {
//   console.log("hello two in 2 seconds")
// }, 2000);

console.log("My name is Nikhil")
