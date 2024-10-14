//!forEach:

let ar = [20,10,40,30,100,10];

//ar.forEach(function(val, i, ar)){
  // console.log(val)
  // console.log(i)
  // console.log(ar)
// }

//reduce
let r1 = ar.reduce((accumulator, cv) => accumulator+cv,2000 ) //last argument is initial accumulator (optional)

// console.log(r1);

//reduceRight
let r2 = ar.reduceRight((acc,cv) => acc+cv, 10)
console.log(r2);

let str = "Javascript";

let r3 = str.split("")
r3.reverse();

let joinedAr = r3.join("");
console.log(joinedAr);

let r4 = str.split("").reverse().join("");
console.log(r4)

let r5 = str.split("").reduceRight((acc, cv)=>acc+cv, ""); //tpircsavaJ
console.log(r5)

//normal methods

let arr = [10,20,30,40,50,60,20,30,45,40]; //single dimentional array

arr.fill("str", 2, 4);
console.log(arr)

console.log(arr.indexOf(30));
console.log(arr.indexOf(20,2));

console.log(arr.lastIndexOf(30));
console.log(arr.lastIndexOf(40,7));

let ar1 = [10, ["p", "q", [100,200, ["Java"]], "js"], 30, 40] //multidimentional array

console.log(ar1.flat())
console.log(ar1.flat(1))
console.log(ar1.flat(2))
console.log(ar1.flat(3))
console.log(ar1.flat(Infinity))


