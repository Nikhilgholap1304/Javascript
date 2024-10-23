const arr = [true, false, false, true, false]

console.log(
  arr.sort((a, b) => {
    return a - b
  })
)

console.log(true > false)
// true
console.log(true < false)
// false

//[ false, false, false, true, true ]
//cuz internally false is 0 and true is 1