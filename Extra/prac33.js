// Classes and constructor

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email
//     this.password = password
//   }
//   encryptPassword() {
//     return `${this.password}abc`
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`
//   }
// }

// const gojo = new User('gojo', 'gojo@gmail.com', 12345)
// console.log(gojo)
// console.log(gojo.encryptPassword())
// console.log(gojo.changeUserName())


// behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email
//   this.password = password
// }

// User.encryptPassword = function(){
//   return `${this.password}abc`
// } //childs cannot access

// console.log(User.encryptPassword())

// User.prototype.encryptPassword = function(){
//   return `${this.password}abc`
// }
// User.prototype.changeUserName = function(){
//   return `${this.username.toUpperCase()}`
// }

// const gojo = new User('gojo', 'gojo@gmail.com', 12345)
// console.log(gojo) 
// console.log(gojo.encryptPassword())
// console.log(gojo.changeUserName())


class User {
  static dbName = "User"
    constructor(username) {
      this.username = username;
    }
    changeUserName() {
      return `${this.username.toUpperCase()}`
    }
    static createId(){
      return `Id created`
    }
  }

class Otaku extends User {
  constructor(username, email, password){
    super(username)
    this.email = email;
    this.password = password;
  }
  addAnime(){
    console.log(`new course has been added by ${this.username}`)
  }
}
  
const gojo = new User('gojo', 'gojo@gmail.com', 12345)
// console.log(gojo)
// console.log(gojo.changeUserName())

const nikhil = new Otaku('nikhil', 'nikhil@gmail,com', 12345)
nikhil.addAnime()
console.log(nikhil.changeUserName())

// console.log(nikhil.dbName())
//error
// console.log(User.dbName)
//User

console.log(gojo === nikhil)
//false

console.log(gojo === User)
//false
console.log(nikhil instanceof Otaku)
//true
console.log(nikhil instanceof User)
//true


console.log(User.createId())
// Id created

// console.log(jogo.createId())
// Reference Error

console.log(Otaku.createId())
//Id created
// which means it can also be called with the class which inherits but not with instances or objects


// Classes provide "super" keyword for that.

// super.method(...) to call a parent method.
// super(...) to call a parent constructor (inside our constructor only).

// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} hides!`);
//   }

//   stop() {
//     super.stop(); // call parent stop
//     this.hide(); // and then hide
//   }
// }

