// let textArea = document.querySelector("#message");
// textArea.addEventListener("keyup", (e) => {
//   console.log(e);
//   console.log(e.target.value);
// });

// textArea.addEventListener("keydown", (e) => {
//   console.log(e);
//   console.log(e.target.value)
// });

// textArea.addEventListener("keypress", (e)=>{
//   console.log(e)
//   console.log(e.target.value);
// });

// let body = document.querySelector("body");
// textArea.onkeydown = () => {
//   let r = Math.floor(Math.random()*(9999-1000)+1000);
//   body.style.background = `#${r}`
//   // console.log(r)
// }


let form = document.querySelector(".form-control");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e)
  console.log(username.value)
  console.log(password.value)
})
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e)
  console.log(username.value)
  console.log(password.value)
})
form.addEventListener("input", (e) => {
  e.preventDefault();
  // console.log(e)
  console.log(username.value)
  console.log(password.value)
})







