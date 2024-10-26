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
b.addEventListener('click', (e) => {
  console.log(e.target) //you will get the element where the event is taking place
})

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