let obj = {
  name: "nikhil",
  age: 20,
  func1: function() {
    console.log(this)
    //here this will refer to the object
  },
  func2: function() {
    function inner(){
      console.log(this)
    }
    inner()
  }
}
obj.func