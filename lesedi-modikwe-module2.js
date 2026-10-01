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

// this will print "5"3, type of will be a number, because the number its what was added
"5" + 3
//  i was wrong, it will print "53" because + is acting as a string concatination so 3 becomes a string

// it will print 2, number, because string is converted into a number
"5" - 3;

// 10,number, because * work with both numbers
"5" * "2";

// 2, number, because true by default convert to 1
true + 1;

// 2 , number because true will be one and its on the left and its will add whats on the right 
true + "1";
// "true1", string, because + will turn boolen to a string

// 0, number, because false default to zero and null is zero
false + null;

// NaN, Number, because NaN is still a number
null + undefined;

// infinity, number, because we are deviding a nin zero number by zer
1 / 0;

// NaN , number, because mathematically its undefined
0 / 0;

// NaN, number , because - forces numeric conversion
"abc" - 1;

// empty string, string by dafault empty array is a string
[] + [];

//  "12", string , 
[1] + [2];

//                                             Challenge 5. 
section("challenge 5")
// variable with Sarah as a value
var userName = "Sarah";

// variable with 25 as a value
var userAge = "25";
// fixed
var userAge = 25;
// fixed the value fron string to number

//  variable with decimal as a datatype
var userScore = 85.5;

//  variable with a string as a datatype
var scoreAdjustment = "10";
// fixed
var scoreAdjustment = 10;
// fixed the value fron string to number

// adding userScore and scoreAdjustment then console loging new score
var newScore = userScore + scoreAdjustment;
console.log("New score: " + newScore);

//  variable with string as a datatype
var salary = "50000";
// fixed
var salary  = 50000;
// fixed the value fron string to number


// //  variable with 0.15 as a value
var TAX_RATE = 0.15;

// tax calculation multiplying salary by taxrate
var tax = salary * TAX_RATE;
console.log("Tax: R" + tax);

// year of retirement calculations
var yearsUntilRetirement = 65 - userAge;
console.log("Years until retirement: " + yearsUntilRetirement);

// adding user age and userscore
var totalAgeAndScore = userAge + userScore;
console.log(totalAgeAndScore);

// code to show that its not admin
var isAdmin = "false";
console.log("Admin: " + Boolean(isAdmin));

// fixed
var isAdmin = "false";
console.log(`ADMIN: ${isAdmin}`);
// changed the + Boolean(isAdmin) because it was making our boolean true


// problems
// 1, age value is initialized as a string, and it should be a number
// 2, score adjastment value is initialized as a string, and it should be a number
// 3, newScore will give us a string as an answer because + will concatinate everything into  a string
// 4, salary value is initialized as a string, and it should be a number
// 5; yearsUntilRetirement will log a NaN because 65 is number and userAge is a string
// 6; totalAgeAndScore everything will be concatinated to a string
// 7, it will result into true


//                                             Challenge 6. 
section("challenge 6")

console.log(0.1 + 0.2)
console.log(0.3 - 0.1)
console.log(0.1 * 3)
console.log(0.1 + 0.2 === 0.3)

// it behaves this way because javascript uses binary as a as floating points
// computers store numbers in base 2,
// because they follow the same IEEE 754 standard. 

// If the gap between the two numbers is smaller than EPSILON, they are "equal enough"
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);
// (0.1 + 0.2) - 0.3 is the tiny leftover error (about 5.5e-17).
// Math.abs(...) removes the minus sign, so only the size of the gap counts.
// Number.EPSILON is the smallest difference between 1 and the next number
// < Number.EPSILON checks that the gap is smaller than 2.22e-16, which counts as "close enough".


//                                             Challenge 7. 
section("section/ challenge 7")

var p = "199.99"
var q = "3"
var t = 0.15
var sub = p * q

var tax = sub * t
var tot = sub + tax
var r = "Total: " + tot
console.log(r)

// fixed
section("challenge 7 fixed")

const firstNum = "199.99";
const newNum1 = Number(firstNum);

const secondNum = "3";
const newNum2 = Number(secondNum);

const thirdNum = 0.15;

const sum1 = newNum1 * newNum2;

const tax1 = sum1 * thirdNum;
const combining = sum1 + tax1;
const total = (`TOTAL: ${combining}`);
console.log(total)
//  i changed all variables names with appropriate ones for readability of the code
// i changed all strings that were supposed to be numbers to be numbers, sice we are dealing with calculations, a number should stay a number
// used const because var its an old way of declaring a variable
// i also used template literals

//                                             Challenge 8. 

section("challenge 8")

const productName = "Whey Protien";
const unitPrice = 1000;
const quantityInput = "4";
const taxRate = 0.15;

// casting quantityInput to a number safely and storing the result in a new variable called quantity.
const quantity = Number(quantityInput);

// subtotal
const subtotal = unitPrice * quantity;

// tax
const tax2 = subtotal * taxRate;

// adding 
const adding = subtotal + tax;

// total
const total2 = (`TOTAL: ${adding}`)
console.log(total2);

// 2decimal places
const amount = Number(4089.9955)
console.log(amount.toFixed(2));


//                                             Challenge 9. 
section("challenge 9")

let mystery = "10"
let count = 5
let result = mystery / count
// number
console.log(typeof result)
// 2 because because division convert string to number
console.log(result)

let mystery2 = "10a"
let count2 = 5
let result2 = mystery2 / count2
// Number
console.log(typeof result2)
// NaN
console.log(result2)
// NaN because anyting + NaN is a NaN
console.log(result2 + 1)

let mystery3 = "10"
let result3 = mystery3 + 5 + 5
let result4 = 5 + 5 + mystery3
// "1055"
console.log(result3)
// "1010"
console.log(result4)


//                                             Challenge 10. 


// What is the SINGLE most important thing you understood about JavaScript's type system
// from this project?
// you need to always name your variables in a manner thats readable, and even how you declar the plays a huge role


// 2 Explain the difference between typeof and Number.isNaN, and give an example of when you
// would use each.
// typeof is when you want to know the data type of a certain variables value,
//  Number.isNaN is when you want to know if a certain variable is NaN or not, it will return true if its NaN and false if its not

// 3 Describe a realistic scenario in production code where forgetting to cast a value would
// cause a bug that a developer might not notice for a long time.
// For example, if a user inputs a string instead of a number for a quantity, and it's not cast to a number, any mathematical operations on it will result in unexpected behavior or errors.


// 4 In your own words: what is the difference between IMPLICIT and EXPLICIT type coercion?
// Give one example of each from your own work in this project.
// IMPLICIT type coercion happens automatically when JavaScript converts one data type to another without explicit instruction, eg 
console.log("5" + 3); // Here, the number 3 is implicitly coerced to a string, resulting in "53".

// EXPLICIT type coercion is when the developer manually converts a value from one data type to another using functions like Number() or parseInt(). eg
console.log(Number("5")); // Here, the string "5" is explicitly coerced to a number, resulting in 5.

// 5 If you had to teach Module 2 to another beginner tomorrow, which ONE concept would you
// emphasise as most easy to misunderstand? Why?
// Data types and type coercion, because it can lead to unexpected results if not properly understood, especially when dealing with operations that involve different data types.