// const clg = document.getElementsByClassName('clg')
// console.log(clg[0].textContent)

const clg = document.querySelector('.clg')

console.log(clg.innerText) //only text
console.log(clg.innerHTML) //it will give as as it is even the child tags
console.log(clg.textContent) //it will only give text even from child tags
//will give same output if its only text but


console.log(document.querySelector("input[type=password]"))
console.log(document.querySelector(".clg:first-child"))

{/* <input type="password" name="password" id="password"> */}

const text = document.querySelector("h5")
console.log(text.innerText)

text.innerText = "changed text"
console.log(text.innerText)

const h5 = document.querySelectorAll("h5")

const h5Arr = Array.from(h5) //from nodeList 

h5Arr.forEach((val)=>{
  val.style.backgroundColor = "purple"
})

document.createElement()