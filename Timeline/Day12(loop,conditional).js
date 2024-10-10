//!Looping statements

// for (let j=0; j<5; i++){
//   console.log("hello world");
// }

// let i = 5

// while(i<5){
//   console.log("hello world");
//   i++
// }

// let k = 5;

// do {
//   console.log("Hello world");
//   k++;
// } while (k < 5);

// let s = "javascript"; //iterables since they have the positional arrangement of data
// let ar = [10, 20, 30, 40, 50]

for (let i = 0; i < s.length; i++) {
  console.log(s[i])
}

for (let index in s) {
  console.log(index);
}

for (let index in ar) {
  console.log(index);
}

for (let val of ar) {
  console.log(val)
}

for (let val of s) {
  console.log(val)
}


//!condtional statements;

//if else, else if
let num = 7
if (num > 9) {
  console.log("num is greater than 9");
} else if (num > 5) {
  console.log("num is greater than 5");
} else {
  console.log("num is less than 9");
}

var number = 3;

//switch case
switch (number) {
  case 1: {
    console.log("Number is 1");
    break;
  }
  case 2:
    {
      console.log("Number is 2")
      break;
    }
  case 3:
    {
      console.log("Number is 2")
      break;
    }
  default:
    {
      console.log("default value")
      break;
    }
}

//Ternary Operator

console.log(2 > 3 ? "true" : "false")

// Examples for loops

let ar = [10,20,30,40,50,60,11,24,27]
//let newAr = []

//for (let val of ar){
// if(val>25){
//  newAr.push(val)
//  }
// }

console.log(newAr)

let firstEle;
for (v of ar){
  if(v>25){
    firstEle = v;
    break; //to satisfy first condition
  }
}

console.log(firstEle)
