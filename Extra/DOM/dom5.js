// const clg = document.getElementsByClassName('clg')
// console.log(clg[0].textContent)

const clg = document.querySelector('.clg')

console.log(clg.innerText) //only text
console.log(clg.innerHTML) //it will give as as it is even the child tags
console.log(clg.textContent) //it will only give text even from child tags
//will give same output if its only text but


console.log(document.querySelector("input[type=password]"))

{/* <input type="password" name="password" id="password"> */}