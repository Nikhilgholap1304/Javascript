const scores = [23, 5, 79, 10, 14]

// const newScores = scores.filter((item) => {
//   // if(item<15)
//   //   return true
//   return item < 15;
// })

// console.log(newScores) //[ 5, 10, 14 ]

const newScores2 = scores.reduce((preValue, curValue, curIndex)=>{
  console.log(curIndex)
  return preValue+curValue
})
console.log(newScores2) //131