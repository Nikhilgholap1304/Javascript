"use strict";
// console.log(this)
// console.log(this===window)

//! window object if not using "use strict"
//! otherwise undefined (except arrow function)

function demo() {
  console.log(this);
  //undefined if using strict syntax
}
demo()

let f1 = function () {
  console.log(this);
  //undefined if using strict syntax
};
f1()

//!parent scope this keyword value:

console.log(this)
//see you are able to access the this/window in global despite using strict mode hence....
let ar = () => {
  console.log("this of arrow", this);
};
ar();
//the above this is accessing the "this" value from parent scope which is global.

function f2() {
  console.log(this);
  //undefined
  //bcuz you have used the "this" which can't be accessed inside named function while using the strict mode 
  let arr2 = () => {
    console.log(this)
    //undefined
    //now when it comes to arrow function, the "this" here can only refer to "this" value of parent scope which if it gets undefined (strict mode) then so it will otherwise like window object (without strict mode) then also so it will consider same
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