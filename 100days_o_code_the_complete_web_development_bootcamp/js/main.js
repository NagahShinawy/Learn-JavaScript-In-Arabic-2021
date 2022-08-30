import {Random} from "./random.js";
console.log("Hello!");
let welcome = "Hello JS";
// alert("Js Bootcamp");
// alert(32);
// alert(welcome);

let greetings = ["Welcome JS", "Hi JS Bootcamp", "Welcome Web Developer"]
let names = ["Alex", "James", "John", "Adam"];
// let greetings = []
for (let i = 0; i < 10; i++) {
    console.log(new Random().choice(greetings));
}
console.log("*".repeat(30));
// console.log(names.values());


for (const name of names) {
    console.log(`Hi ${name}`); // print name for each line
}

console.log("*".repeat(30));


for (const name in names) {
    console.log(`Hi ${name}`); // print index for each line
}