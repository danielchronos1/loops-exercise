//Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

let num = parseInt(prompt("Enter a number:"));
let sum = 0;

for (var i = 1; i <= num; i++) {
  sum += i;
}

console.log("The summation of numbers from 1 to", num, "is", sum);

//Request two numbers and find only their largest common divisor.

let number1 = parseInt(prompt("Enter the first number:"));
let number2 = parseInt(prompt("Enter the second number:"));

if (number1 < number2) {
    var temp = number1;
    number1 = number2;
    number2 = temp;
}
  
let commonDivisor = 0;
  
for (let i = 2; i <= number2; i++) {
    if (number1 % i === 0 && number2 % i === 0) {
        commonDivisor = i;
    }
}
  
console.log("The largest common divisor of", number1, "and", number2, "is", commonDivisor);

//Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.

let number = parseInt(prompt("Enter a number:"));

console.log("The divisors of", number, "are:");

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}

//Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

let digitNumber = prompt("Enter a number:"); 
let count = 0; 

let numberString = digitNumber.toString();

for (let i = 0; i < numberString.length; i++) {
  count++; 
}

console.log("The number of digits in " + digitNumber + " is " + count);

//Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let oddCount = 0;
let evenCount = 0;

for (let i = 0; i < 10; i++) {
  let number = Number(prompt("Enter a number:"));

  if (number > 0) {
    positiveCount++;
  } else if (number < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (number % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Positive numbers: " + positiveCount);
console.log("Negative numbers: " + negativeCount);
console.log("Zero numbers: " + zeroCount);
console.log("Odd numbers: " + oddCount);
console.log("Even numbers: " + evenCount);

//Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more. The loop continues until the user refuses.

let continueLoop = true;

while (continueLoop) {
  const number1 = parseFloat(prompt('Enter the first number:'));
  const number2 = parseFloat(prompt('Enter the second number:'));
  const sign = prompt('Enter the mathematical sign (+, -, *, /):');

  let result;

  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break;
    default:
      alert('Invalid sign entered.');
      continue; 
  }

  alert(`Result: ${result}`);

  const again = prompt('Do you want to perform another calculation? (yes/no)').toLowerCase();

  if (again !== 'yes') {
    continueLoop = false;
  }
}

alert('Calculator program has ended.');

//Request a number from a user and ask by how many digits to move it. Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).

let numUser = prompt("Enter a number:"); 
let numDigits = prompt("Enter the number of digits to move:");

let digits = numUser.split("");

for (let i = 0; i < numDigits; i++) {
  digits.push(digits.shift());
}

let result = digits.join("");

console.log("Result: " + result);

//Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.

let day = prompt("Enter the day of the week:");
let showNext = confirm("Would you like to see the next day?");

while (showNext) {
  let nextDay = "";

  switch (day.toLowerCase()) {
    case "monday":
      nextDay = "Tuesday";
      break;
    case "tuesday":
      nextDay = "Wednesday";
      break;
    case "wednesday":
      nextDay = "Thursday";
      break;
    case "thursday":
      nextDay = "Friday";
      break;
    case "friday":
      nextDay = "Saturday";
      break;
    case "saturday":
      nextDay = "Sunday";
      break;
    case "sunday":
      nextDay = "Monday";
      break;
    default:
      nextDay = "Invalid day";
      break;
  }

  alert("The next day is: " + nextDay);
  showNext = confirm("Would you like to see the next day?");

  if (showNext) {
    day = nextDay;
  }
}

//Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. 

for (let i = 2; i <= 9; i++) {
    console.log("Multiplication table for " + i + ":");
  
    for (let j = 1; j <= 10; j++) {
      console.log(i + " x " + j + " = " + i * j);
    }
  
    console.log("");
  }

//“Guess the number” game. Suggest a user to think of a number from 0 to 100 and guess it in the following way: every loop iteration needs to divide the range of numbers in half, you represent the result as N and ask the user “Your number > N, < N or == N?” Depending on what the user said, narrow down the range. So the starting range is 0 to 100, divided in half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N. 

let min = 0;
let max = 100;

console.log("Think of a number between 0 and 100.");

while (min <= max) {
  let guess = Math.floor((min + max) / 2);
  let answer = prompt(`Is your number > ${guess}, < ${guess}, or == ${guess}? Enter '>' or '<' or '='`);

  if (answer === ">") {
    min = guess + 1;
  } else if (answer === "<") {
    max = guess - 1;
  } else if (answer === "=") {
    console.log(`Your number is ${guess}!`);
    break;
  } else {
    console.log("Invalid input. Please enter '>', '<', or '='.");
  }
}


