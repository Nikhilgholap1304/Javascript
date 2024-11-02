// Async and Await

// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

// For instance, this function returns a resolved promise with the result/value of 1; let’s test it:
// async function f() {
//   return 1
// }

// console.log(f())
//Promise { 1 }
//All the way till now despite doing many projects you have been having no idea about this, how lame it seems isn't that right

// f().then((value) => {
//   console.log(value)
// })
//1

// …We could also explicitly return a promise, which would be the same:

// const f1 = async () => {
//   return Promise.resolve(1)
// }
// f1().then((value)=>{
//   console.log(value)
// })
//1

// const f2 = async () => {
//   return Promise.reject("Its an error")
// }
// f2().then((value)=>{
//   console.log(value)
// }).catch((error)=>{
//   console.log(error)
// })
//Its an error

//So, async ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only that. There’s another keyword, await, that works only inside async functions, and it’s pretty cool.

// Await - which works only inside the async function
//let value = await promise; like how we use .then() handler/method to get the resolved value after promise executes and gets resolved

//javascript follows camel case
// const f3 = async () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1)
//     }, 2000)
//   })

//   console.log("hii") 
// The non promise code will not wait for promise to get fulfilled so for that either we need to use the .then() handler/method or here comes await which does the same trick of returning an fullfilled promise and its result/value and it will affect the other code which is after it
// }

// f3()


// const f4 = async () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1)
//     }, 2000)
//   })

//   let value = await promise
//   console.log(value) 
//   console.log("hii")
//   // 1
//   // hii
//   // Here comes the surprise whatever code is after the await the same will also execute after getting the resolved promise and its result/value
// }

// f4()

// const f5 = async () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1)
//     }, 2000)
//   })

//   let value = await promise //.its like using then() we are accessing the value and then returning new promise with the existing value / new value
//   return value
// }

// f5().then((value)=>{ //
//   console.log(value)
//   //1
//   //It will return undefined if we are not returning a resolved promise
// })


// const weather1 = async() => {
//   let mumbai = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       resolve("35deg");
//     }, 2000);
//   }) 

//   let karad = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       resolve("25deg");
//     }, 5000);
//   })

//   mumbai.then(console.log) //behaves like a call back function (shortcut)
//   karad.then(console.log)  //behaves like a call back function
// // 35deg
// // 25deg
// }
// weather1()
//but instead of this we can use await



// const weather = async () => {
//   let mumbai = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("35deg");
//     }, 2000);
//   })

//   let karad = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("25deg");
//     }, 5000);
//   })

//   console.log("Fetching mumbai weather please wait..")
//   let resMumbai = await mumbai;
//   console.log(resMumbai)
//   console.log("Fetching karad weather please wait...")
//   let resKarad = await karad;
//   console.log(resKarad)
//   return [resMumbai, resKarad]

//   // or
//   // return [await mumbai, await karad]
// }

// weather().then((value)=>{
//   console.log(value)
//   //[ '35deg', '25deg' ]
// })

//It will take total 7sec of time to return the promise since until then it has to wait for previous promises to fulfill since we have put await but if clg the value as soon after the await then we can see the individual values

//Any code below the "await promise" will also wait until it gets fulfilled

//Benefit of await is it will stop the execution of function until it gets the respective value from a fulfilled promise

// const dummyFunc = async () => {
//   console.log("Hey I am dummy and I am waiting");
// }

// const main = async () => {
//   console.log("welcome to weather control room")
//   let result1 = await weather()
//   console.log(result1)
//   console.log("Dummy is waiting")
//   await dummyFunc()
//   console.log("Everythings done")
//   //await will also take affect to an async functions
// }
// main()



// Async class methods
// To declare an async class method, just prepend it with async:

// class Waiter {
//   async wait() {
//     return await Promise.resolve(1);
//   }
// }

// new Waiter()
//   .wait()
//   .then(alert); // 1 (this is the same as (result => alert(result)))
// The meaning is the same: it ensures that the returned value is a promise and enables await.

// Error handling
// If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line.

// This code:

// async function f1() {
//   try {
//     await Promise.reject(("Whoops!"));
//   } catch (error) {
//     console.log(error)
//   }
// }
// f1()
//Whoops!

// async function f1() {
//   return await Promise.reject(new Error("Whoops!"));
// }
// f1()
// Error: Whoops!

// …is the same as this:

// async function f2() {
//   throw new Error("Whoops!");
// }
// f2()

//In real situations, the promise may take some time before it rejects. In that case there will be a delay before await throws an error.

// We can catch that error using try..catch, the same way as a regular throw

// async function f1() {
//   try {
//     let res = await fetch("https://no-such-url");
//     return res
//   } catch (error) {
//     console.log(error)
//   }
// }
// f1().then(console.log)
//or .then(val=>console.log(val))

// async/await and promise.then/catch
// When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.

// But at the top level of the code, when we’re outside any async function, we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through error, like in the line (*) of the example above.

// async/await works well with Promise.all
// When we need to wait for multiple promises, we can wrap them in Promise.all and then await:

// // wait for the array of results
// let results = await Promise.all([
//   fetch(url1),
//   fetch(url2),
//   ...
// ]);
// In the case of an error, it propagates as usual, from the failed promise to Promise.all, and then becomes an exception that we can catch using try..catch around the call.

// const overAll = async () => {
//   let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("1")
//     }, 2000);
//   })
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2")
//     }, 3000);
//   })
//   let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("3")
//     }, 4000);
//   })
//   let value = await Promise.all([p1, p2, p3]) //it says wait first let all promises to execute then you console the values not the pending one
//   console.log(value)
//   //for now it will take 4s when all the promise gets fulfilled but if you even put await to all the individual promises then it will take total of 9s sec bcuz it will execute one after another

//   //and also if we don't put the await to Promise.all promise then the rest of the code like console.log() will not wait and return the pending promise

//   // is like not using .then() and directly consoling the promise 
// }
// overAll()


//e.g
const getAllUsers = async () => {
  try {

    const res = await fetch('https://api.jikan.moe/v4/seasons/2005/spring?sfw')
    //fetch will return an promise fulfilled one (either resolved or rejected) with respective value
    // hence we have to assign await to wait before moving forward (let it produce then consume)

    const data = await res.json() //it also returns an promise, which means it will take time and we need to assign await to it or else the further code will execute directly without any value, like how we used to return a promise inside the .then() and then only further .then() will execute

    console.log(data)

  } catch (error) {
    console.log(error)
  }
}

getAllUsers()

// .json()
// It returns a promise which resolves with the result of parsing the body text as JSON
//Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object






