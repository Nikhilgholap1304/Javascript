// !Set Object:

// let arr = ["arr", "str"];

console.log(new Set())
var s = new Set([
  10,
  "str",
  1n,
  false,
  false,
  10,
  { name: "abc" },
  [10, 20],
  [10, 20],
  10,
  { name: "abc" },
  arr,
]);

//! how can we add values into set:

//s.add(10);
//s.add("str");
//s.add({name: "abc"});
//s.add(1n);
//s.add(false);
//s.add("str");
//s.add({name: "abc"});
s.delete(10);

s.delete(arr);
// console.log(s.has([10, 20]));
// console.log(s.has(arr));
// console.log(s.size);

//s.clear();
// console.log(s);

// let a = [10, 20, 10, 20, 20, 10, "str", 10n, "str"]
// let s2 = new Set(a);
// console.log([...s2]);
// console.log(Array.from(s2));


// Map Object

let a = [10, 20]

let m = new Map([
  [10, "number datatype"],
  [false, "boolean datatype"],
  [() => "arr", "string datatype"],
  ["string", "string datatype"],
  [10n, "bigInt"],
  [[10, 20], "array datatype"],
  [a, 20],
])

// m.set(10, "number datatype");
// m.set(false, "boolean datatype");
// m.set(() => "arr", "arrow function");
// m.set(false, "bool");
// m.set(() => "arr", "arrow function 2")
// m.set([10, 20], "arr")
// m.set([10, 20], "array datatype");

// console.log(m.get(a));
// console.log(m.get([10, 20]));

// console.log(m.delete("string"));
// console.log(m.delete(a));

// //m.clear();
// console.log(m.has(false))

console.log(m);

// console.log(m.size);