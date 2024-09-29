// Comment out
"UnComment"
// var a = 45;
// var a = "p"
let b = "nikhil";
const author = "nikhil"
author = 5 // Throws an error because constant cannot be changed
b = 4
const nikhil = 0;
let c = null
let d = undefined  
{
  // block scoped
  let b = 'this'
  console.log(b)
  // here new b would be only accesed under this block scope and if we create new it will not interfere with the outer one 
  // But if we same try to do with var then we are pretty much modifying the previous one also (redeclaring)
  const author = "nikhil"
}
console.log(b)
