//JSON only contains either object or array but only single one

let std = {
  name: "abc",
  id: 200,
  percentage: 90,
};

let str = JSON.stringify(std);
console.log(str);
console.log(typeof str);

let p = JSON.parse(str);
console.log(p);
console.log(typeof p)