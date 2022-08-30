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

let hobbies = ["Football", "Reading", "Music", "Cooking"];

alert(`${hobbies}, ${hobbies.length}`);

for (const hobby of hobbies) {
    console.log(hobby);
}

let profile = {
    username: "John",
    dob: "1999-01-01",
    gender: "Male",
    about: "Some info",
    hobbies: ["Coding", "Reading", "Football"],
    job: {
        salary: 3000,
        company: "Google",
    }
}

console.log(profile);
console.log(profile.username);
console.log(profile.job.salary);
console.log(profile.job.company);