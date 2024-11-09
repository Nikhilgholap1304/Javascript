let gp = document.querySelector(".gp")
let p = document.querySelector(".p")
let c = document.querySelector(".c")

document.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log(e.eventPhase);
    console.log("document clicked");
  },
  false
)

gp.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log(e.eventPhase); //capturing: 1, target: 2, bubbling: 3
    console.log("Grand parent clicked")
  },
  { capture: false }
);

p.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log(e.eventPhase)
    console.log("parent clicked")
  },
  false
)

c.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation()
    e.stopImmediatePropagation(); //only execute single event, not multiple event of same element
    console.log(e.eventPhase);
    console.log("child clicked")
  },
  false
);

c.addEventListener("click", (e) => {
  console.log("event no 2")
})