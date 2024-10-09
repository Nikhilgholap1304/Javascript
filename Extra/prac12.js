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
  lastLoginDays: ["Monday", "Saturday"],
  greet: ()=>{
    return "Hello World"
  }
}

// console.log(User.name)
// console.log(User.full name) //not possible; thats why .operator or (.notation) is not preferred

//instead use the brackets to call it
// console.log(User["full name"])

// console.log(User[mySym]) //[Symbol(mykey)]: 'thisisvalueofkey' only way to access the symbol key
// console.log(User.mySym) //undefined //won't work


//for normal variable as a key
// console.log(User.key)    //this is string 
// console.log(User["key"]) //this is string
// console.log(User[str])   //this is string //using the variable name

// User["name"] = "Nivas"
// // User.name = "Nivas"
// console.log(User.name) //"Nivas"

//but if we don't want the user to modify the object then use

// Object.freeze(User)
// Object.seal(User)
// User.name = "Ayush" //it wont change since its been freezed or immutable
// console.log(User.name)
// console.log(Object.isFrozen(User)) //true
// console.log(Object.isSealed()) //true
// console.log(Object.is(User, User))// it will return if both the values are same

console.log(User.greet) //we will get the function reference
console.log(User.greet())
