// Attribute methods:

// let h1 = document.querySelector("hii");
// console.log(h1)

// h1.setAttribute("class", "heading");
// h1.setAttribute("class", "javascript");

// let a = document.querySelector(".audio-mp3");
// console.log(a);
// a.setAttribute("controls",null)
// a.setAttribute("controls","");

// var c = a.getAttribute("class");
// console.log(c)

// let para = document.querySelector(".para");
// para.removeAttribute("style");

// let c1 = para.hasAttribute("style");
// console.log(c1);


// // properties for class

// let p = document.getElementById("p1");
// p.setAttribute("class", "demo");
// p.setAttribute("class", "active");
// p.className = "demo"
// console.log(p)

// p.classList.add("demo", "active", "para");

// p.classList.add("demo", "p1", "active");
// console.log(p)

// let r1 = p.classList.contains("para");
// console.log(r1)

let h1 = document.querySelector("#head");
let res = h1.classList("demo");
console.log(res);

setInterval(() => h1.classList.toggle("heading"), 2000);

