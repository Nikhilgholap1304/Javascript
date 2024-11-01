// Async and Await

// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

// For instance, this function returns a resolved promise with the result/value of 1; let’s test it:
async function f() {
  return 1
}

// console.log(f())
//Promise { 1 }
//All the way till now despite doing many projects you have been having no idea about this, how lame it seems isn't that right

f().then((value) => {
  console.log(value)
})
//1

// …We could also explicitly return a promise, which would be the same:

const f1 = async () => {
  return Promise.resolve(1)
}
f1().then((value)=>{
  console.log(value)
})
//1

const f2 = async () => {
  return Promise.reject("Its an error")
}
f2().then((value)=>{
  console.log(value)
}).catch((error)=>{
  console.log(error)
})
//Its an error