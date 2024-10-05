// const arr0 = ['a','b','c','d']

// const SuperHeros = new Array('IronMan','BatMan','SuperMan','Thanos' )

// console.log(SuperHeros)
// console.log(SuperHeros[1])

// SuperHeros.push('Dr.Strange') //to end without altering the previous elements
// console.log(SuperHeros)

// SuperHeros.pop() //from end without altering the previous elements
// console.log(SuperHeros)


// --------------------------

// SuperHeros.unshift('Thor') //It will add the element at very first index
// console.log(SuperHeros)

// SuperHeros.shift() //It will remove or discard the element from the end
// console.log(SuperHeros)

// console.log(SuperHeros.includes('BatMan')) //true
// console.log(SuperHeros.indexOf('Dr.Strange'))

// const numArray = [1,2,3,4,5] 

// numArray.join() //its the exact opposite of split, and also it will not affect the original array, it will just return the outcome

// const newArray = numArray.join()
// const newArray = numArray.join('-')

// console.log(newArray)
// console.log(typeof newArray)

const sliceArray = [1,2,3,4,5,6]

const spliceArray = [1,2,3,4,5,6]

sliceArray.slice(1,4) //slice will not alter the array infact it will return only sliced elements and also it will not count the last position element
console.log(sliceArray)
const a = sliceArray.slice(1,4)
console.log('last postion element is not present',a)


// spliceArray.splice(1,4) //Unlike slice it will remove or alter the elements of an array and returns the removed elements, it will also count the last position element

// console.log(spliceArray)

spl = spliceArray.splice(1,4)
console.log("last postion element is present which all be removed - ",spl) //removed elements can be seen
console.log("org array",spliceArray) //non - altered elements can be seen










