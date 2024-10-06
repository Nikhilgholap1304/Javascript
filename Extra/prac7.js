const myData = new Date() //date constructor

// console.log(myData.toString()) 
// console.log(myData.toISOString()) //same
// console.log(myData.toJSON()) //same
// console.log(myData.toDateString())
// console.log(myData.getTime()) //in milliseconds
// console.log(myData.toLocaleString())
// console.log(myData.getDate())
// console.log(myData.getHours())
// console.log(myData.getFullYear())
// console.log(myData.getMonth()+1) //cuz month starts here with 0

// let myCreatedDate = new Date(2024, 0, 13) //(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number) 
//month index starts from 0

// console.log(myCreatedDate.toString())

// let myCreatedDate = new Date(2024, 0, 13, 5, 3, 30)

// let myCreatedDate = new Date("2024-01-14") // 14/1/2023, 12:00:00 am


// let myCreatedDate = new Date("01-14-2023") //14/1/2023, 12:00:00 am MM-DD-YYYY
// console.log(myCreatedDate.toLocaleString())

//also we can get the current data in this way
let currentData = Date.now() //in milliseconds
console.log(currentData)

// console.log(currentData.toString())
console.log(Math.floor(Date.now()/1000)) //1727979180 we see converting to seconds


