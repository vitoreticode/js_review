// typeof operator ===> Returns a string of data type primitive
// instanceof operator ===> Returns a boolean value mathces the data typeof

let x = "something"
console.log(typeof x)

x = 1
console.log(typeof x)

x = 1 + "something"
console.log(typeof x)

// Equality in JS

// Non literal
let y = 0 == ""
console.log(y)

// Literal
y = 0 === ""
console.log(y)

const people = ["Aaron","Mel","John"]
const one = 1
const str = "Hello World"
const b = true
const person = {
    firstName: "Aaron",
    lastName: "Mel",
}

function sayHello(person){
    console.log(`Hello ${person.firstName}`)
}

console.log("--- typeof ---")
console.log(typeof people)
console.log(typeof one)
console.log(typeof str)
console.log(typeof b)
console.log(typeof person)
console.log(typeof sayHello)

console.log("--- instanceof ---")
console.log(people instanceof Array)
console.log(one instanceof Number)
console.log(str instanceof String)
console.log(b instanceof Boolean)
console.log(person instanceof Object)
console.log(sayHello instanceof Function)

