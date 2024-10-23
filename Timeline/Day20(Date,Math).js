var d = new Date(); //Date class/object
console.log(d)

console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDate())
console.log(d.getDay())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds());

let x = new Date();
x.setFullYear(1999, 3) //april(starts from 0)
x.setMonth(3, 10);
x.setDate(3);
x.setHours(10, 50, 20);
x.setMinutes(20, 5000);
x.setSeconds(10);
x.setMilliseconds(1000);
console.log(x);

//Math

console.log(Math.round(1.2)); //math class 
console.log(Math.round(1.5));
console.log(Math.round(-2.7));
console.log(Math.round(-9.5));

console.log(Math.ceil(2.1));
console.log(Math.ceil(-3.9));

console.log(Math.floor(2.9));
console.log(Math.floor(-2.9));

console.log(Math.trunc(3.7));
console.log(Math.trunc(-9.9));

let num = [90, 79, 69, 56, 26, 33]
let maxVal = Math.max[10, 78, 20, 30, 23, 110];

console.log(maxVal);

let minVal = Math.min(10, 20, 40, 9)
console.log(minVal)

console.log(Math.max(...num))
console.log(Math.min(...num))

console.log(Math.sqrt(16))
console.log(Math.sqrt(396))

console.log(Math.cbrt(325)) //5


console.log(Math.pow(10, 2))
console.log(10 ** 6)

console.log(Math.min()); //Infinity // it compares the arguments with it 
console.log(Math.max()); //-Infinity //same

//math.random() * (maxval - minval) + minval
let x2 = Math.random() * (9999 - 1000) + 1000;
console.log(Math.trunc(x2))