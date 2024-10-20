let x = 100;

//! 1) literal way:
//! 2) using class and constructor:
class Employee{
  static number = 100
  str = "Javascript";
  constructor(name,id,skills){
    this.eName = name
    this.eId = id;
    this.eSkills = skills;
  }
  getName(){
    console.log("non static method");
    console.log(this.eName)
  }
  static f1(){
    console.log("static method");
  }
}

let e1 = new Employee("abc", 300, ["SQL", "PHP"]);
Employee.f1()
// console.log(e1.number) //undefined
console.log(Employee.number) //100
// e1.f1()//it will throw an error since static method can't be called with object reference
// console.log(e1);

e1.getName();
console.log(e1.str);

let e2 = new Employee("xyz", 200, ["java", "js"]);

// console.log(e2);

Employee.f1();
console.log(Employee.number);

//! 3) using constructor function: //it behaves like a class

function Student(name, id, percentage){
  this.eName = name;
  this.sId = id;
  this.sPercentage = percentage;
}

let s2 = new Student("pqr", 220, 68);
console.log(s2);
//Student { eName: 'pqr', sId: 220, sPercentage: 68 }

//! 4) using Object constructor:

let o = new Object({"name": "nikhil"});
// o.name = "abc";
// o.id = 900;

console.log(o)