"use strict";
// console.log(this)
// console.log(this===window)

//! window object if not using "use strict"
//! otherwise undefined

function demo() {
  console.log(this);
}
demo()

let f1 = function () {
  console.log(this);
};
f1()

//!parent scope this keyword value:

console.log(this)
//see you are able to access the this/window in global hence....
let ar = () => {
  console.log("this of arrow", this);
};
ar();

//the above this is accessing the "this" value from parent scope which is global.

function f2() {
  console.log(this);
  let arr2 = () => {
    console.log(this)
  };
  arr2();
}
f2()

//! current creating object:
class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    console.log(this)
  }
}

let e1 = new Employee("xyz", 500);
let e2 = new Employee("abc", 68);

let o = {
  name: "sachin",
  f1: function () {
    console.log(this);
  },
  demo() {
    console.log(this);
    console.log(this.name)
  },
  ar: () => {
    console.log("this inside the arrow",this)
  },
};

//o.f1();
o.demo();
o.ar();