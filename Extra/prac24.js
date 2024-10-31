// Promise API's (Static Promise Class Methods)

// There are 6 static methods of Promise class

let p1 = new Promise(()=>{
  setTimeout(() => {
    resolve("p1 promise")
  }, 1000); 
})

let p2 = new Promise(()=>{
  setTimeout(() => {
    resolve("p2 promise")
  }, 2000); 
})

let p3 = new Promise(()=>{
  setTimeout(() => {
    resolve("p3 promise")
  }, 3000); 
})

