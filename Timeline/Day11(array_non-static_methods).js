// non static methods bcuz of using the object methods
// push,unshift,pop,shift

// let arr = [10,20,30,40,50];

// let r1 = arr.push(30,40,100,90);
// console.log(r1)

// let r2 = arr.unshift(1000,2000);
// console.log(arr); //9
// console.log(r2); //11

// let arr1 = new Array("str","js","java","python","node","ruby");
//arr.pop(); //ruby
// let r3 = arr1.pop(); //node
// arr1.pop(); //python
// console.log(arr1)
// console.log(r3)

// let r4 = arr1.shift(); 
// console.log(arr1)//str
// console.log(r4)

let ar = [20,30,40,50,60];
let r5 = ar.slice(1,5) //
console.log(r5);

console.log(ar.slice());
console.log(ar.slice(2,-1)) //[ 40, 50 ]

// ar.splice(1,2,"3","react");
ar.splice(3,0,"react","node"); //1) start 2) deletecount 3) elements to be added at that place/position
console.log(ar);

var x = [10,20]
const y = [50,60]
let z = [100,200];

let concatAr = x.concat(z,y);
console.log(concatAr)

concatAr.reverse(); //reverses the original array
console.log(concatAr)




