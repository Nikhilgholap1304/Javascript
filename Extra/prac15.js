const details = {
  name: "Nikhil",
  rollno: 32122,
  welcomeMessage: function(){
    console.log(`${this.name}` , "welcome to this site");
    console.log(this);
  }
}

details.welcomeMessage()

console.log(this); //refers to "global" object of browser

// function normal() {
//   let name = "nikhil"
//   console.log(this.name) //undefined cuz this keyword will not work for the variables inside the function scope... by using just "this" it will return the details regarding function
//   console.log(this)
// }

// normal()

const arrow = (num) => num+num  //if curly braces are used then you need to use return keyword
//if used parenthesis then no need to use the return keyword

console.log(arrow(1))



const arrow2 = (num) => (num+num) //implicit return

console.log(arrow2(2))


// const arrow3 = () => {name: "Nikhil"}  //undefined

const arrow3 = () => ({name: "Nikhil"}) //{ name: 'Nikhil' } thats why we need to use parenthesis for getting the whole object

console.log(arrow3());

// IIFE------------------------------------------------------------------------------------

(function(){
  console.log("Iam there")
})(); //You will be getting an error if don't close this with ";" for executing IIFE or the precceding statement

(function demo(){ //TypeError: (intermediate value)(...) is not a function
  console.log("Iam there")
})();

(()=>{
  console.log("I am there arrow")
})()
