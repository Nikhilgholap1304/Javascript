const scores = [23, 5, 79, 10, 14]

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
      for(let ele of this.elements){
        // console.log("working", ele)
        this.newArr.push(callback(ele))
      }
      return newArr
    }
    reduce(callback){
      
    }
  }

const arr1 = new Arr(10,20,30,40,50)

console.log(arr1)