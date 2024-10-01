let string = "IAmString"
console.log(string[10]) //not throws an error instead it will return undefined

let arr = [0, 1, 2, 3]
console.log("arr", arr[4]) //same
console.log("arr", arr[-1]) //negative indexing will not work

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

let dupli = new String('Nikhil') //string is also internally an object,well its an sstring contructor
// 0: "N"
// 1: "i"
// 2: "k"
// 3: "h"
// 4: "i"
// 5: "l"
console.log(dupli)

// let dupli = String('Nikhil') //its just converting into string

let sample1 = "Characters"
console.log(sample1.__proto__) //this is nothing but to get get the prototype of string in the form of objects
console.log(sample1.length)
console.log(sample1.toLowerCase()) //Original value will not change instead it will just return the copy of it
console.log(sample1)
console.log(sample1.charAt(0))
console.log(sample1.indexOf('h'))

console.log(sample1.substring(0, 4)) 
console.log(sample1.substring(-8, 4))//It will not take the negative values
console.log(sample1.slice(-1)) //slice function can take negative values
console.log(sample1.slice(-3,-1)) //but slice function must be in forward position or else it will return empty string if nothings there

let sample2 = "           $Characters$                              "
console.log(sample2)
console.log(sample2.trim()) //returns the string with removed space
console.log(sample2)
console.log(sample2.replace('$','-')) //it will only replace one character
console.log(sample2.includes('$')) //true

let sample3 = "Hii you happy go lucky"
console.log(sample3.split(' ')) //[ 'Hii', 'you', 'happy', 'go', 'lucky' ]

let sample4 = "Hii-you-happy-go-lucky"
console.log(sample4.split('-'))

let sample5 = "Hii-you-happy-go-lucky"
console.log(sample5.split('-', 3)) //with limiter, means only 3 items i.e [ 'Hii', 'you', 'happy' ]

console.log(sample5.concat('-yummy','-moreyummy')) //from 1 to multiple strings we can pass


