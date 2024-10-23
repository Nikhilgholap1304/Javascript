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

if (8 == '8') { //true that they are equal
  console.log("They are equal")
}
if (!(8 === '8')) { //true that they are not equal //strict checking
  console.log("Now they are not equal")
}

if (8 == '8') console.log("They are equal"); //implicit scope

if (8 == '8') console.log("They are equal"), console.log("This is another statement");

// They are equal
// This is another statement

var number = 3;

//switch case ---- Decisional Statement
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

//IMP

// Several variants of case which share the same code can be grouped.
// For example, if we want the same code to run for case 3 and case 5:

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

//Ternary Operator

console.log(2 > 3 ? "true" : "false")

// Examples for loops

let ar = [10, 20, 30, 40, 50, 60, 11, 24, 27]
//let newAr = []

//for (let val of ar){
// if(val>25){
//  newAr.push(val)
//  }
// }

console.log(newAr)

let firstEle;
for (v of ar) {
  if (v > 25) {
    firstEle = v;
    break; //to satisfy first condition
  }
}

console.log(firstEle)
