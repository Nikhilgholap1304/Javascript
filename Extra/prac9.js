marvel = ["spiderman", "ironman", "hulk"]
dc = ["batman", "flash", "superman"]

// marvel.push(dc) 
// console.log(marvel) 
//[ 'spiderman', 'ironman', 'hulk', [ 'batman', 'flash', 'superman' ] ]
// the whole array is getting pushed inside as a nested element

// therefore we need to use the spread operator

marvel.push(...dc) //spread operator will destructure it 
//The spread operator is a feature of JavaScript introduced with ES6 that gives you access to the insides of an iterable object. An “iterable object” is anything you can iterate over item by item, such as arrays, objects literals, and strings
console.log(marvel)

