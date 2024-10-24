marvel = ["spiderman", "ironman", "hulk"]
dc = ["batman", "flash", "superman"]

// marvel.push(dc) 
// console.log(marvel) 
// console.log(marvel[3][1])
//[ 'spiderman', 'ironman', 'hulk', [ 'batman', 'flash', 'superman' ] ]
// the whole array is getting pushed inside as a nested element

// therefore we need to use the spread operator

// marvel.push(...dc) //spread operator will destructure it 
// console.log("New Array : ", [...marvel, ...dc])
//The spread operator is a feature of JavaScript introduced with ES6 that gives you access to the insides of an iterable object. An “iterable object” is anything you can iterate over item by item, such as arrays, objects literals, and strings
// console.log(marvel)

// marvel.concat()//alone it will not work or doesn't gets altered on original array
// console.log(marvel.concat(dc)); //it will return the concatenated array
// let a = marvel.concat(dc);
// console.log(a);
//[ 'spiderman', 'ironman', 'hulk', 'batman', 'flash', 'superman' ]

// const nestArr = [2,[3,4],[1,3,7,9],1,6,[4,8,0,[7,1,3,[1,5,2]]]]
// console.log(nestArr)
// console.log(nestArr.flat(1)) //returns a new array considering specific depth
//[ 2, 3, 4, 1, 3, 7, 9, 1, 6, 4, 8, 0, [ 7, 1, 3, [ 1, 5, 2 ] ] ]

// console.log(nestArr.flat(Infinity))
// [
//   2, 3, 4, 1, 3, 7, 9,
//   1, 6, 4, 8, 0, 7, 1,
//   3, 1, 5, 2
// ]

// delete dc //delete is an operator used to delete any variable
// console.log(dc) //ReferenceError: dc is not defined

// score = 100
// delete score //it deletes anything
// console.log(score) //ReferenceError: score is not defined 


console.log(Array('HII','HELLO')) //[ 'HII', 'HELLO' ] array can contain only one element
console.log(Array.isArray('Gojo')) //false
console.log(Array.isArray(marvel)) //true
// for converting or the way to split a string into array of characters

console.log(Array.from('Gojo')) //[ 'G', 'o', 'j', 'o' ]

console.log(Array.from(20)) //[]
// console.log(Array.from(20,30)) //[] TypeError: 30 is not a function

console.log(Array.from({name: 'Nikhil'})) //[] //IMP
//other than string it cannot convert anything

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1)) //[100]
console.log(Array.of(num1,num2,num3)) //[ 100, 200, 300 ] returns the converted set of elements to array

marvel.sort()
console.log(marvel)

const scores = [2,6,1,5,7,4]
scores.sort((a,b)=>b-a)
console.log(scores) //[ 7, 6, 5, 4, 2, 1 ]
scores.sort()
console.log(scores) //[ 1, 2, 4, 5, 6, 7 ]

marvel.reverse()
console.log(marvel) //[ 'spiderman', 'ironman', 'hulk' ]                                                                                                                                                                                                                                                      





