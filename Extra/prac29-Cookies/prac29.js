// Cookies are small strings of data that are stored directly in the browser. They are a part of the HTTP protocol,


// One of the most widespread use cases is authentication:

// Upon sign-in, the server uses the Set-Cookie HTTP header in the response to set a cookie with a unique “session identifier”.
// Next time the request is sent to the same domain, the browser sends the cookie over the net using the Cookie HTTP header.
// So the server knows who made the request

// console.log(document.cookie)
//its empty at first

// Writing to document.cookie
// We can write to document.cookie. But it’s not a data/object property, it’s an accessor (getter/setter). An assignment to it is treated specially.

// A write operation to document.cookie updates only the cookie mentioned in it and doesn’t touch other cookies.

//following is the way to add the cookie by assigning it to cookie setter inside the quotes using key=value syntax
// document.cookie = "user=nikhil"
// console.log(document.cookie)

// let key = prompt("Enter your key")
// let value = prompt("Enter your value")

// document.cookie = `${key}=${value}`
// console.log(document.cookie)
// user=nikhil; skill=react

// but what if we put unappropriate key and value like characters or numbers or even spaces etc then it would face issues
//for that we use the function encodeURIComponent which replaces the special characters with valid something

// let key = 'full name'
// let value = '@nikhil.gholap'

// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)
//user=nikhil; skill=react; full%20name=%40nikhil.gholap

//now for accessing it we also need to decode it

// let cookies = (document.cookie).split(';')

// for (let cookie of cookies){
//   console.log(decodeURIComponent(cookie))
// }
// user=nikhil
// skill=react
// full name=@nikhil.gholap

// we cannot add/set multiple key and values at the same time, instead only one at a time
//if you use semi colon to seperate you can set new values for existing meta data keys
// like domain=site.com
// secure

//e.g // assuming we're on https:// now
// set the cookie to be secure (only accessible over HTTPS)
// document.cookie = "user=John; secure";

// expires, max-age
// By default, if a cookie doesn’t have one of these attributes, it disappears when the browser/tab is closed. Such cookies are called “session cookies”

// To let cookies survive a browser close, we can set either the expires or max-age attribute. max-Age has precedence if both are set.

// expires=Tue, 19 Jan 2038 03:14:07 GMT
// If we set expires to a date in the past, the cookie is deleted.

// max-age=3600
// It’s an alternative to expires and specifies the cookie’s expiration in seconds from the current moment.

// If set to zero or a negative value, the cookie is deleted:

// document.cookie = "user=John; max-age=0";
// console.log(document.cookie)

// One cookie may not exceed 4KB in size. The number of cookies allowed on a domain is around 20+ (varies by browser)


//LocalStorage Object

console.log(localStorage)
//Storage {length: 0}

console.log(localStorage.length)
//0

localStorage.setItem('name', 'nikhil')

localStorage.age = 20
//Whooo we can also add the the key value like any other normal object, maybe becuz of getter and setter
console.log(localStorage.age)
//whoo we can also access the values by direclty asking to the object
delete localStorage.age
//whoo we can also delete it in this way


//the way in which we could be ablt to store object in local host is
//as we know localstorage everything in string format but if we try to store object then it wil convert it to string [Object Object]... we can't to anything with this

// for that see the following

localStorage.setItem('obj',JSON.stringify({name: "Nikhil", age: 20}))

console.log(JSON.parse(localStorage.obj)) //or localStorage.getItem(obj)
//{name: 'Nikhil', age: 20}

console.log(localStorage.key(1))
//obj

//Session storage
sessionStorage.setItem('name', 'jogo')
console.log(sessionStorage.getItem('name'))
//jogo

window.onstorage = (e) => {
  console.log("value changed")
  console.log(e)
}
sessionStorage.setItem('name', 'luffy')



