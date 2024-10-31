// Promise API's (Static Promise Class Methods)

// There are 6 static methods of Promise class

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p1 promise")
//   }, 3000);
// })

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p2 promise")
//   }, 2000);
// })

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p3 promise")
//   }, 4000);
// })



// Promise.all(
//   [p1, p2, p3]
// ).then((value) => {
//   console.log(value)
//   // [ 'p1 promise', 'p2 promise', 'p3 promise' ]
// }).catch((error) => {
//   console.log("unfortunately rejected", error)
//   //unfortunately rejected p3 promise if even one promise reject
// })

//Creates a Promise that is resolved by waiting for an entire array of results together when all of the provided Promises resolve, otherwise rejected when any Promise is rejected.

// @param values — An iterable of Promises.

// @returns — A new Promise.

// Let’s say we want many promises to execute in parallel and wait until all of them are ready.

// For instance, download several URLs in parallel and process the content once they are all done.


// Promise.allSettled(
//   [p1, p2, p3]
// ).then((value) => {
//   console.log(value)
//   // [
//   //   { status: 'fulfilled', value: 'p1 promise' },
//   //   { status: 'rejected', reason: 'p2 promise' },
//   //   { status: 'fulfilled', value: 'p3 promise' }
//   // ]
// })

// Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.

// @param values — An array of Promises.

// @returns — A new Promise.

//It will not throw any error
//It will return the array of objects containing status, value/reason of promises whoever either got fulfilled or rejected i.e settled

// Promise.race(
//   [p1, p2, p3]
// ).then((value) => {
//   console.log(value)
//   //p2 promise
// }).catch((error) => {
//   console.log(error)
// })

//as the name suggests (race) whichever promise settles (resolved or rejected) first will be returned as a single value from this promise and we can access this value using then() method and even if all the promises were pending it will return empty

// Promise.any(
//   [p1,p2,p3]
// ).then((value)=>{
//   console.log(value)
//   //p3 promise
// }).catch((error)=>{
//   console.log(error)
//   // [AggregateError: All promises were rejected] {
//   //   [errors]: [ 'p1 promise', 'p2 promise', 'p3 promise' ]
//   // }
// })

//This promise just want any promise to be fulfilled and same as race but the difference it it will only consider the promise which got resolved first and return single value of that promise and also if none of the promises were resolved then it will throw an aggregate error 

Promise.resolve("This is an resolve value").then((value)=>{
  console.log(value)
  //This is an resolve value
})

Promise.reject("This is an rejected value").catch((value)=>{
  console.log(value)
  //This is an rejected value
})

// Promise.all()
// Promise.any()
// Promise.allSettled()
// Promise.race()
// Promise.resolve()
// Promise.reject()


