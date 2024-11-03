// OOPS & Classes

// Object is nothing but the collection of properties and methods

function user(username, age){
  this.username = username
  this.age = age
  // return this 
}

// let ob1 = user("Gojo", 20)
// let ob2 = user("hinata", 15)
// console.log(ob1) 
// console.log(ob2) 

//if new keyword/operator not used then "this" will refer to global object and it will just add the details to that existing object and also if we create new obj like ob2 with new details then it will just override that

//so we have to use new create to create the object which will not interfere the other and would be to itself only

let ob1 = new user("Gojo", 20)
let ob2 = new user("hinata", 15)
console.log(ob1) 
console.log(ob2) 
// user { username: 'Gojo', age: 20 }
// user { username: 'hinata', age: 15 }

// now after using new keyword even if we don't return any thing it will implicity return an object

