import {Random} from "./random.js";
console.log("Hello!");
let welcome = "Hello JS";
// alert("Js Bootcamp");
// alert(32);
// alert(welcome);

let greetings = ["Welcome JS", "Hi JS Bootcamp", "Welcome Web Developer"]
// let greetings = []
for (let i = 0; i < 10; i++) {
    console.log(new Random().choice(greetings));
}
