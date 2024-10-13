// "use strict";
// a = [1, 2, 4, 5]
// console.log(typeof String(a[0]))
// console.log(Number(a))

// b = { a: 10, b: 20 }
// console.log(b['a'])

// typeof datatype

// f = () => {
//   console.log('Hii')
// }
// console.log(typeof f)
// console.log(Number(f))
// console.log(String(b))
// console.log(Boolean(f))

// arr = [1,2,3]
// console.log(typeof arr)

// console.assert(3>2, 'Assertion error')

// div = 1 / 0; // Infinity
// console.log(div)

// console.log("not a number" / 2)
// console.log( "not a number" / 2 - 1 ); // NaN

// console.log(1 + "2") //12
// console.log("1" + 2) //12
// console.log("1" + "2")
// console.log("1" + 2 + 3) //123
// console.log(1 + 2 + "3")

// console.log("hii")
// setTimeout(() => {
//   console.log("timeout")
// },0);
// console.log("bye")

if (8 == '8') { //true that they are equal
  console.log("They are equal")
}
if (!(8 === '8')) { //true that they are not equal //strict checking
  console.log("Now they are not equal")
}

if (8 == '8') console.log("They are equal"); //implicit scope

if (8 == '8') console.log("They are equal"), console.log("This is another statement"); //to execute multiple statements in terms of implicit scope 

// They are equal
// This is another statement



