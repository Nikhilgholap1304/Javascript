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