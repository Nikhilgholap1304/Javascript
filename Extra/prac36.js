// class User{
//   constructor(email, password){
//     this.email = email; // it will call setter of email
//     this.password = password; // it will call setter of password
//   }

//   get email(){
//     // return this.email It will throw callstack full error cuz while constructor trying to set key and values it will call the setter also
//     return this._email.toUpperCase()
//   }

//   set email(value){
//     this._email = value
//   }

//   get password(){
//     return `${this._password}@abc`
//   }

//   set password(value){
//     this._password = value
//   }
// }

// const gojo = new User('gojo@gmail.com', 'infinity0')

// console.log(gojo.email)
// // GOJO@GMAIL.COM
// console.log(gojo.password)
// // infinity0@abc
// gojo.password = "newPass1234"
// console.log(gojo.password)
// // newPass1234

// console.log(gojo)
// // User { _email: 'gojo@gmail.com', _password: 'infinity0' }




// function User(email, password) {
//   this._email = email
//   this._password = password

//   Object.defineProperty(this, 'email', {  //here the 2nd arg (property name should be which we want to get or set with using the object like obj.email not obj._email)
//     get: function () {
//       return this._email.toUpperCase()
//     },
//     set: function (value) {
//       this._email = value
//     }
//   })
//   Object.defineProperty(this, 'password', {
//     get: function () {
//       return this._password.toUpperCase()
//     },
//     set: function (value) {
//       this._password = value
//     }
//   })
// }

// const gojo = new User('gojo@gmail.com', 'infinity0')

// console.log(gojo)
// // User { _email: 'gojo@gmail.com', _password: 'infinity0' }
// console.log(gojo.email)



const User = {
  _email: 'gojo@gmail.com',
  _password: 'infinity0',
  get email(){
    return this._email.toUpperCase()
  },
  set email(value){
    this._email = value
  }
}

const gojo = Object.create(User)
//Object to use as a prototype

console.log(gojo.email)
//GOJO@GMAIL.COM



gojo.email = "gojoNew@gmail.com"
console.log(gojo.email)
// GOJONEW@GMAIL.COM






// There’s a finished JavaScript proposal, almost in the standard, that provides language-level support for private properties and methods.

// Privates should start with #. They are only accessible from inside the class.

// For instance, here’s a private #waterLimit property and the water-checking private method #fixWaterAmount:

// class CoffeeMachine {
//   #waterLimit = 200;

//   #fixWaterAmount(value) {
//     if (value < 0) return 0;
//     if (value > this.#waterLimit) return this.#waterLimit;
//   }

//   setWaterAmount(value) {
//     this.#waterLimit = this.#fixWaterAmount(value);
//   }

// }

// let coffeeMachine = new CoffeeMachine();

// // can't access privates from outside of the class
// coffeeMachine.#fixWaterAmount(123); // Error
// coffeeMachine.#waterLimit = 1000; // Error
// On the language level, # is a special sign that the field is private. We can’t access it from outside or from inheriting classes.

// Private fields do not conflict with public ones. We can have both private #waterAmount and public waterAmount fields at the same time.


// For instance, let’s make waterAmount an accessor for #waterAmount:

// class CoffeeMachine {

//   #waterAmount = 0;

//   get waterAmount() {
//     return this.#waterAmount;
//   }

//   set waterAmount(value) {
//     if (value < 0) value = 0;
//     this.#waterAmount = value;
//   }
// }

// let machine = new CoffeeMachine();

// machine.waterAmount = 100;
// alert(machine.#waterAmount);  