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


const f3 = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 2000)
  })

  let value = await promise
  console.log("hii")
  console.log(value) 
  // hii
  // 1
  // Here comes the surprise whatever code is after the await the same will also execute after getting the resolved promise and its result/value
}

f3()

