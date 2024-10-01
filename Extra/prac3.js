let string = "IAmString"
console.log(string[10]) //not throws an error instead it will return undefined

let arr = [0,1,2,3]
console.log(arr[4]) //same

let obj = {
  name1: 'nikhil',
  name2: 'ayush',
  name3: 'aditya'
}
// console.log(obj['name10']) again here also undefined bcuz name10 key not found

// console.log(obj.name5) same

console.log(Object.keys(obj)) //It returns the keys in an array form

console.log(Object.keys(obj)[10]) //undefined