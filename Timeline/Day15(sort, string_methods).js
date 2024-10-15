let arr = [10, 20, 30, 40, 10, 80, 68];

let r1 = arr.includes("20")
console.log(r1) //false

let fruits = ["banana", "Mango", "Orange", "grapes", "watermelon", "papaya"];

fruits.sort();
console.log(fruits) //accor to ascii value

let numAr = [2, 100, 20, 250, 1000, 5]
console.log(numAr.sort()) //[ 100, 1000, 2, 20, 250, 5 ] based on ascii value

// positive -> b sorts over a
// negative -> a sorts over b
// zero -> keeps as it is

// numAr.sort((a,b) => {
//   return a - b //for ascending, it will swap if the return values is positive to sort in ascending
// });
// console.log(numAr) //[ 2, 5, 20, 100, 250, 1000 ]

// numAr.sort((a,b) => {
//   return b - a //for descending, it will swap if the return value is positive to sort in descending
// });
// console.log(numAr) //[ 2, 5, 20, 100, 250, 1000 ]

numAr.sort((x, y) => {
  if (x < y) return -1
  else if (y < x) return -1;
  return 0;
})

console.log(numAr) //[ 2, 5, 20, 100, 250, 1000 ]


//String methods

let s = "Java script"

console.log(s.slice(2, 6));
console.log(s.slice(-4, -1));

console.log(s.substring(1, 4));
console.log(s.substring(-4, -1)); //returns ""

console.log(s.substr(1, 3)) //start, length

console.log(s.length)
console.log(s[9]);

let v = [10, 20];

console.log(s.charAt(1));
console.log(s.charAt(10));

console.log(s.charCodeAt(1));
console.log(s.charCodeAt(4));

let str = "This is javascript lecture and you will learn java"
let r2 = str.replace("javascript", "java");

console.log(str);

console.log(r2);

let r3 = str.replaceAll("javascript", "java");
console.log(r3);

let str2 = "Hello World";
console.log(str2.includes(" "))
console.log(str2.includes("Hel", 5));

console.log(str2.indexOf("Ello")) //-1
console.log(str2.indexOf("ello"));

console.log(str2.lastIndexOf("l", 7)); //3
console.log(str2.lastIndexOf("d", 7)); //-1
