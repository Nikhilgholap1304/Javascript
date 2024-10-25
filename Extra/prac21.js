// const timeout = setTimeout(()=>{
//   console.log("This is gonna take some time");
// },2000)
// console.log(timeout)//1

// const timeout1 = setTimeout(()=>{
//   console.log("This is gonna take some time");
// },2000)
// console.log(timeout1)//2

// const timeout2 = setTimeout(()=>{
//   console.log("This is gonna take some time");
// },2000)
// console.log(timeout2)//3

// const timeout3 = setTimeout(()=>{
//   console.log("This is gonna take some time");
// },2000)
// console.log(timeout3)//4


// setTimeout((a,b)=>{
//   console.log("This will take time and add numbers", a+b)
// }, 2000, 2, 4)
//This will take time and add numbers 6

// const timeout4 = setTimeout(() => {
//   console.log("Goona execute")
// }, 6000);

// let input = confirm("Do you wanna stop it")
//remember confirm/prompt stops the whole program be it asynchronous function (setTimeout) also

// if(input){
//   clearTimeout(timeout4)
//   //timeout will also stop from executing until confirm gets resolved and if conditions allows it 
// }

const interval = setInterval(() => {
  console.log("It will execute after each time delay or time interval")
}, 2000)

setTimeout(() => {
  clearInterval(interval);
}, 10000);