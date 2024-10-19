// //!rest parameter and spread operator:

// //~A rest parameter must be last in a parameter list.

// const demo = (a, b, ...c) => {
//   console.log(a, b)
//   console.log("start")
//   console.log(c)
// }

// demo(10, 20, 30, 40, 50, 60);


// let str = "Javascript";
// let ar = [10, 20, 30, 40]
// console.log(...str);
// console.log(...ar);

// console.log([ ...str ])
// console.log({ ...str }) //str to object

// let x = [10, 20]
// let y = [30, 40]
// let z = [50, 60]

// console.log([...x, ...y, ...z])

const arr = [10, 20, 30, 40, 50, 60, 70];
const [x,y,...z] = arr;

console.log(x)
console.log(y)
console.log(...z)

let obj = {
  name:"Nikhil",
  id: 200,
  skills: ["js", "react"],
  percentage: 86,
  isMarried: false,
  ad: {
    pinCode: 400086,
    location: "Ghatkoper",
  }
}

//!Uncaught TypeError: Spread syntax requires ...i

// console.log(...obj);

let id = 3000

let {name, fn, id: eId, ad, ...rest} = obj;
// let {name, fn, id: eId, ad:{pinCode, location}, ...rest} = obj;
// let {pinCode, location} = ad
console.log(name)
console.log(fn)
console.log(eId)
console.log(ad)

console.log(rest)
// { skills: [ 'js', 'react' ], percentage: 86, isMarried: false }




