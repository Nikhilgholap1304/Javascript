const scores = [23, 5, 79, 10, 14]
scores.reduce(()=>{})

// const newScores = scores.filter((item) => {  
//   // if the condition returns true then that element will be included otherwise it won't
//   // if(item<15)
//   //   return true
//   return item < 15;
// })

// console.log(newScores) //[ 5, 10, 14 ]

// const newScores2 = scores.reduce((preValue, curValue, curIndex)=>{
//   console.log(curIndex)
//   return preValue+curValue
// })
// console.log(newScores2) //131

//trying to create the user defined reduce method as well

class Arr{
  constructor(...elements){
    this.elements = elements
    return this.elements
  }
  map(callback){
    let newArr = []
    for(let [i,ele] of Object.entries(this.elements)){
      this.newArr.push(callback(ele, i, this.elements ))
    }
    return newArr
  }
  filter(callback){
    let newArr = []
    for(let ele of this.elements){
      if(callback(ele, i, this.elements)){
        newArr.push(ele)
      }
    }
    return newArr
  }
  reduce(callback){
    let outcome = 0
    let e = this.elements
    for (let i in e){
      outcome += callback(e[i-1], e[i], i, e)
    }
    return outcome
  }
}


const arr1 = new Arr(10,20,30,40,50)

console.log(arr1)

// const newArr = arr1.map((item, index, array)=>{
//   // console.log(index, array)
//   return item+1
// })
// console.log(newArr) 

// const newArr2 = arr1.reduce((prevVal, currVal, currIndex, arr)=>{ //user-defined reduce function
//   // console.log(currIndex, arr)
//   return prevVal*currVal
// })

// console.log(newArr2)

// const newFilteredArr = arr1.filter((item, i)=>{
//   return item > 30
// })
// console.log(newFilteredArr)





