const marks = {
  section1: { alpha: 15, beta: 16 },
  section2: { alpha: -31, beta: 19 }
};
const { section1: { alpha: alpha1, beta: beta1 } } = marks;
//remember we are destructuring and assigning the keys to const keyword

// console.log(section1) //error
// console.log(section ,alpha) //ReferenceError: section is not defined

console.log(alpha1, beta1); //15,16


//lets trace it what's happening

//first we take whole thing inside curly braces like a key and the object reference to the opposite end
//so section1 which is present as a key in the marks object
//by using ":" we are trying to rename
//think of it as a whole variable (i.e section1)
//so now we are trying to again destructure this section1 which consist of an object like we have done for marks
//so alpha, beta are the keys which are again present inside of the section1 object
//and we are renaming those nested object keys by alpha1 and beta1
//so the conclusion is we have done nested destructuring and only the node/child keys happening to be renamed can be accesed 

const score = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]
const [score1, score2] = score
console.log(...score1, ...score2)


let obj = {
  name: "GFG",
  add: {
      country: "India",
      state: {
          code: "JS",
          pincode: "820800",
          article: {
              topic: "destructuring"
          }
      }
  }
}

let { name } = obj;
console.log(name)

let { add: { country: abcd } } = obj
console.log(abcd)

let { add: { state: { code: cd } } } = obj
console.log(cd)

let { add: { state: { article: { topic: ef } } } } = obj
console.log(ef);