//fetch Object

//e.g
const getAllUsers = async () => {
  try {

    const res = await fetch('https://api.jikan.moe/v4/seasons/2005/spring?sfw')
    //fetch will return an promise fulfilled one (either resolved or rejected) with respective value
    // hence we have to assign await to wait before moving forward (let it produce then consume)

    const data = await res.json() //it also returns an promise, which means it will take time and we need to assign await to it or else the further code will execute directly without any value, like how we used to return a promise inside the .then() and then only further .then() will execute

    console.log(Object.keys(data))

  } catch (error) {
    console.log(error)
  }
}

getAllUsers()

// .json()
// It returns a promise which resolves with the result of parsing the body text as JSON
// Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object

// here we have to use the try and catch block to handle the rejections/exceptions otherwise we can use .catch method

console.log(fetch)
//[AsyncFunction: fetch] which returns promise as a response

fetch('https://api.jikan.moe/v4/seasons/2005/spring?sfw')
  .then((res) => {
    return res
  }).then((data) => {
    console.log(Object.keys(data))
  }).catch((err) => {
    console.log(err)
  })



