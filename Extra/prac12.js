// Objects

const mySym = Symbol("mykey");
const str = "key"

const User = {
  name: "Nikhil",
  "full name": "Nikhil Gholap",
  [mySym]: "thisisvalueofkey", //this the only way to include the symbol as a key
  [str]: 'this is string', //also sqr brackets are used to include the key as a variable
  age: 18,
  location: "Mumbai",
  email: "nikhilgholap1304@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

console.log(User.name)
// console.log(User.full name) //not possible; thats why .operator is not preferred

//instead use the brackets to call it
console.log(User["full name"])



console.log(User.key)    //this is string 
console.log(User["key"]) //this is string
console.log(User[str])   //this is string //using the variable