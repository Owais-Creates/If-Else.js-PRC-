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

let ascNum1 = parseInt(prompt('Enter the first number'));
let ascNum2 = parseInt(prompt('Enter the second number'));
let ascNum3 = parseInt(prompt('Enter the third number'));

if (isNaN(ascNum1) || isNaN(ascNum2) || isNaN(ascNum3)) {
  console.log('Invalid input');
} else if ((ascNum1 < ascNum2) && (ascNum1 < ascNum3)) {
  if (ascNum2 < ascNum3) {
    console.log(`The numbers are ${ascNum1}, ${ascNum2}, ${ascNum3}`);
  } else {
    console.log(`The numbers are ${ascNum1}, ${ascNum3}, ${ascNum2}`);
  }
}

else if (ascNum2 < ascNum1 && ascNum2 < ascNum3) {
  if (ascNum1 < ascNum2) {
    console.log(`The numbers are ${ascNum2}, ${ascNum1}, ${ascNum3}`);
  } else {
    console.log(`The numbers are ${ascNum2}, ${ascNum3}, ${ascNum1}`);
  }
}

else {
  if (ascNum1 <= ascNum2) {
    console.log(`The numbers are ${ascNum3}, ${ascNum1}, ${ascNum2}`);
  } else {
    console.log(`The numbers are ${ascNum3}, ${ascNum2}, ${ascNum1}`);
  }
}

// INPUT - 3, 2, 1
// OUTPUT - 1, 2, 3


