// let value = 1

// const doSomething = () => {
//   console.log('hii')
//   return () => {
//     console.log("bye")
//     return 2
//   }
// }

// doSomething(function(){
  //   console.log("bye")
  // })
  

  // console.log(value)
  // a = doSomething()
  // console.log(a())


  // const Outerfunction=(callback)=>{
  //   console.log("Executions before callback function getting executed")
  //   callback()
  // }
  
  // Outerfunction(()=>{
  //   console.log("callback function")
  // })
  
  //therefore callback functions are used to execute asynchronously as well as if we want to handle the async functions like settimeout

  
  // const Outerfunction = (callbackfun) => {
  //   setTimeout(()=>{
  //     console.log("Outerfunctions Hii")
  //   },2000)
  //   callbackfun()
  // }

  // Outerfunction(()=>{
  //   console.log("callback functions bye")
  // })

  //as you can see setTimeout will not stop the the execution , therefore callback will run first and outerfunctions clg will run after wards

  // thats why for achieving the synchronous nature while having the asynchronous funciton we use promises