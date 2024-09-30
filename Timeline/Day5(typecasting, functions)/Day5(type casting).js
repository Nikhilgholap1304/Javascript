// ! Inplicit typecasting

console.log(10+"10");
// number is converted into string

console.log(100-"10");
// string converted into number

console.log(100-"str");

console.log("10"*"10");

console.log("100"/10);

console.log(105%"10");


// Explicit casting

let num = "20.9873";
let x = parseInt(num)
console.log(x)

console.log(parseFloat(num))

let str1 = "javascript";
let z = parseInt(str1);
console.log(z)

let n1 = 2000;
let s1 = n1.toString();
console.log(typeof n1)
console.log(typeof s1)



