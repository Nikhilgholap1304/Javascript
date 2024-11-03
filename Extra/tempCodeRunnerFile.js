// Prototype

// String, Array, Function

// The prototype of string, array and function is object and the prototype of object is null

function demo(n){
  return n
}

// surprise, we can also treat function as an object
// what inheritance does is we can use all the behaviour of functions as well as we can use the member/methods/functionalities of objects as well cuz the prototype of function is also an object

demo.name = "nikhil"
console.log(demo(1))
//1

console.log(demo.name)
//demo

console.log(demo.prototype)
//{}

console.log(demo.constructor)