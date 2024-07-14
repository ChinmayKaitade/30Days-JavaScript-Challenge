// Activity 1: Operators ✅

// - Task 1: Write a program to add two numbers and log the result to the console.
let num1 = 2;
let num2 = 3;
let ans = num1 + num2;
console.log("Addition is :", ans);

// - Task 2: Write a Program to subtract two numbers and log the result to the console.
let num3 = 15;
let num4 = 5;
let ans2 = num3 - num4;
console.log("Subtraction is :", ans2);

// - Task 3: Write a program to multiply two numbers and log the result to the console.
let num5 = 3;
let num6 = 3;
let ans3 = num5 * num6;
console.log("Multiplication is :", ans3);

// - Task 4: Write a program to divide two numbers and log the result to the console.
let num7 = 20;
let num8 = 10;
let ans4 = num7 / num8;
console.log("Division is :", ans4);

// - Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let num9 = 20;
let num10 = 10;
let ans5 = num9 % num10;
console.log("Remainder is :", ans5);

// ********************************* //

// Activity 2: Assignment Operators ✅

// - Task 6: Use the `+=` operator to add a number to a variable and log the result to the console.
let number4 = 25;
number4 += 5;
console.log("Addition using Assignment Operator is :", number4);

// - Task 7: Use the `-=` operator to subtract a number from a variable and log the result to the console.
let value = 30;
value -= 5;
console.log("Subtraction using Assignment Operator is :", value);

// ********************************* //

// Activity 3: Comparison Operators ✅

// - Task 8: Write a program to compare two numbers using `>` and `<` log the result to the console.
let a = 10;
let b = 20;

let GreaterThan = a > b;
let LessThan = a < b;

console.log(a + " > " + b + ": " + "a Greater than b");
console.log(a + " < " + b + ": " + "a Less than b");

// - Task 9: Write a program to compare two numbers using `>=` and `<=` log the result to the console.
let c = 10;
let d = 10;
let c2 = 10;
let d2 = 5;

let GreaterThanEqual = c >= d;
let LessThanEqual = c <= d;

let GreaterThanEqual2 = c2 >= d2;
let LessThanEqual2 = c2 <= d2;

console.log(c + " >= " + d + ": " + c + " Greater than or Equal to " + d);
console.log(c + " <= " + d + ": " + c + " Less than or Equal to " + d);

console.log(c2 + " >= " + d2 + ": " + c2 + " Greater than or Equal to " + d2);
console.log(c2 + " <= " + d2 + ": " + d2 + " Less than or Equal to " + c2);

// - Task 10: Write a program to compare two numbers using `==` and `===` log the result to the console.
let value2 = 10;
let value3 = "10";

let isEqual = value2 == value3;
let isStrictlyEqual = value2 === value3;

console.log(value2 + " == " + value3 + ": " + isEqual);
// In `==` it checks only value. So it is Equal that why it is showing value as true.
console.log(value2 + " === " + value3 + ": " + isStrictlyEqual);
// In `===` it checks both datatype and value, so 10 === "10" is not equal i.e. it is not equal to each other hence it is showing value as false.

// ********************************* //

// Activity 4: Logical Operators ✅

// - Task 11: Write a program that uses the `&&` operator to combine two conditions and log the result to the console.
let e = 10;
let f = 25;
let g = 30;

let condition1 = e < f && f < g;

console.log(
  "(" + e + " < " + f + ") && (" + f + " < " + g + "): " + condition1
);

// - Task 12: Write a program that uses the `||` operator to combine two conditions and log the result to the console.
let x = 25;
let y = 15;
let z = 40;

let condition2 = x > y || y > z;

console.log(
  "(" + x + " > " + y + ") || (" + y + " > " + z + "): " + condition2
);

// - Task 13: Write a program that uses the `!` operator to negate condition and log the result to the console.
let val = 20;
let val2 = 30;

let condition3 = val > val2;
let negatedCondition = !condition3;

console.log(val + " > " + val2 + ": " + condition3);

console.log("!(" + val + " > " + val2 + "): " + negatedCondition);

// ********************************* //

// Activity 5: Ternary Operator ✅

// - Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let numCheck = -4;

let result = numCheck >= 0 ? "Positive or Zero" : "Negative";

console.log(numCheck + " is " + result);

// ********************************* //

// ### Feature Request 🙇‍♂️

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
let number1 = 20;
let number2 = 7;

let addition = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
let remainder = number1 % number2;

console.log("Addition: " + number1 + " + " + number2 + " = " + addition);
console.log("Subtraction: " + number1 + " - " + number2 + " = " + subtraction);
console.log(
  "Multiplication: " + number1 + " * " + number2 + " = " + multiplication
);
console.log("Division: " + number1 + " / " + number2 + " = " + division);
console.log("Remainder: " + number1 + " % " + number2 + " = " + remainder);

// 2. Comparison and Logical Operators: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
let number5 = 15;
let number6 = 10;

// Comparison operators
console.log(number5 + " > " + number6 + ": " + (number5 > number6));
console.log(number5 + " < " + number6 + ": " + (number5 < number6));
console.log(number5 + " >= " + number6 + ": " + (number5 >= number6));
console.log(number5 + " <= " + number6 + ": " + (number5 <= number6));
console.log(number5 + " == " + number6 + ": " + (number5 == number6));
console.log(number5 + " === " + number6 + ": " + (number5 === number6));

// Logical operators
let condition4 = number1 > number2 && number1 < 20;
let condition5 = number1 < number2 || number2 > 5;

console.log(
  "(" + number1 + " > " + number2 + ") && (" + number1 + " < 20): " + condition4
);
console.log(
  "(" + number1 + " < " + number2 + ") || (" + number2 + " > 5): " + condition5
);

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let int = -1;

let result2 = int >= 0 ? "Positive or Zero" : "Negative";

console.log(int + " is " + result2);


