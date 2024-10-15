const map = new Map() 
//key value pairs like object, the difference is that it will no contain the duplicate Keys 
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("AM", "France")

console.log(map) 

for (const e of map) { //its similar to Object.entries()
  console.log(e)
}
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'FR', 'France' ]
// [ 'AM', 'France' ]