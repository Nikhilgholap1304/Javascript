// Singleton object
// const obj = new Object()
// console.log(obj) //{}

// Non-singleton object
// const obj = {}
// console.log(obj) //{}

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
// const obj3 = {obj1,obj2}
// console.log(obj3) 
// { 
// obj1: 
//     { a: 1, b: 2 },
// obj2: 
//     { c: 3, d: 4 },
// }


// console.log({...obj1, ...obj2}) //{ a: 1, b: 2, c: 3, d: 4 }
const obj4 = { e: 5, f: 6 }

const obj5 = Object.assign(obj1, obj2, obj4)
// const obj5 = Object.assign({} ,obj1, obj2, obj4) empty object wasn't madatory 
//first argument is gonna be target where all objects would get added

console.log(obj5) //{ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }


// Typical format to store data
const Users = [
  {
    id: 0,
    email: "nikhilgholap@gmail.com",
    password: 1234
  },
  {
    id: 1,
    email: "nikhilgholap@gmail.com",
    password: 1234
  },
  {
    id: 2,
    email: "nikhilgholap@gmail.com",
    password: 1234
  },
  {
    id: 3,
    email: "nikhilgholap@gmail.com",
    password: 1234
  }
]

console.log(Users[0].email)
console.log(Object.keys(obj5))
console.log(Object.values(obj5))
// console.log(Object.entries(obj5))

console.log(Object.hasOwn(obj5, 'a')) //true 
//its returns boolean value based on if property is present or not
console.log(Object.hasOwn(obj5, 'z')) //false



//? Destructuring of object
// const {val1, val2} = { a: 5, b: 6 } //It won't work since its not matching the keys
// console.log(val1, val2) //undefined undefined

const { a, b } = { a: 5, b: 6 }
console.log(a,b)

const { a:name1, b:name2 } = { a: 5, b: 6 } //also you can name it differently
console.log(name1,name2)




