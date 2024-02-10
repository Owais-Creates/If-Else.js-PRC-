// // Here i am gonna solve questions on "IF-ELSE". 

// // Q1 - Write a program which accepts two gender and prints the greeting message  based on the given gender.

// let gender = prompt("Enter Your Gender");

// if (gender === "male " || gender === "Male " || gender === "MALE ") {
//   console.log("Welcome sir");
// } else if (gender === "female" || gender === "Female" || gender === "FEMALE") {
//   console.log("welcome madam");
// } else {
//   console.log("please enter a valid gender");
// }

// // ---------------------------------------------------------------------------------------------------

// // Q2 - Write a program which accepts a positive integer and tells whether it is a even or odd number.

// let integer = parseInt(prompt("enter a positive integer"))

// if (integer < 0) {
//   console.log("please enter a valid positive integer");
// } else if (integer % 2 == 0) {
//   console.log(`${integer} is a even number`);
// } else {
//   console.log(`${integer} is a odd number`);
// }

// // ---------------------------------------------------------------------------------------------------


// // Q3 - Write a program which accepts a positive integer and tells whether it is a even or odd number.

// let user = prompt("Please enter a valid name")
// let age = prompt("Please enter a valid age")

// if (age < 18 || age > 100) {
//   console.log(`${user} is not eligible to vote`);
// } else {
//   console.log(`${user} is eligible to vote`);
// }

// // ---------------------------------------------------------------------------------------------------


// // Q4 - Write a program which accepts a alphabetic character and tells whether it is a vowel or a consonant.

// let alphabet = prompt("Enter an alphabetic character").toLowerCase();

// if (alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u') {
//   console.log(`${alphabet} is vowel`);

// } else if (alphabet.length > 1) {
//   console.log(`Please enter a valid alphabetic character "${alphabet}" is neither a vowel nor a consonant`);

// } else if (!isNaN(alphabet)) {
//   console.log(`You entered a numeric value instead of a alphabetic value`);

// } else {
//   console.log(`${alphabet} is consonant`);
// }

// ---------------------------------------------------------------------------------------------------

// Q5 - Write a program which accepts 3 number and prints them in ascending order.

// let ascNum1 = parseInt(prompt('Enter the first number'));
// let ascNum2 = parseInt(prompt('Enter the second number'));
// let ascNum3 = parseInt(prompt('Enter the third number'));

// if (isNaN(ascNum1) || isNaN(ascNum2) || isNaN(ascNum3)) {
//   console.log('Invalid input');
// } else if ((ascNum1 < ascNum2) && (ascNum1 < ascNum3)) {
//   if (ascNum2 < ascNum3) {
//     console.log(`The numbers are ${ascNum1}, ${ascNum2}, ${ascNum3}`);
//   } else {
//     console.log(`The numbers are ${ascNum1}, ${ascNum3}, ${ascNum2}`);
//   }
// }

// else if (ascNum2 < ascNum1 && ascNum2 < ascNum3) {
//   if (ascNum1 < ascNum2) {
//     console.log(`The numbers are ${ascNum2}, ${ascNum1}, ${ascNum3}`);
//   } else {
//     console.log(`The numbers are ${ascNum2}, ${ascNum3}, ${ascNum1}`);
//   }
// }

// else {
//   if (ascNum1 <= ascNum2) {
//     console.log(`The numbers are ${ascNum3}, ${ascNum1}, ${ascNum2}`);
//   } else {
//     console.log(`The numbers are ${ascNum3}, ${ascNum2}, ${ascNum1}`);
//   }
// }

// INPUT - 3, 2, 1
// OUTPUT - 1, 2, 3

// ---------------------------------------------------------------------------------------------------

// Q5 - Write a program which accepts 3 number and prints the biggest one out of them.

// let digit1 = parseInt(prompt("Enter the first number"));
// let digit2 = parseInt(prompt("Enter the second number"));
// let digit3 = parseInt(prompt("Enter the third number"));

// if (isNaN(digit1) || isNaN(digit2) || isNaN(digit3)) {
//     console.log(`Please enter a valid digit`);

// } else if ((digit1 == digit2) && (digit1 == digit3)) {
//     console.log(`All digits are equal`);

// } else if ((digit1 > digit2) && (digit1 > digit3)) {
//     console.log(`${digit1} is bigger than ${digit2} ${digit3}`);

// } else if ((digit2 > digit1) && (digit2 > digit3)) {
//     console.log(`${digit2} is bigger than ${digit1} ${digit3}`);

// } else {
//     console.log(`${digit3} is bigger than ${digit1} ${digit2}`);
// }


// Q6 Write a program that takes a password as input and prints whether it is weak, medium, or strong based on the following criteria:

// Weak: Less than 6 characters
// Medium: 6-10 characters
// Strong: More than 10 characters, containing at least one uppercase letter, one lowercase letter, one digit, and one special character.

// const uppercase = /[A-Z]/;
// const lowercase = /[a-z]/;
// const digit = /\d/;
// const specialChar = /\W/;

// const password = prompt("Please enter you password for the strength test");

// if ( password.length < 6 ){
//     console.log(`Password has weak strength`);

// }else if ( (password.length >= 6 && password.length<=10 ) ){
//     console.log(`Password has medium strength`);

// }else if( uppercase.test(password) && lowercase.test(password) && digit.test(password) && specialChar.test(password) ){
//     console.log( `Password has strong strength`);

// }else{
//     console.log(`Please enter a uppercase, lowercase, digit and special character all together`)
// }

// ---------------------------------------------------------------------------------------------------

// Q7 Write a program that takes the total purchase amount as input and prints the discounted price based on the following conditions:

// If the total purchase amount is less than $100, no discount is applied.
// If the total purchase amount is between $100 and $500 (inclusive), apply a 10% discount.
// If the total purchase amount is greater than $500, apply a 20% discount.\

// let purchaseAmount = parseInt(prompt("Enter  your total purchase amount"));
// let discountedAmount = 0;
// let discountedPrice = 0;

// if (purchaseAmount < 1) {
//     console.log("Please enter the valid purchase amount");

// } else if (purchaseAmount < 100 && purchaseAmount > 1) {
//     console.log("No Discount Applied because the amount is less than 100RS");

// } else if (purchaseAmount >= 100 && purchaseAmount <= 500) {
//     discountedAmount = purchaseAmount * (10 / 100);
//     discountedPrice = purchaseAmount - discountedAmount;
//     console.log(`The discounted price after the Discount is ${discountedPrice} $`);

// } else {
//     discountedAmount = purchaseAmount * (20 / 100);
//     discountedPrice = purchaseAmount - discountedAmount;
//     console.log(`The discounted price after the Discount is ${discountedPrice} $`);

// }