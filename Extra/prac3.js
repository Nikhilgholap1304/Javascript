let string = "IAmString"
console.log(string[10]) //not throws an error instead it will return undefined

let arr = [0, 1, 2, 3]
console.log(arr[4]) //same

let obj = {
  name1: 'nikhil',
  name2: 'ayush',
  name3: 'aditya'
}
// console.log(obj['name10']) again here also undefined bcuz name10 key not found

// console.log(obj.name5) same

console.log(Object.keys(obj)) //It returns the keys in an array form

console.log(Object.keys(obj)[10]) //undefined

console.log(Object.entries(obj)) //undefined

let [name1, name2, name3] = Object.entries(obj) //destructuring
console.log(name1, name2, name3)

let { n1, n2, n3 } = { n1: 1, n2: 3, n3: 5 } //key name should be the same
console.log(n1, n2, n3)

// let { a:n1, b:n2, c:n3 } = { a: 1, b: 3, c: 5 } reassigning the name/alias/keys

// const obj2 = { a: 1, b: 2 };
// const { a, b } = obj2;
// console.log(a,b)

let dupli = new String('Nikhil') //string is also internally an object
// 0: "N"
// 1: "i"
// 2: "k"
// 3: "h"
// 4: "i"
// 5: "l"
console.log(dupli)