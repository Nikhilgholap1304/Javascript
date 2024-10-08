let items = [10,20,30,40]

//for loop
// for(let i = 0; i < items.length; i++){
//   console.log(items[i])
// }

//foreach loop
// items.forEach((item, i, items)=>{ //takes upto 3 parameters - 1)item 2)index 3)whole array
// console.log(item, i, items)
// });

//it executes the callback function one time for each element and does the operation

// 10 0 [ 10, 20, 30, 40 ]
// 20 1 [ 10, 20, 30, 40 ]
// 30 2 [ 10, 20, 30, 40 ]
// 40 3 [ 10, 20, 30, 40 ]

// for(i in items){ //this i.e for in loop returns the keys of an object (array)
//   console.log(i)
// }

// const obj = {
//   a: 1,
//   b: 2
// } 
// for(ele of obj){ //TypeError: obj is not iterable
//   console.log(ele)
// }

// let chrs = "string"
// for([i,v] of Object.entries(chrs)){ //since array is also an object
//   console.log(i,v)
// }
// for([i,v] of Object.entries(items)){ //since array is also an object
//   console.log(i,v)
//   // console.log(typeof i) //string
// }

// op:-
// 0 10
// 1 20
// 2 30
// 3 40

// items.map((item, index, array)=>{
//   console.log(item, index, array)
// })

// 10 0 [ 10, 20, 30, 40 ]
// 20 1 [ 10, 20, 30, 40 ]
// 30 2 [ 10, 20, 30, 40 ]
// 40 3 [ 10, 20, 30, 40 ]
//but whats the variation btw forEach, forEach just loops through which cannot return anything however map returns the array in which same set of operations are done

// const newArr = items.map((item)=>{});
// console.log(newArr)

// [ undefined, undefined, undefined, undefined ]
//since its returning void implicitly


// const newArr = items.map((item)=>{
//   return item+1
// });

// console.log(newArr)
// [ 11, 21, 31, 41 ] after adding one to using callback back for each element

//manual map function

// class Arr{ //userdefined datatype or user defined arr and the map funntion
//   constructor(...elements){ //or (elements) if its directly an array
//     this.elements = elements
//   }
//   map(callback){
//     this.newArr = []
//     for(let ele of this.elements){
//       // console.log("working", ele)
//       this.newArr.push(callback(ele))
//     }
//     return this.newArr
//   }
// }

// const obj1 = new Arr(10,20,30,40)

// const newEle = obj1.map((ele)=>{
//   return ele+1
// })
// console.log(newEle) //[ 11, 21, 31, 41 ]

const [...packing] = [10,20,30]
const [a,b,c] = packing //or [...packing]`
console.log(packing)
console.log(a,b,c)











