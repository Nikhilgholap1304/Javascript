//~call()

let obj = {
  name: "sara",
  id: 125,
};

let fn = function (a, b) {
  console.log("fn function")
  console.log(this);
  console.log(a, b)
};

fn.call(obj, 10, 20);


//! in arrow function it is not possible
let arr = () => {
  console.log(this); //window object
};

//arr.call(obj);

//apply();

//fn.apply(obj, [10,20]);

//!bind();

let newObj = {
  name: "ayush",
  fn: function () {
    console.log(this.name);
    function innerFn(){
      console.log("here this will refer to window object",this)
    }
    innerFn()
  },
  getName() {
    console.log("getName function");
    console.log(this.name);
  }
}

//let n = newObj.getName.call(obj);
// console.log(n);

// console.log(newObj.getName());
newObj.getName.bind(obj)();