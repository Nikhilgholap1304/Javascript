let value = 1

// const doSomething = () => {
//   console.log('hii')
//   return () => {
//     console.log("bye")
//     return 2
//   }
// }

const Outerfunction=(callback)=>{
  console.log("Executions before callback function getting executed")
  callback()
}

Outerfunction(()=>{
  console.log("callback function")
})

//therefore callback functions are used to execute asynchronously as well as if we want to handle the async functions like settimeout

// doSomething(function(){
//   console.log("bye")
// })



// console.log(value)
// a = doSomething()
// console.log(a())