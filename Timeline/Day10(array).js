// !Homogenous array :

var ar = [10, 20, 30, 40, 50];

// !Heterogenous array :

const v = [null, 200, 14335n, true, "js", ["react", "node"], (e) => e];
console.log(v.length)
console.log(v[3]);
console.log(v[5][0]);
console.log(v[6]("arrow function"));
console.log(v[7]); //arraow function

v[7] = "java";
v[3] = false;

v[10] = undefined
// console.log(v[8])

delete v[3];
console.log(v)

// 3 ways to create an array
//!literal way:

let arr = [10, 20, 50, false, null];
console.log(arr.length);
console.log(typeof arr);

//!using Array constructor:

let a = new Array(10); //if only one arg is there then it will consider length else elements
console.log(a);

let b = new Array('str', true, 389n, [10, 20]);
console.log(b)

//!Array.of();

let newAr = Array.of("10", 20, 2n, (e) => e);
console.log(newAr);

let newAr2 = Array.of(10);
console.log(newAr); //[10]

let num = 10;
var obj = { name: "nikhil" }

console.log(Array.isArray(num));
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));
console.log(typeof obj);
console.log(typeof arr);

