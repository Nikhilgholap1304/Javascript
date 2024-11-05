let div = document.querySelector(".container");


// !using event handler property :
// div.onclick = (e) => {
//   console.log("hello");
//   console.log(e);
//   div.style.background = "#111";
//   div.style.color = "#fff";
// }


// !using addEventListener();
// div.addEventListener('click', (e)=>{
//   console.log("hello");
//   console.log(e);
//   div.style.background = "#111";
//   div.style.color = "#fff";
// })

// !using html event attribute
// here you need to manually pass (event object not working though) this which represents target itself as an argument from onClick attribute

// let handleClick = (target) => {
//   console.log("hello");
//   console.log(target);
//   div.style.background = "#111";
//   div.style.color = "#fff";
// }


// div.addEventListener("mouseover", function(e){
//   console.log(this) //!target element incase its an function
//   console.log(e); //e is now an Mouse Event object
//   div.style.background = "#111";
//   div.style.color = "#fff";
// })

div.addEventListener("mouseout", function(e){
  console.log(this) //!target element incase its an function
  console.log(e); //e is now an Mouse Event object
  div.style.background = "#111";
  div.style.color = "#fff";
})







