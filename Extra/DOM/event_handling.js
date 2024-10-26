const b = document.querySelector("#btn")

// b.addEventListener('click', () => {
//   console.log("guess what you clicked")
// })

// b.addEventListener('click', () => {
//   console.log("another event at same time")
// }, false)


// When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed

// b.addEventListener('click', (e) => {
//   console.log("guess what you clicked", e)
// })

//the callback function also gets one parameter which is a even object

//Q) to identify the button has been clicked on which time, in what x and y axis degree

// b.addEventListener('click', (e) => {
//   console.log(e.timeStamp)
// })

// b.addEventListener('click', (e) => {
//   console.log(e.x, e.y)
// })

// b.addEventListener('mouseover', (e) => {
//   console.log("hii")
// })
// b.addEventListener('mousedown', (e) => {
//   console.log("down")
// })
// b.addEventListener('keydown', (e) => {
//   console.log("keydown")
// })
// b.addEventListener('click', (e) => {
//   console.log(e.target) //you will get the element where the event is taking place
// })

// b.addEventListener('submit', (e) => {
//   console.log("form submit")
// })


// Mouse events:

// click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
// contextmenu – when the mouse right-clicks on an element.
// mouseover / mouseout – when the mouse cursor comes over / leaves an element.
// mousedown / mouseup – when the mouse button is pressed / released over an element.
// mousemove – when the mouse is moved.

// Keyboard events:
// keydown and keyup – when a keyboard key is pressed and released.
// Form element events:

// submit – when the visitor submits a <form>.
// focus – when the visitor focuses on an element, e.g. on an <input>.

// Document events:
// DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.

// CSS events:
// transitionend – when a CSS-animation finishes.

//Event propagation

let ul = document.querySelector('ul');
let li4 = document.getElementsByClassName('special')[0];

// Bubbling - bottom to top it will affect and execute i.e first child and then parent and so on

// ul.addEventListener('click', () => {
//   console.log("parent ul is clicked");
// }, false) //bubbling mode

// li4.addEventListener('click', () => {
//   console.log("li(4)th child is clicked")
// }, false) //bubbling mode

// Capturing - top to bottom it will affect and execute i.e first parent and then child and so on

// ul.addEventListener('click', () => {
//   console.log("parent ul is clicked");
// }, true) //capturing mode

// li4.addEventListener('click', () => {
//   console.log("li(4)th child is clicked")
// }, true) //capturing mode

// now observe what is happening, Its an Bubbling up / Event Propagation which means whenever you click on child then it is also taking an effect on the parent event handler
// here first the child one will execute or take place and then the parent one

// and its opposite for capturing mode


//Stop Propagation

// ul.addEventListener('click', () => {
//   console.log("parent ul is clicked");
// })

// li4.addEventListener('click', (e) => {
//   console.log("li(4)th child is clicked")
//   e.stopPropagation() //in case we don't want the bubbling up or propagation and want to perform an event individually without moving upwards
// })

let google = document.querySelector('#google');

google.addEventListener('click', (e) => {
  console.log("google clicked")
  e.preventDefault() 
})

//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

// For example, this can be useful when:

// Clicking on a "Submit" button, prevent it from submitting a form or reloading or getting back to empty
// Clicking on a link, prevent the link from following the URL





