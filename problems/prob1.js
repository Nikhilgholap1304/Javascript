//to find the closest number of n number from a set without using loop
const prompt = require("prompt-sync")();

// let set = [5, 2, 7, 4, 1, 9]
let set = [23, 68, 17, 57, 18, 72]
// const n = parseInt(prompt(`Enter the index position to pick from ${set} - `))
const n = 57
//its by default in the string therefore converting into the integer

// console.log(set.includes(n))
if (!set.includes(n)) {
  throw new Error("Number is not present");
}

const getClosest = (nValue, set) => {
  let closestVal;

  set.sort((a, b) => a - b);
  console.log(set)

  const nIndex = set.indexOf(nValue)
  console.log(nIndex)

  if (set[nIndex + 1] > set[nIndex - 1]) {
    closestVal = set[nIndex + 1]
  } else if (!set[nIndex - 1]) {
    console.log("getting")
    closestVal = set[nIndex + 1]
  } else if (!set[nIndex + 1]) {
    closestVal = set[nIndex - 1]
  } else {
    closestVal = set[nIndex + 1]
  }

  return closestVal
}


console.log(getClosest(68, set))

