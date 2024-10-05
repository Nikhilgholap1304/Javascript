// nested function

var b = 1000;
function f1() {  
  let b = 200;
  console.log("outer");
  const nested = function () { //closure will get created as soon as inner function tries to access th variable of outer function 
    // const b = 5000;
    console.log("nested function")
    console.log(b);
  }
  nested();
  return b;
}

f1();

// !variable hoisting:
console.log(a);
console.log(c); //uncaught referenceError: Cannot access 'c' before initialization

var a = 10;
const c = 30;
let d = 40;

console.log(a ,c , d);

// !function hoisting: it will only work for named function, since if 

demo();

function demo() {
  let d = 100;
  console.log("demo function")
  return d
}

//x();//x is not a function error

var x = function(){
  console.log("function with expression")
}

// Window object

console.log(window);
console.log(this);
console.log(window === this);

window.alert("alert message");
window.prompt("Enter age");
window.confirm("Are you sure? You want to visit this page");

var a = 100;
let b = 200;

function f1() {
  var a = 20;
  console.log(a)
  console.log(this.a);
  console.log(window.a);
}
f1();



