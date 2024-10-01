const prompt = require("prompt-sync")();
function f1(x="default",y="default") {
  var a = 100;
  const b = 200;
  let c = 300;
  console.log(a,b,c);
  console.log(x);
  console.log(y);
  return 1000,2000,3000;
  console.log("end")//will not execute
}

let r1 = f1(20,30);
console.log(r1)
// console.log(a) uncaught reference error: a is not defined

// f1()

function f2() {
  console.log("named function")
  // return;
}

let r2 = f2();
console.log(r2) //will return undefined cuz of void return (implicit)


// JS Output methods

// console.log("Hello World");
// document.write("Hello world")

// document.writeln("Hello world")
// document.writeln("Hello world")

// alert("alert popup method");

// let confirmMessage = confirm("Are you 18+");
// console.log(confirmMessage)

let age = prompt("Enter your age");
let parseInt = parseInt(age);
console.log(parseAge);
console.log(age)
console.log(typeof age)
