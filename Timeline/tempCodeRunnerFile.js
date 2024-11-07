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
  // arr,
]);
console.log(s.values()[0])