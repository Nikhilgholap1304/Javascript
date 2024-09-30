const prompt = require("prompt-sync")();
const obj = {
  name: "nikhil",
  age: 20,
}
const arr = [1,2,3,4]

obj["profession"] = "coder" //even though obj is an constant its changing cuz its just referencing/pointing/locating that object... so we can add the key:values inside the objects unless you change the whole of it (throw an error)

// lookup 
console.log(obj["name"])
console.log(obj)

for (k in obj){
  console.log(k)
}

for (v of arr){
  console.log(v)
  console.log(typeof v)
}
// In number
for (v in arr){
  console.log(v)
  console.log(typeof v)
}
// in string
//yellow o/p means number and white means its an string then

get = prompt("Enter a number")
console.log(get)