console.log("logging message in console window")

console.error("displaying error message")

console.assert(2 > 3, "Its an asertion error message") //Assertion failed: Its an asertion error message
//if condition gets false

console.warn("Its an warning")

console.table({ a: 1, b: 2, c: 3 })

// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    a    │   1    │
// │    b    │   2    │
// │    c    │   3    │
// └─────────┴────────┘

let store = () => {
  console.log("Statement")
}
console.time(store())
console.timeEnd(store())



// Statement
// Statement
// default: 0.349ms



