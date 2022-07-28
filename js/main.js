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

// ============================== Data types and Operators ===============================================

let name = "Eric";
let salary = 5000;
let bonus = 10.5
let names = ["John", "Smith", "Leon", "Adam"];
let userinfo = {
    "name": "Adam",
    "age": 23,
    "id": 5435345
};
cities = ["Cairo", "Alex", "SSH"];
console.log(typeof name);  // string
console.log(typeof(name));  // string
console.log(typeof salary);  // number
console.log(typeof bonus);  // number
console.log(typeof names);  // obj  ---> like list in python
console.log(typeof userinfo);  // obj  ---> like dictionary in python
console.log(typeof cities);  // obj  ---> array just like list in python

console.log(userinfo.age);  // access obj data, just like python dictionary.
console.log(userinfo.age > 18);

profile = {
    name: "John",
    city: "Alex",
    country: "Eg",
    isAdult: true,
};

console.log(profile);
console.log(profile.city);
console.log(profile.isAdult);
console.log(!profile.isAdult);
console.log(typeof profile.isAdult);
console.log(typeof null); // obj
console.log(typeof undefined); // undefined

console.log(typeof test); // undefined

// ============================== Variables ===============================================

var weekend = "Friday";

let UNDERAGE; // declaration
UNDERAGE = 18; // initialization

const ANNUAL_LEAVE = "Dec";

console.log(`Weekend is "${weekend}"`);

var annual = 600;  // declare
annual += 50
annual = annual + 50
console.log(annual);

// variables without var

fname = "Gero";
console.log(fname);

// multi var in same line
var start_date = "2020-01-01",
    end_date = "2022-12-31"

console.log(`From '${start_date}' to '${end_date}'`);
console.log(hi); // <h1 id="hi">Hello World!</h1>
hi.innerHTML = "Love JS code;"





