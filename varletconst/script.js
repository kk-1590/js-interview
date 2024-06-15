//var vs let vs const
//Scope

{
  let a = 5;
}

// var a = 5;
// console.log(a);

//variable shadowing

// function test() {
//   let a = "Hello";

//   if (true) {
//     let a = "World";
//     console.log(a);
//   }
//   console.log(a);
// }

//World
//Hello

// shadowing of var with let

// function test() {
//   var a = "Hello";

//   if (true) {
//     let a = "World";
//     console.log(a);
//   }
//   console.log(a);
// }
//World
//Hello

// function test() {
//   let a = "Hello";

//   if (true) {
//     var a = "World";
//     console.log(a);
//   }
//   console.log(a);
// }

//error --> illegal shadowing

// test();

//shadowing of var with let is possible
//but shadowing of let with var is not possible and is called illegal shadowing.

//Declaration
// const a;
// const b;
//error

//Declaration with initialization
const a = 10;

//Re-initialization
// const c = 10;
// c = 11;
//error

//Hoisting
console.log(count);
var count = 1;

//hoisting possible with var and function declaration not expressions
//hositing also possible with let and const but in th Temporal Dead ZOne
// There's a name for the period during execution where let / const variables are hoisted but not accessible: it's called the Temporal Dead Zone.
// The temporal dead zone (TDZ) is a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value. During this phase, accessing or using the variable will result in a ReferenceError.
