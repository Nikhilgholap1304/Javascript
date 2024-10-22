let b = document.body

//now if you don't want the first child like spaces and text nodes like we have seen backthen
console.log("This is the first child", b.firstChild)
console.log("This is the first 'element' child", b.firstElementChild)
console.log("This is the last 'element' child", b.lastElementChild)

console.log("This is the next sibling 'element' ", b.firstElementChild.nextElementSibling)
// container
console.log("This is the previous sibling 'element' ", b.lastElementChild.previousElementSibling)
// nav + container + script