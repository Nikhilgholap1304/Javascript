// JavaScript label statement is used to label a block of code. 

// A labeled statement can be used with loops and control flow statements to provide a target for the break and continue statements.

// Syntax:

// Label: statement (loop or block of code)

// Keywords to be used:
// Label: A unique string that is Used to define the name of the block or loop.
// Statement: It can be a loop or block.
// Break: Used to terminate the loop or block of code.
// Continue: Used to terminate or jump from the current iteration of the loop.


// Example 1: Using the break keyword with labeled loops. Users can terminate the outer loop from the inner loop using the label.

// let sum = 0, a = 1;

// Label for outer loop
// outerloop: while (true) {
//     a = 1;

//     // Label for inner loop
//     innerloop: while (a < 3) {
//         sum += a;
//         if (sum > 12) {

//             // Break outer loop from inner loop
//             break outerloop;////////////////////////////////////////////
//         }
//         console.log("sum = " + sum);
//         a++;
//     }
// }

//e.g 2 : let sum = 0, a = 1;

// Label for outerloop

// outerloop: while (sum < 12) {
//   a = 1;

//     // Label for inner loop
//     innerloop: while (a < 3) {
//       sum += a;
//       if (a === 2 && sum < 12) {
//             // Jump to outer loop from inner loop
//             continue outerloop;////////////////////////////////////////
//       }
//       console.log("sum = " + sum + " a = " + a);
//       a++;
//     }
// }

////////////////////////////////////////
// e.g 3
// blockOfCode: {
//   console.log('This part will be executed');
//   break blockOfCode;
//   console.log('this part will not be executed');
// }
// console.log('out of the block');

//e.g 4

myLabel: function myLabeledFunction() {
  console.log("This is a labeled function.");
}

// Calling the labeled function
myLabeledFunction();