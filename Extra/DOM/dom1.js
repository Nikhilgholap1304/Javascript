console.log(window.document)
console.log(window)

console.dir(document) //if we want show anything from tag form to object form

console.log(document.baseURI)
//http://127.0.0.1:5500/Extra/DOM/index.html

console.log(document.links)
//returns the HTMLCollection which is not same as array
console.log(document.childNodes) //it will consider the entire html, therefore specify body also
//returns a NodeList

console.log(Array.from(document.links))
console.log(Array.from(document.body.childNodes))
//[text, div, text, script] consists of spaces also

//use $0 to access the current selected element in the browser

console.log(document.firstChild) //<!DOCTYPE html>
console.log(document.body.firstChild )
//#text


console.log(document.body.lastChild )

console.log(document.body.parentElement)
//html ele
console.log(document.body.parentNode)
//same as above


console.log(document.body.querySelector('div').nextElementSibling)
//script
console.log(document.body.querySelector('h1').nextElementSibling) 
//p tag

console.log(document.body.querySelector('h1').nextSibling) 
//text (space)

