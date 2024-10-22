//DOM searching, additional methods are used to directly access the elements no matter where it is and also in cases where elements are not closer or can't be easily located

let x = document.getElementById('extra');
//only selects single elements
console.log(x) 

x.style.background = "orange"

console.log(document.getElementsByTagName('div'));
//Html Collection

console.log(document.getElementsByClassName('extra_info'));
//Html Collection

console.log(document.querySelector('main'))
//It selects the first matching element either be it class, id, tag, etc

console.log(document.querySelectorAll('div'))
//It returns the node list