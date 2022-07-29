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

// console.log(myname); // Uncaught ReferenceError: myname is not defined
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

// hi html id element
console.log(hi); // <h1 id="hi">Hello World!</h1>
hi.innerHTML = "Love JS code;"


// ============================== Identifiers name conventions ===============================================

var access = true;
var _access = true;
var $access = true;
var access = false; // redeclare to override
var ACCESS = "Yes"

if ($access) {
    console.log("Has Access");
}
console.log(access);
console.log(ACCESS); // identifiers is a case-sensitive

var hasAccess = false;

if (hasAccess){
    console.log("Allow Access");
}
else {
    console.log("Access denied");
}

// ============================== var, let, const ===============================================


var assist;
assist = "laptop";
console.log(assist)
var assist = "macbook"

// let allow_access = false;
// let allow_access = true; // Uncaught SyntaxError: Identifier 'allow_access' has already been declared

// const allow_access = false;
// const allow_access = true; // Uncaught SyntaxError: Identifier 'allow_access' has already been declared

// console.log(has_errors); // Uncaught ReferenceError: has_errors is not defined

// console.log(style); // Uncaught ReferenceError: Cannot access 'style' before initialization
// let style = 'css';


// console.log(BLOOD_TYPE); // Uncaught ReferenceError: Cannot access 'BLOOD_TYPE' before initialization
// const BLOOD_TYPE = 'A+';

var company = "Google"; // global scope and added to window obj
console.log(window.company); // any variable using var added to window obj

window.company = "g00gle"
console.log(window.company);

let work = '8 Hours'; // global scope NOT added window obj
console.log(window.work); // undefined

const vacation = 'friday';
console.log(window.vacation); // undefined
// const vacation = 'test'; // Uncaught SyntaxError: Identifier 'vacation' has already been declared


// ============================== 14 - String Syntax And Character Escape Sequences ========================

console.log("Learn JS by examples");
console.log("Learn JS by 'examples'");
console.log('Learn JS by "examples"');
console.log("Learn JS by \"examples\"");
console.log("Learn JS by \\ \"examples\"");
console.log("Learn JS By\n\"examples\"");
console.log("Learn " +
    "JS " +
    "By " +
    "Example"); // Learn JS By Example

console.log("Learn \
JS \
By \
Example"); // Learn JS By Example


// ============================== 15 - Concatenation. ====================================

let love = "We Love";
let lang = "JS!";

console.log(love + lang);
document.write(love + lang + '<br>');
document.write(love + " " + lang);
console.log(love, lang); // We Love JS!

// ============================== 16 - Template Literals Template Strings ====================================

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a + " " + b + " " + c + " " + d); // Es5 ( old style )
console.log(`${a} ${b} ${c} ${d}`);
console.log(`${a} ${b} \n${c} ${d}`);
console.log(`${a} ${b}
${c} ${d}`); // the same of \n

console.log(`${a} ${b} "" ${c} ${d}`); // We Love JavaScript "" And Programming
console.log(`${a} ${b} \" ${c} ${d}`); // We Love JavaScript " And Programming
console.log(`${a} ${b} \ ${c} ${d}`); // We Love JavaScript  And Programming
console.log(`${a} ${b} \\ ${c} ${d}`); // We Love JavaScript \ And Programming
console.log(`${a} ${b} ${c} ${d}`);

console.log(`Salary base is ${salary} with bonus ${salary + salary * 0.2}`)
let title = 'JS Practical Course';
let desc = "JS bootcamp from zero to expert";
let markup = `
  <div class="card">
    <div class="child">
      <h2 style="color:red;">${title}</h2>
      <p style="color:blue;">${desc}</p>
    </div>
  </div>
`;

document.write(markup);

// ============================== 17 - Variable And Concatenation Challenge ====================================



// ============================== 18 - Arithmetic Operators ====================================================


console.log(10 + 20);
console.log(10 + "JavaScript");

console.log(10 - 20);
console.log(10 - "JavaScript"); // NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);
console.log(Math.floor(20 / 3)); // to int
console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1



console.log((15.678).toFixed()) // 16
console.log((15.678).toFixed(2)) // 15.68


// ==============================19 - Unary Plus And Negation Operators =======================================
console.log(+100); // 100 number
console.log(+"100") // 100 number
console.log(+"-100") // -100 number
console.log(+"test100") // NaN
console.log(+"test") // NaN
console.log(+"100.55") // 100.55 number
console.log(+0xff) // 255 number  from Hex to decimal
console.log(+0b101) // 5 number   from binary to decimal
console.log(+null) // 0
console.log(+false) // 0
console.log(+true) // 1
console.log("=======================================")
console.log(-100); // -100 number
console.log(-"100") // -100 number
console.log(-"-100") // 100 number
console.log(-"test100") // NaN
console.log(-"test") // NaN
console.log(-"100.55") // -100.55 number
console.log(-0xff) // -255 number  from Hex to decimal
console.log(-0b101) // -5 number   from binary to decimal
console.log(-null) // -0
console.log(-false) // -0
console.log(-true) // -1

