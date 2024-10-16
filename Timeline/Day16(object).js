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

console.log(s.toUpperCase());
//HELLO
console.log(r.toLowerCase());
//react

///Objects-------------------------------------------

//!Literal way:

const std = {
  name: "Naughty Atul",
  id: 68 + 1,
  skills: ["SQL"],
  isPartTimeEmployee: true,
  job: ["plumber", "electrician", "police"],
  id: 400,
  address: {
    pinCode: 400601,
    location: "JSpiders thane",
  },
};

console.log(std["skills"]);
console.log(std.skills);
console.log(std.address.location)
console.log(std.marks)
//undefined

std["percentage"] = 95
std.skills = ["JS", "REACT"];

delete std["id"];
delete std.job

console.log(std)
