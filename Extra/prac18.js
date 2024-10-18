const marks = {
  section1: { alpha: 15, beta: 16 },
  section2: { alpha: -31, beta: 19 }
};
const { section1: { alpha: alpha1, beta: beta1 } } = marks; 
//remember we are destructuring and assigning the keys to const keyword
console.log(alpha1, beta1); //15,16

// console.log(section1) //error

