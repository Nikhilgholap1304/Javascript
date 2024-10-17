//to find the closest number of n number from a set without using loop

const prompt = require("prompt-sync")();

// let set = [5, 2, 7, 4, 1, 9]
//its by default in the string therefore converting into the integer

// console.log(set.includes(nValue))

const getClosest = (nValue, set) => {
  
  let closestVal;
  
  if (!set.includes(nValue)) {
    throw new Error("Number is not present");
  }
  
  set.sort((a, b) => a - b);
  console.log(set)
  
  const nIndex = set.indexOf(nValue)
  console.log(nIndex)
  
  // if (set[nIndex + 1] > set[nIndex - 1]) {
  //   closestVal = set[nIndex + 1]
  // } else if (!set[nIndex - 1]) {
  //   closestVal = set[nIndex + 1]
  // } else if (!set[nIndex + 1]) {
  //   closestVal = set[nIndex - 1]
  // } else {
  //   closestVal = set[nIndex + 1]
  // } //thats why only next position had been getting selected

  if(set[nIndex]-set[nIndex-1] < set[nIndex+1] - set[nIndex]){ //[17,18,23].... 17 is most closer to 18
    closestVal = set[nIndex-1]
  } else {
    closestVal = set[nIndex+1]
  }
  
  return closestVal
}


let set = [23, 68, 17, 57, 18, 72]
// const nValue = parseInt(prompt(`Enter the index position to pick from ${set} - `))
const nValue = 18

console.log(getClosest(nValue, set))

