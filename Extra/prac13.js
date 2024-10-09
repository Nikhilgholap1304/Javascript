// Singleton object
// const obj = new Object()
// console.log(obj) //{}

// Non-singleton object
// const obj = {}
// console.log(obj) //{}

const obj1 = {a:1,b:2}
const obj2 = {c:3, d:4}
// const obj3 = {obj1,obj2}
// console.log(obj3) 
// { 
  // obj1: 
  //     { a: 1, b: 2 },
  // obj2: 
  //     { c: 3, d: 4 },
// }


// console.log({...obj1, ...obj2}) //{ a: 1, b: 2, c: 3, d: 4 }
const obj4 = {e:5,f:6}

const obj5 = Object.assign(obj1, obj2, obj4)
console.log(obj5) //{ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }