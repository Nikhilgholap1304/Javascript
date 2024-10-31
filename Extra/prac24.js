// Promise API's (Static Promise Class Methods)

// There are 6 static methods of Promise class

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 promise")
  }, 1000);
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 promise")
  }, 2000);
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 promise")
  }, 3000);
})


//Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, otherwise rejected when any Promise is rejected.

// @param values — An iterable of Promises.

// @returns — A new Promise.

let p4 = Promise.all(
  [p1, p2, p3]
).then((value) => {
  console.log(value)
  // [ 'p1 promise', 'p2 promise', 'p3 promise' ]
}).catch((error) => {
  console.log("unfortunately rejected", error)
  //unfortunately rejected p3 promise if even one promise <rejects></rejects>
})




