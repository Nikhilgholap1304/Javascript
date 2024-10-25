let o1 = {
  name: "virat",
  id: 18,
  skills: [
    "batsman", "bowler"
  ],
  address: {
    location: "london",
    doorNo: 80,
  },
  isMarried: true,
  children: 2,
};

// !shallow copy:
//! using object reference:

// let n = 100;
// let y = n;
// n = 200;
// console.log(y) 
// console.log(n)

let copy1 = n1;
o1.id = 5;
console.log(copy1)

// !deep copy

// !structuredClone():

let copyObj = structuredClone(o1);
o1.name = "nikhil";
b1.address.location = "delhi";
console.log(copyObj);


// !stringify and parse:

let copyObj1 = JSON.parse(JSON.stringify(o1));

o1.name = "nikhil";
o1.address.location = "delhi";
console.log(copyObj1);