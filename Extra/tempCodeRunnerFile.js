const p1 = new Promise((resolve, reject) => {
  console.log("Promise1 is pending")
  setTimeout(() => {
    console.log("I am a promise and I got resolved")
    resolve(true)
  }, 5000);
})

const p2 = new Promise((resolve, reject) => {
  console.log("Promise2 is pending")
  setTimeout(() => {
    console.log("I am a promise and I got rejected");
    reject(false)
  }, 5000);
})

console.log(p1, p2)