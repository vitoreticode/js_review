// There is 3 different ways to declare variables in JS

var one = 1;
let two = 2;
const three = 3;

// VAR = Function scoped, can be  changed in scope, avaible before declaration
// LET = Block scoped, can be changed in scope, only avaible after the declaration
// CONST = Block scoped, cannot be changed, only avaible before the declaration

// Use const by default
// Use let in loops
// var there is no use anymore, prevent bugs

var hello = "Hello";
console.log(hello);

hello = "Hello World";
console.log(hello);

if (true) {
    let world = "Hello World";
    console.log(world)
}

const lucas = "Lucas"
console.log(lucas)