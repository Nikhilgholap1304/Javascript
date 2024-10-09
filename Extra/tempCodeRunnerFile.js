onst newArr2 = arr1.reduce((prevVal, currVal, currIndex, arr)=>{ //user-defined reduce function
  // console.log(currIndex, arr)
  return prevVal*currVal
})