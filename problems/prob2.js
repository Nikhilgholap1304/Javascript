//to print even numbers
// for(let i = 0; i <= 10; i++){
//   if(i%2==0) console.log(i);
// }

//to print tables
// for(let i = 1; i <= 10; i++ ){
//   for(let j = 1; j <= 10; j++){
//     console.log(`${i} * ${j} = ${i*j}`)
//   }
// }

//find sum of numbers in an array
// let nums = [10,20,30,40,93.6,-100]
// let sum = 0;
// for(let num of nums){
//   sum+=num
// }
// console.log(sum)


//function to reverse an array
// const getRevArr = (arr) => {
//   // console.log(arr.reverse())
//   let revArr = []
//   for (let ele of arr) { //again as a reminder you cannot modify org array while looping it 
//     revArr.unshift(ele)
//   }
//   return revArr
// }
// let arr = ['hii', 8, true, { name: 'nikhil' }, 90.6]
// console.log(getRevArr(arr)) //[ 90.6, { name: 'nikhil' }, true, 8, 'hii' ]

let arr = [34, 66, 2, 79, 54, 100, 224]
// console.log(arr.sort((a, b) => a - b)) //lowest to highest

const getLowToHighest = (arr) => {
  let newArr = []
  let tempEle;
  for(let ele1 of arr){
    for(let ele2 of arr){
      if(ele1>ele2){
        tempEle = ele2
      } else if(ele1<ele2){
        tempEle = ele1
      }
    }
    newArr.push(tempEle)
  }
  return newArr
}
console.log(getLowToHighest(arr))





