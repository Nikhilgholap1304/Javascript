console.log(document.body)
console.log(document.body.firstChild) //it will also select the space as a child
console.log(document.body.lastChild)
console.log(document.body.childNodes) //text describes the space
//it would be in the form of nodelist

console.log(document.childNodes[0] === document.firstChild) //true
console.log(document.childNodes[document.childNodes.length - 1] === document.lastChild) //truef
