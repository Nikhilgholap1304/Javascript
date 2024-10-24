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
    console.log("this inside the arrow", this)
    //getting refered to window bcuz of parent scope (global one)
  },
};

//o.f1();
o.demo();
o.ar();

// ------------------------------- Amazing extra facts of "this" --------------------------------------------

// let obj = {
//   name: "nikhil",
//   age: 20,
//   func: function() {
//     console.log(this)
//     //here this will refer to the current object
//   }
// }
// obj.func()

let obj = {
  name: "nikhil",
  age: 20,
  func1: function () {
    console.log(this)
    //here this will refer to the current object
  },
  func2: function () {
    const that = this
    function inner1() {
      //console.log(this)
      //undefined -------------------------
      console.log(that)
      //obj
    }
    let inner2 = () => {
      console.log(this)
      //obj
    }
    inner1()
    inner2()
  }
}
obj.func1()
obj.func2()

//as you can see above that 
//1) here inside the single function (func1) "this" will refer to current object 
//2) In func2, nested func (inner1) won't be able to directly access the current object and its properties
//3) for rectifying the above one we need to do the following

  // func2: function () {
  //   const that = this 
  //   function inner1() {
  //     console.log(this)
  //     //obj
  //   }
  //   inner1()
  // }

//4) as soon as we use arrow function (inner2) and use "this" inside, it will refer to the parent scopes this i.e the "this" of func2 which is obj
