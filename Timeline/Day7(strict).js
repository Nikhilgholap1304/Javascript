// "use strict"


//a = 10; //! reference error: a is not defined
// var a = 10;
// console.log(a);


//! Uncaught syntaxerror: duplicate parameter name not allowed in this context
// function demo(a,b,b) {
//   console.log("start")
//   console.log(a+b) //30 if not for use strict
// }

// demo(10,20,30)

// Scopes :-

// 1) Global - var

// 2) Script - let, const

// 3) Local - func(){}

// 4) Block - {}, var - global, ...rest - block

var x = 100;
let y = 200;
const z = 300;

console.log(x, y, z)

function abc(s,e) {
  let x = 1000;
  var p = 900;
  const c = 3000;
  console.log(x)
  console.log(s,e)
  console.log(p+c);
}

abc("str1","str2");
// console.log(p); //error: p is not defined --- inside the function

let variable = "";
{
  var q = "javascript";
  let r = "java";
  const s = "React";
  console.log(q,r,s);
}
console.log(q);



