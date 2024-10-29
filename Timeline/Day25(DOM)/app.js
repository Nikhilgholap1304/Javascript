console.log(window);
console.log(document);

let h1 = document.getElementById("head");
console.log(h1)

setTimeout(() => {
  h1.style.background = "purple";
  h1.style.color = "#fff";
}, 5000);

let demo = document.getElementsByTagName("demo");
console.log(demo);
console.log(demo[0]);
console.log(demo[1]);

demo[0].style.color = "blue"

for(let v of demo){
  console.log(v);
  v.style.background = "#111";
  v.style.color = "#fff";
}

// Three ways to convert htmlcollection(object) to array

// 1) 
console.log(Array.isArray(demo));
let newArr = Array.from(demo);
console.log(newAr);

// 2)
console.log([...demo])

// 3)
let newAr = Array.prototype.slice.call(demo)
console.log(newAr)