// Casting using Number

console.log(Number("243")); // 243 number
console.log(Number("243") + 10); // 253 number


console.log("=======================================")


// ==============================20 - Type Coercion =======================================
let user_id = "100";
let user_nid = 20;
let empty = ""
let is_active = true;

console.log(user_id + user_nid) // string ---> 10020
console.log(+user_id + user_nid) // number ---> 120
console.log(Number(user_id) + user_nid) // number ---> 120
console.log(user_id -  user_nid) // 80 number
console.log(user_nid -  user_id) // -80 number
console.log(user_nid - empty) // 20 number  ---> empty acts like 0
console.log(user_nid + empty) // 20 string  ---> ---> empty acts like empty string actually
console.log(user_nid + +empty) // 20 number  ---> empty converts to 0 after casting from string to 0 using +
console.log(false - true) // 0 - 1 = -1 number
console.log(false - -true) // 0 - -1 = 1 number
console.log(user_id + is_active) // "100" + true == 100true string
console.log(user_nid + is_active) // 20 + 1 == 21 number
console.log(user_id + user_nid + is_active) // acts like "100" + "20" + "true" == 10020true string
console.log(+user_id + user_nid + is_active) // 100 + 20 + 1 = 121 number



// ==============================  21 - Assignment Operators =======================================

let row = 10;
row = row + 20 // 10 + 20
console.log(row); // 30

let cols = 5;
cols = 7;
console.log(cols);
let tasks = 9
tasks += 1 // tasks = tasks + 1 ---> tasks = 9 + 1 = 10
console.log(tasks);
tasks -= 4
console.log(tasks); // 6
tasks /= 2 // 6 / 2 = 3
console.log(tasks); // 3




// ==============================  23 - Number  ==============================================

console.log(1000000);
console.log(1_000_000);
console.log(1e6); // 1 * 10 ^ 6 = 1000000 = 1M
console.log(10 ** 6); // 1 * 10 ^ 6 = 1000000 = 1M
console.log(1000000.00); // int number 1000000 NOT LIKE python
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 234234);

// ==============================  24 - Number Methods  =======================================

console.log((100).toString()) // "100"
console.log(100..toString()) // "100"
console.log(100.11.toString()) // "100.11"
let x = 19;
console.log(x.toString()) // "19"

let wrong_answers = 56.87867868
console.log(wrong_answers.toFixed(3)); //  56.879  // 3 means digits after point
console.log(56.87867868.toFixed(3))

// cast from string to number

console.log(parseInt("100.9")) // 100
console.log(parseInt("100")) // 100
console.log(parseFloat("100")) // 100
console.log(parseFloat("100.9")) // 100.9

console.log(+"100") // 100
console.log(Number("100")) // 100

console.log(+"100 Osama") // Nan
console.log(Number("100 Osama")) // Nan

// include first number
console.log(parseInt("100 Test")) // 100
console.log(parseInt("100 Test 200")) // 100
console.log(parseInt("Test 100 Test")) // NaN

console.log(Number.isInteger("100")) // false
console.log(Number.isInteger(100)) // true
console.log(Number.isInteger(100.0)) // true
console.log(Number.isInteger(100.1)) // false
console.log(Number.isNaN(100.1)) // false
console.log(Number.isNaN(100)) // false
console.log(Number.isNaN("Test 100")) // false
console.log(Number.isNaN("Test" / 100)) // true
// ============================== =======================================



// ==============================  25 - Math Object =======================================

console.log(Math.round(99.2)) // 99
console.log(Math.round(99.5)) // 100
console.log(Math.round(99.6)) // 100 بيقرب على اساس الرقم العشرى
console.log(Math.floor(88.7)) // 88 // بينزل بغض النظر عن الرقم العشرى
console.log(Math.ceil(88.1)) //   89 بيزود بغض النظر عن الرقم العشرى

console.log(Math.min(6, 5, 10, 3, 8, 9)) // 3
console.log(Math.max(6, 5, 10, 3, 8, 9)) // 10
console.log(Math.pow(2, 5)) // 32 = 2 ^ 5 = 2 ** 5
console.log(2 ** 5) // 32 = 2 ^ 5 = 2 ** 5
console.log(Math.random())
console.log(Number("32.45")) // 32.45 number
console.log(parseInt("32.45")) // 32 number
console.log(parseFloat("32.45")) // 32.45 number
console.log(Math.trunc("32.45")) // 32 number
console.log(Math.trunc(32.45)) // 32 number


// ============================== 26 - Number Challenge =======================================




// ==============================19 - Unary Plus And Negation Operators =======================================



// ==============================19 - Unary Plus And Negation Operators =======================================




// ==============================19 - Unary Plus And Negation Operators =======================================



// ==============================19 - Unary Plus And Negation Operators =======================================

























