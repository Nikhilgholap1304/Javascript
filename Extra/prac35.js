// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor)
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// you cannot change any of this value, since c++ will again reset this even if you change

const anime = {
  name: 'gojo',
  rating: 10,
  isPowerFull: true
}
console.log(anime)

console.log(Object.getOwnPropertyDescriptor(anime, 'name'))
// { value: 'gojo', 
//   writable: true, 
//   enumerable: true, 
//   configurable: true 
// }
// what if we want to change this inner configurations for our property of an object

// Object.create() //factory method to create the object

Object.defineProperty(anime, 'name', {
  writable: false,
  // configurable: false,
  enumerable: false
  //it will stop the iteration of that property of object
})

console.log(Object.getOwnPropertyDescriptor(anime, 'name'))
// {
//   value: 'gojo',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }

for (let [key, value] of Object.entries(anime)) {
  if (typeof key !== 'function') {
    console.log(`${key} : ${value}`)
  }
}
// rating : 10
// isPowerFull : true
// name is not iterating

console.log(anime.name)
// gojo

anime.name = 'sukuna'
console.log(anime.name)
// gojo

// bcuz the property description writable is false therefore we can't update is like and inbuilt objects property