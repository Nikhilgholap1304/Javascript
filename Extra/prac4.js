// numbers

// const balance = new Number( 455.56 )
// console.log(balance.toFixed(1)) //455.6

// console.log(balance.toPrecision(3)) //456

// const hundreds = 10000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-In'))

// console.log(Math.PI)

// console.log(Math.abs(-5)) //to positive
// console.log(Math.round(4.4)) //round up
// console.log(Math.floor(4.9)) //to floor/nearest previous
// console.log(Math.ceil(4.1)) //to ceil/nearest next
// console.log(Math.pow(2,3)) //2^3 = 8
// console.log(Math.min(23,67,34,9,57))
// console.log(Math.max(23,67,34,9,57))

console.log(Math.random()) //It will always return the values from 0 to 1, e.g - 0.2634664125577164
console.log(Math.random()*100)
console.log(parseInt(Math.random()*100))

// let num
// while (num !== 100) {
//   // num = Math.ceil(Math.random()*100)
//   num = (Math.floor(Math.random()*100)+1)
//   console.log(num)
// }

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min)+min)) // ((0-1)) * (10) +10
                                                        //e.g 0.5*10 = 5+10 = 15

                                                        