// let myName = "Nikhil"

// console.log(myName.trueLength)

let myHeroes = ['Tony', 'Gojo', 'Naruto']

let heroPower = {
  tony: "tech",
  gojo: "infinity",
  naruto: "nine tails",
  getGojoPower: function () {
    console.log(`Gojo's power is ${this.gojo}`)
  }
}



//console.log(heroPower.nikhil)
//undefined

// as every things like array, functions, etc are made on of Object, which means every other datatype inherits from the Object
//just we don't have to mention the prototype chain like .protopye.prototype.prototype till end
//instead we can directly use inherited methods/properties
//so if we change grand Object class/method only, then it will also take effect on obj we have created it since its an ultimate parent from where we can get methods and prototypes

Object.prototype.nikhil = function(){
  console.log("Nikhil is present in all object")
}

heroPower.nikhil()
//Nikhil is present in all object
//see how it can access the inherited properties through its prototype
//we have directly modified the top level heirarchy object 

myHeroes.nikhil()
//Nikhil is present in all object

Array.prototype.heyNikhil = function(){
  console.log("hey nikhil is present")
}
myHeroes.heyNikhil()
//hey nikhil is present

// Object.heyNikhil()
//error

// so it will not propagate in a reversed order and whatever we are creating in object it will remain there and will go down to the child not to the parent
//path power

const User = {
  name: "Nikhil",
  email: "nikhilgholap@gmail.com"
}
const Otaku = {
  fav: "One Piece",
  __proto__: User
}
//what proto prop will do is; it will ask the reference and link the other object with itself and can access/inherit the rest of the things
//also sets the Otaku obj prototype to User object
const Anime = {
  top: "Jujutsu Kaisen",
}
const Source = {
  src: "Kayoanime",
}

// also

// Anime.__proto__ = Otaku
//linking the Otaku with Anime obj
//also sets the Anime obj prototype to Otaku object
//prototypal inheritance

//Modern way

Object.setPrototypeOf(Anime, Otaku)


// //////////////////////////////////

let anotherUserName = "Luffy                   "


String.prototype.trueLength = function(){
  console.log(this)
  //[String: 'Luffy....']
  // console.log(this.anotherUserName)
  // errrrrror, don't do silly mistake like this cuz you can direclt accces object using this
  console.log(this.trim().length)
}
//this function you have applied to all the strings, so now you can use it to all the strings present over here

anotherUserName.trueLength()
//5

"YOOOO BOY           ".trueLength()
//9
"You Suck".trueLength()
//8







