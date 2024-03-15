//Scopes --> current context of execution in which values and expressions are visible

//global scope --> also works across the different files

let a = 100;
let b = 0;

var c = 2;

{
  let a = 2;
  let c = 0;
}

{
  let a = 2;
  let c = 0;
}
