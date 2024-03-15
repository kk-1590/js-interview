//undefined
// console.log(a);
// f();

// var a = 10;

// console.log(a);

// function f() {
//   console.log("Hello");
// }

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// z();

// console.log("Start");

// setTimeout(function cb() {
//   console.log("Callback");
// }, 0);

// console.log("End");

let arr = ["Akshay", "Aditya"];
let object = {
  name: "Akshay",
  city: "Dehradun",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

let obj = {
  id: 1,
  name: "kaerik",
  toString: function () {
    return `${this.id} and name is ${this.name}`;
  },
};

Object.prototype.myStr = function () {
  console.log(`${this.id} and ${this.name}`);
};

// console.log(obj.toString());
obj.myStr();
