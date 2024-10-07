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

for(i in items){ //this i.e for in loop returns the keys of an object (array)
  console.log(i)
}

for(v of items){ //this i.e for of loop returns the values of an object (array)
  console.log(v)
}

for([i,v] of Object.entries(items)){ //siince array is also an object
  console.log(i,v)
}
// 0 10
// 1 20
// 2 30
// 3 40



