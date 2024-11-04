function setUserName(username){
  // complex Db calls
  this.username = username
  console.log("called");
}

// function createUser(username, email, password){
//   setUserName.call(this, username)
//   this.email = email
//   this.password = password
// }
// createUser { email: 'gojo@edu.in', password: '123' }
// if you don't use the call method then the execution context of the setUserName functions scope will get created and will also get closed once it executes so it will not affect to createUser,..............
//And also the "this" of setUserName will refer to itself not the createUsers this, for that we use call method to bind "this" keyword with any other function/object rather than itself

function createUser(username, email, password){
  setUserName.call(this, username) //remember muttu sir's example
  //first argument it takes is any function or object which has context from functions POV like any other function or objects, and rest of the arguments are the functions arguments to which we have used call method
  this.email = email
  this.password = password
}

const gojo = new createUser("gojo", "gojo@edu.in", "123")
console.log(gojo)
// createUser { username: 'gojo', email: 'gojo@edu.in', password: '123' }
 