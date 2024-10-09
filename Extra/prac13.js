// Singleton object
// const obj = new Object()
// console.log(obj) //{}

// Non-singleton object
// const obj = {}
// console.log(obj) //{}

const obj1 = {a:1,b:2}
const obj2 = {c:3, d:4}
const obj3 = {obj1,obj2}
console.log(obj3) 
// { 
  // obj1: 
  //     { a: 1, b: 2 },
  // obj2: 
  //     { c: 3, d: 4 },
// }


console.log({...obj1, ...obj2}) //{ a: 1, b: 2, c: 3, d: 4 }