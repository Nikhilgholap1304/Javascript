// Cookies are small strings of data that are stored directly in the browser. They are a part of the HTTP protocol,


// One of the most widespread use cases is authentication:

// Upon sign-in, the server uses the Set-Cookie HTTP header in the response to set a cookie with a unique “session identifier”.
// Next time the request is sent to the same domain, the browser sends the cookie over the net using the Cookie HTTP header.
// So the server knows who made the request

console.log(document.cookie)
//its empty at first