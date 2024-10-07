let items = [10,20,30,40]

//for loop
for(let i = 0; i < items.length; i++){
  console.log(items[i])
}

//foreach loop
items.forEach((item, i, items)=>{ //1)item 2)index 3)whole array
console.log(item, i, items)
})
//it executes the callback function one time for each element and does the operation

// 10 0 [ 10, 20, 30, 40 ]
// 20 1 [ 10, 20, 30, 40 ]
// 30 2 [ 10, 20, 30, 40 ]
// 40 3 [ 10, 20, 30, 40 ]

