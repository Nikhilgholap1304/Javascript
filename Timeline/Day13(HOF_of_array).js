let ar = [10,30,50,70,100,68,96];
//Higher order array methods

//! find:
// let fn = (v, i, a) => {
//   // console.log(v)
//   // console.log(i)
//   // console.log(a);
//   return v > 120;
// }

// let r1 = ar.find(fn)
// console.log(r1);

//! findIndex:
// let r2 = ar.findIndex(function(m,i,a){
//   // console.log(m);
//   return m > 120; // -1 since the condition has not been satisfied
// });

// console.log(r2);

//! filter:

// let r3 = ar.filter((m,i,a)=>{
//   return m >55;
// })

// console.log(r3)
// console.log(ar)


// //! map:
// let r4 = ar.map((m,i,a)=>{
//   return m + 10;
// })

// console.log(r4)
// console.log(ar)

// //! some(): //if even one element satisfies the condition then it will stop right there and returns true at the end otherwise it returns false... at the end
// let r5 = ar.some((m,i,a)=>{
//   return a > 600
// })
// console.log(r5)

// //! every(): //if every element satisfies the condition then it returns true at the end as well otherwise if it come across even one false value it stops and returns false at the end
let r6 = ar.every((m,i,a)=>{
  return a > 4;
})
console.log(r6);