// map object
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value

const map = new Map() //its also an iterable along with string and array
//key value pairs like object, the difference is that it will no contain the duplicate Keys 
map.set(1, "India")
map.set("USA", "United States of America")
map.set(true, "France")
map.set([1,2,3], "France")

// console.log(map.keys()) 
// // [Map Iterator] { 1, 'USA', true, [ 1, 2, 3 ] }

// for (let element of map.keys()) {
//   console.log(element, typeof element)
// }

// 1 number
// USA string
// true boolean
// [ 1, 2, 3 ] object


// for (const e of map) { //its similar to Object.entries().... 
//   // whole key and value pairs would be as value/element inside the map
//   console.log(e)
// }
// for (const [key, value] of map) { //its similar to Object.entries()
//   console.log(key,":", value)
// }
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'FR', 'France' ]
// [ 'AM', 'France' ]

// for (const key in map) {
//   console.log(key) //this will not work, it cannot be iterated
// }

console.log(map.delete('USA'))