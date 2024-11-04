// Find the number from 'arr' which is closest to 'n'

const closest = (arr, n) => {
  return arr.reduce((acc, curr) => {
    return Math.abs(acc - n) < Math.abs(curr - n) ?
        acc : curr
    })
}

// const closest = (arr, n) => {
//   return arr.reduce((prev, curr) => {
//     return Math.abs(prev - n) < Math.abs(curr - n) ?
//         prev : curr
//     })
// }

// prev won't be right to call bcuz its really an accumulator
// cuz if you try to to return any thing, the accumulator will store that to itself like incase of returning added values or subtracted values 
// but if you print without returing any thing you and consoling the values you will see that acc only have first value and rest of the values of prev would be undefined cuz nothing ever returned and rest of the array values to current 
//if you focus you will get to see that whatever values reduce method returning it would be put to accumulator 

console.log(closest([34, 19, 56, 39, 86], 12))