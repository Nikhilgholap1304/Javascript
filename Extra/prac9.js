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


console.log(Array('HII','HELLO')) //[ 'HII', 'HELLO' ] array can contain only one element
console.log(Array.isArray('Gojo')) //false
console.log(Array.isArray(marvel)) //true
// for converting or the way to split a string into array of characters

console.log(Array.from('Gojo')) //[ 'G', 'o', 'j', 'o' ]
