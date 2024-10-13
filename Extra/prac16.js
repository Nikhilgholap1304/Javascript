// 1) Global Execution / Global Environment
//- Allocated inside the this {}

//2) Memory Creation Phase
//a -> undefined
//b -> undefined
//(function) demo -> definition (if you call it then only it executes)

//3) Execution Phase / execution context
//a=10
//b=20
//demo -> {new variable + execution thread} - again from same memory creation phase
//demo = 30

//switch case

const day = 2
switch (day) {
  case 1:
    console.log(day)
    break;
  case 2:
    console.log("case 2")
    // break;
  case 3:
    console.log("case 3")
    break;

  default:
    console.log("default")
    break;
}


