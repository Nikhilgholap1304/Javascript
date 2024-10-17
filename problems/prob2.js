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

//lowest to highest
let arr = [34, 66, 2, 79, 54, 100, 224]
// console.log(arr.sort((a, b) => a - b)) //lowest to highest

const getLowToHighest = (arr) => { //bubble sort
  let newArr = [...arr]  // Create a copy of the array
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(newArr[j]>newArr[j+1]){
        let temp = newArr[j]
        newArr[j] = newArr[j+1]
        newArr[j+1] = temp
      }
    }
  }  
  return newArr;
}
console.log(getLowToHighest(arr))





