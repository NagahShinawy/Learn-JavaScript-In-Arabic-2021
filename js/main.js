console.log("Hello World!");
const DAYS = 365;
console.log(DAYS);

// wait the window to load
// when page load, run and execute code, but best practice to add js code at the end of html page
// window.onload = function () {
//     document.querySelector("h1").style.color = "red";
//
// };

// ============================== console methods =======================================================


window.alert("Have a nice day!");
document.write("<h1>JS is cool!</h1>", "<h1>Learn JS</h1>");
console.log("Learn JS by example");
console.error("Something happened!");
console.table(['John', "Smith", "Leon", "Eric"]);
console.table([
    {"name": "John", "age": 20, "salary": 4000,},
    {"name": "Smith", "age": 25, "salary": 2000,},
    {"name": "Sara", "age": 21, "salary": 3000,},
])


// ============================== Directives ============================================================


console.log("JS is %ccool", "color:red;");
console.log("I %cLove %cJS", "color:red; font-size:30px;", "color:blue;font-size:40px;");

let userName = "John";
console.log("Hello " + userName);  // old code
console.log(`Hello ${userName}`);  // ES6 code


 // ============================== Easy String Concatenation ============================================


let age = 10;
let id = 2012030230;
let firstname = "John", lastname = "Smith";

let info = `Full name: ${firstname} ${lastname}\nID: ${id}\nAge: ${age}`;
console.log(info);
