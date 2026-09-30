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
//                                             Challenge 3. 
//                                             Challenge 4. 
//                                             Challenge 5. 
//                                             Challenge 6. 
//                                             Challenge 7. 
//                                             Challenge 8. 
//                                             Challenge 9. 
//                                             Challenge 10. 