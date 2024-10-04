//anonymous functions

// !named function:
function demo() {
  console.log("named functions")
  return 100;
}
demo();

//!function with expression

let x = function () {
  console.log("function with expression");
  return "FILE"
};

// or

// let x = function name() {
//   console.log("function with expression");
//   return "FILE"
// };

//name(); Error
console.log(x());

//!arrow function

let ar = () => { //fat arrow
  console.log("Arror function")
  return "str";
};
//ar()

const arr = a => console.log("arr fn 2", a) //if you have one parameter
// arr(10)

const arr1 = () => 100;
console.log(arr());

const arr2 = function () {
  return 100;
}

  //!IIFE - immediately invoked function

  ((a, b) => {
    console.log("IIFE")
    console.log(a, b)
  })(a, b)

//!HOF

const HOF = (a, b) => {
  console.log("Higher order function")
  console.log(a("callback function"));
}

HOF((x) => x, 20); //!callback function