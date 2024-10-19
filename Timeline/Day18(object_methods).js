// //!Object methods:

// const data = {
//   name: "Nikhil Gholap",
//   id: 100,
//   skills: ["Dance", "Singing", "Sleeping alone"],
//   address: {
//     doorNo: 90,
//     location: "Thane"
//   },
//   isMarried: false,
//   children: 2,
//   fan: "Jay Shetty",
//   fn: () => {
//     console.log("fn")
//   },
// };
// data.fn();

// //Object.freeze(data);
// //Object.seal(data); //It will only allow to update the values neither create nor delete

// data.id = 300;
// data.job = "Plumber";
// delete data.children;
// console.log(data)

// // console.log(Object.isFrozen(data));

// // console.log(Object.isSealed(data)) 

// let k = Object.keys(data)
// console.log(k)

// let v = Object.values(data)
// console.log(v)

// let e = Object.entries(data)
// console.log(e)

// let n = 100
// let m = 100
// console.log(n === m)
// let a1 = { name: "xyz" }
// let a2 = { name: "xyz" }

// console.log(a1 === a2)

//why primitive data are immutable and non-primitive data are immutable

// let a1 = {
//   name: "abc",
//   id: 200,
// };

// let address = {
//   pinCode: 400401,
//   doorNo: 300,
//   location: "JspidersThane",
// };

// let d = {
//   percentage: 60
// }

// let mergeObj = Object.assign(a1, address, d)
// console.log(o1)
// console.log(mergeObj)
// console.log(address)
// console.log(d)

// let n1 = {name: "xyz"};
// let n2 = {name: "xyz"};

// // let a1 = [10, 20];
// // let a2 = [10,20]

// let f1 = () => "arr";
// let f2 = () => "arr";

// console.log(n1 === n2)
// console.log(a1 === a2)
// console.log(f1 === f2)

// const ar = [10,20]
// ar[0] = 100
// console.log(ar)

// const obj = {
//   name: "sbc",
// }

// obj.name = "abc";
// console.log(obj);

console.log(n1==n2);