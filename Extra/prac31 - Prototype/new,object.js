// Prototype

// String, Array, Function

// The prototype of string, array and function is object and the prototype of object is null

// function demo(n){
//   return n
// }

// surprise, we can also treat function as an object
// what inheritance does is we can use all the behaviour of functions as well as we can use the member/methods/functionalities of objects as well cuz the prototype of function is also an object

// demo.name = "nikhil"
// console.log(demo(1))
// //1

// console.log(demo.name)
// //demo

// console.log(demo.prototype)
// //{}

// console.log(demo.constructor)
//[Function: Function]


function createUser(username, score){
  this.username = username
  this.score = score
  return this
}

createUser.prototype.increment = function(){
  this.score++
}

createUser.prototype.printMe = function(){
  console.log(this.username)
}

// const gojo = createUser("gojo", 20)
// const yami = createUser("yami", 30)
// console.log(gojo, yami)

const gojo = new createUser("gojo", 20)
const yami = new createUser("yami", 30)
// console.log(gojo.prototype.printMe())
//error

console.log(gojo.printMe())
console.log(yami)
// createUser { username: 'gojo', score: 20 }
// createUser { username: 'yami', score: 30 }

//if you don't use "new" then "this" keyword will refer to an global object which has rest of the common details, not the specific one and will override the previous values 

// gojo.printMe()
//TypeError: gojo.printMe is not a function
//if we try to access the prototypes method without using "new" keyword
//but 

// createUser.prototype.printMe = function(){
//   console.log("yoo")
// }
// createUser.prototype.printMe()
// if we try to call that newly added printMe method through its object/function itself then it works

//so new objects can be created with a constructor function, like new createUser(). and then only you can access that property/method added through function

// If createUser.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.

//JavaScript had prototypal inheritance from the beginning. It was one of the core features of the language

// Please note that createUser.prototype here means a regular property named "prototype" on createUser. It sounds something similar to the term “prototype”, but here we really mean a regular property with this name



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/  