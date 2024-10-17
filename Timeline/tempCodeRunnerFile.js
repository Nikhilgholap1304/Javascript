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
console.log(e1.number)