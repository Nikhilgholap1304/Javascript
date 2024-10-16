//to find the closest number of n number from a set without using loop
const prompt = require("prompt-sync")();

let set = [5, 2, 7, 4, 1, 9]
// const n = parseInt(prompt(`Enter the index position to pick from ${set} - `))
const n = 4
//its by default in the string therefore converting into the integer

// console.log(set.includes(n))
if (!set.includes(n)) {
  throw new Error("Number is not present");
}

set.sort((a, b) => a - b)
console.log(set)

const Nindex = set.indexOf(n)
console.log(Nindex)

const closestVal = set[Nindex+1] > set[Nindex-1] ? set[Nindex+1] : set[Nindex-1]
console.log(closestVal)

