//                                             Challenge 1. 

// var- the old/original way to declare a variable and you can redeclare the same name eg.
var car = "mercedes benz";
var car = "bmw";
console.log(car)

// let- declaring a variable that can be changed/reassigned later  e.g
let color = "Blue";
color = "Red";
console.log(color)

// const - declaring a variable that cannot be changed/reassigned later  e.g
const idNumber = 9701010000000;
console.log(idNumber);

// Declaring 8 variables with a mixture of const and let

// A string with full name. using const because my name should not change it should ramain my name
const fullName = "Lesedi Modikwe";

//  A number with my age. using let because age changes every year
let age = 27;

// A boolean indicating whether i enjoy JavaScript so far. using let because the feeling might change at some point
let isEnjoyingJavacript = true;

// A number with decimals. a const because i dont want the decimal to be changed later on
const float = 85.90;

// A variable holding the value NaN (create it using Number('hello') or 0 divided by 0). cane be reassigned with other values
let nonNumber = Number('hello');
let anothorNaN = 0/0;

// A variable holding Infinity (using 1 divided by 0, or the Infinity keyword).
// dividing a none zero num by zero will be infinity, i want the values to be reassigned
let division = 1 / 0;
// using infinity key word
let keyword = Infinity;

// A variable holding Number.MAX_SAFE_INTEGER., i dont want the biggest inter to be changed hence const
const num = Number.MAX_SAFE_INTEGER;

// A variable set explicitly to null.since its explicitly set to null, i used const so that it cannot be reassigned 
const noneExisting = null;

//1 what is the single most important difference between var and let?
// with var you can redeclare the same name but with let you cannot

//2   Why should you default to const, and only use let when you know a value must change
//so that the important values cannot be reassigned in case you do so by mistake as your code is growing and you run out of names for your variable

// 3 Why is naming a variable usrNm bad? What would you rename it to, and why does naming matter for a professional codebase?
// because its difficult to read or understand, i would rename it to userName, because you are not the only person who is going to read your code


//                                             Challenge 2. 

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof isEnjoyingJavacript);
console.log(typeof float);
console.log(typeof nonNumber);
console.log(typeof division);
console.log(typeof num);
// i didnt know that type of null is object, but i know understand that it is because thats a bug from when javascript was created
console.log(typeof noneExisting);

console.log(typeof undefined);
console.log(typeof null);
// type of NaN is number because its a special value of the number type, not its own type and NaN is not equal to anything
console.log(typeof NaN);
console.log(typeof "42");
console.log(typeof (typeof 42));
// i thought it would be an array but its object, because anything that is not a primitive etc falls under objects, so arrays are special objects
console.log(typeof [1, 2, 3]);
console.log(typeof function() {});

// type of NaN is number because its a special value of the number type, not its own type and NaN is not equal to anything and type of null is an object because thats a bug from when javascript was created


//                                             Challenge 3. 

// a function to comment out the section header
function section(title) {
  console.log(`\n===== ${title} =====`);
};

// Conversion A
let a = "123";

// a function to log the results and the typeoff
function log(result) {
    console.log(result, typeof result)
};

// the actual header
section("a  conversion");

log(Number(a));
// redix 10, this tell pass int to read this as a normal decimal number
log(parseInt(a, 10));
log(parseFloat(a));
log(Boolean(a));
log(String(a));

// conversion B
let b = "3.14";

function log(result) {
    console.log(result, typeof result)
};

section("b conversion");

log(Number(b));
log(parseInt(b, 10));
log(parseFloat(b));
log(Boolean(b));
log(String(b));

// conversion c
let c = "hello";

function log(result) {
    console.log(result, typeof result)
};

section("c conversion");

log(Number(c));
log(parseInt(c, 10));
log(parseFloat(c));
log(Boolean(c));
log(String(c));

// convertion d
let d = "42abc";

function log(result) {
    console.log(result, typeof result)
};

section("d conversion");

log(Number(d));
log(parseInt(d, 10));
log(parseFloat(d));
log(Boolean(d));
log(String(d));

// e convertion
let e = "";

function log(result) {
    console.log(result, typeof result)
};

section("e conversion");

log(Number(e));
log(parseInt(e, 10));
log(parseFloat(e));
log(Boolean(e));
log(String(e));

// f convertion
let f = 0;

function log(result) {
    console.log(result, typeof result)
};

section("f conversion");

log(Number(f));
log(parseInt(f, 10));
log(parseFloat(f));
log(Boolean(f));
log(String(f));

// g convertion
let g = null;

function log(result) {
    console.log(result, typeof result)
};

section("g conversion");

log(Number(g));
log(parseInt(g, 10));
log(parseFloat(g));
log(Boolean(g));
log(String(g));

// h convertion
let h = undefined;

function log(result) {
    console.log(result, typeof result)
};

section("h conversion");

log(Number(h));
log(parseInt(h, 10));
log(parseFloat(h));
log(Boolean(h));
log(String(h));

// 1 NaN number and 42 number
// when you dont want an integer
// 0 it will cause a bug because a blank input look like valid zero



//                                             Challenge 4. 
//                                             Challenge 5. 
//                                             Challenge 6. 
//                                             Challenge 7. 
//                                             Challenge 8. 
//                                             Challenge 9. 
//                                             Challenge 10. 