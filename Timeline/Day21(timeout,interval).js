console.log("hi");

//window.setTimeout(()=>{},1000)

setTimeout( //surprisingly the callback function can also take arguments 
  (a, b, ...c) => {
    console.log(a, b)
    console.log(c);
    console.log("Hello World");
  },
  3000,
  "str",
  false,
  10,
  20,
  30,
  40
);

console.log("bye");

let y = setTimeout(() => {
  console.log("Set timeout");
}, 1000);

let i = setInterval(()=>{
  console.log("Set Interval");
}, 2000);

let res = false;
if(res){
  clearTimeout(y); //it directly stops the timeout
}

setTimeout(() => {
  clearInterval(i); //it directly stops the interval
}, 10000);

