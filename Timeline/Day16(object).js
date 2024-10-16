let s = "Hello ";
let p = "world ";
let q = "welcome";
let r = "REACT";

console.log(s.concat(s,p))

let str1 = "           welcome all!!!!         ";
// let str1 = "before           welcome all!!!!         after";
//exception is that it will remove the space from very start and end, but if there's an string encapsulating around then it will not
console.log(str1)
console.log(str1.trim())
//Removes the leading and trailing white space

console.log(str1.trimStart())
console.log(str1.trimEnd())