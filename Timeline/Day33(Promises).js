let p = new Promise((resolve, reject)=>{
  let isDataFetched = false;
  if(isDataFetched) resolve("promise resolved");
  else reject("promise rejected")
});

p.then((data)=>{
  console.log(data)
})
.catch((e)=>{
  console.log(e)
  console.log("promise 1 rejected");
})

.finally(()=>{
  console.log("Finally")
})

console.log(p)