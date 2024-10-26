// let o1 = {
//   name: "virat",
//   id: 23,
//   skills: ["batsman", "right arm quick bowler"],
//   address: {
//     location: "london",
//     doorNo: 80,
//   },
//   isMarried: true,
//   children: 2,
// };

//! shallow copy:

//! copying object reference:

// let c1 = o1
// console.log(c1 === o1);

//! using Object.assign():

// let copy2 = Object.assign({}, o1);
// o1.name = "Dhoni";
// o1.skills[0] = "Bowler";
// console.log(copy2)

// console.log(copy2 === o1);

// let c3 = {};

//! using for in loop
// for (let key in o1) {
//   c3[key] = o1[key];
// }

// console.log(c3 === o1);
// o1.name="Dhoni";
// o1.skills[0] = "Bowler"
// o1.address.location = "Thane"
// console.log(c3)

//! using spread operator

// let c4 = {...o1};
// o1.name="Dhoni";
// o1.skills[0] = "Bowler"
// o1.address.location = "Thane"
// console.log(c4)



