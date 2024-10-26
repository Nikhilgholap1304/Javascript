console.log(window.localStorage);
console.log(window.sessionStorage);

localStorage.setItem("name", "nikhil");
localStorage.setItem("id", 300);
localStorage.setItem("isMarried", true);
localStorage.setItem("skills", ["js", "react"]);
localStorage.setItem(
  "address", JSON.stringify({ addrN0: 300, location: "Thane" })
);

console.log(typeof localStorage.getItem("id"));
console.log(localStorage.getItem("isMarried"))
console.log(localStorage.getItem("skills").split(","))
console.log(Boolean(localStorage.getItem("isMarried")));
console.log(JSON.parse(localStorage.getItem("address")));

localStorage.removeItem("id");
localStorage.clear();
console.log(localStorage.length);

sessionStorage.setItem("name", "virat");
sessionStorage.setItem("id", 800);

console.log(sessionStorage.getItem("id"))
sessionStorage.removeItem("id")

sessionStorage.clear()
console.log(sessionStorage.length);