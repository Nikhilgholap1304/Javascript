//fetch Object

// fetch(url, [options]) //without options its an get request but with options its an post request
//e.g
// const getAllUsers = async () => {
//   try {

//     const res = await fetch('https://api.jikan.moe/v4/seasons/2005/spring?sfw')
//     //fetch will return an promise fulfilled one (either resolved or rejected) with respective value
//     // hence we have to assign await to wait before moving forward (let it produce then consume)

//     const data = await res.json() //it also returns an promise, which means it will take time and we need to assign await to it or else the further code will execute directly without any value, like how we used to return a promise inside the .then() and then only further .then() will execute

//     console.log(Object.keys(data))

//   } catch (error) {
//     console.log(error)
//   }
// }

// getAllUsers()

// .json()
// It returns a promise which resolves with the result of parsing the body text as JSON
// Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object

// here we have to use the try and catch block to handle the rejections/exceptions otherwise we can use .catch method

// console.log(fetch)
//[AsyncFunction: fetch] which returns promise as a response

// fetch('https://api.jikan.moe/v4/seasons/2005/spring?sfw')
// .then((res) => {
//     return res.json() //without using .json you won't be able to access the object since its not an JS object
// }).then((data) => {
//     console.log(Object.keys(data))
// }).catch((err) => {
//     console.log(err)
// })

//res.headers

// fetch('https://api.jikan.moe/v4/seasons/2005/spring?sfw')
//     .then((res) => {
//         console.log(res) //It will give provide us the response object, though you cannot access the data like this
//         console.log(res.status) //like 200 or 404 or 400 or 500
//         //200
//         console.log(res.ok)
//         //true
//         console.log(res.headers)
//         //HeadersList {.....}
//         return res.json()
//     }).then((data) => {
//         console.log(Object.keys(data))
//         // [ 'pagination', 'data' ]
//     }).catch((err) => {
//         console.log(err)
//     })

// There are 2 types of headers 
// 1) Response Headers - The Response headers are available in response.headers
// 2) Request Headers - to set a request header in fetch we can use the headers option
// let res = fetch(url, headers)



//Post Request

// fetch('https://jsonplaceholder.typicode.com/posts', options)
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// or 

const postUser = async () => {
    try {
        let options = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                //before posting the data you first have to convert it into JSON string for compatibility
                title: 'Jujutsu Kaisen',
                userId: 1,
                body: 'Its the Best'
            })
        }
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', options)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
postUser()



