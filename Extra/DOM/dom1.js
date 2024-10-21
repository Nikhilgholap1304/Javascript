console.log(window.document)
console.log(window)

console.dir(document) //if we want show anything from tag form to object form

console.log(document.baseURI)
//http://127.0.0.1:5500/Extra/DOM/index.html

console.log(document.links)
//returns the HTMLCollection which is not same as array
console.log(document.childNodes)
//returns a NodeList

console.log(Array.from(document.links))
console.log(Array.from(document.childNodes))

//use $0 to access the current selected element in the browser
