const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to ask questions sequentially
function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
}

// Main function to execute assignments
async function main() {
  // Assignment 1 & 2: Arithmetic & Comparison Operators
  let num1 = parseFloat(await askQuestion("Enter the first number: "));
  let num2 = parseFloat(await askQuestion("Enter the second number: "));

  console.log("Addition: " + (num1 + num2));
  console.log("Subtraction: " + (num1 - num2));
  console.log("Multiplication: " + num1 * num2);
  console.log("Division: " + num1 / num2);
  console.log("Modulus: " + (num1 % num2));

  // Comparison
  console.log("Is first number greater than second? " + (num1 > num2));
  console.log("Is first number less than second? " + (num1 < num2));
  console.log("Are the two numbers equal? " + (num1 === num2));

  // Assignment 3: Scholarship Eligibility
  let math = parseFloat(await askQuestion("Enter Math Score: "));
  let sci = parseFloat(await askQuestion("Enter Science Score: "));

  let isEligible = math >= 90 && sci >= 85;
  console.log("Scholarship Eligibility: " + isEligible);

  // Assignment 6: Perimeter & Area
  let length = parseFloat(await askQuestion("Enter Length: "));
  let width = parseFloat(await askQuestion("Enter Width: "));

  let perimeter = 2 * (length + width);
  let area = length * width;
  console.log("Perimeter: " + perimeter);
  console.log("Area: " + area);
  console.log("Is perimeter greater than area? " + (perimeter > area));

  // Assignment 7: Voting Eligibility
  let age = parseInt(await askQuestion("Enter age: "));
  let isCitizen = (await askQuestion("Are you a citizen (true/false)? ")) === "true";

  let canVote = age >= 18 && isCitizen;
  console.log("Eligible to vote: " + canVote);

  // Assignment 8: BMI Calculator
  let weight = parseFloat(await askQuestion("Enter weight (kg): "));
  let height = parseFloat(await askQuestion("Enter height (m): "));

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  console.log("BMI: " + bmi);
  console.log("Category: " + category);

  // Assignment 9: Even or Odd
  let number = parseInt(await askQuestion("Enter a number: "));
  console.log("The number is " + (number % 2 === 0 ? "even." : "odd."));

  // Assignment 10: Shopping Discount
  let totalAmount = parseFloat(await askQuestion("Enter total amount: "));
  if (totalAmount > 100) {
    totalAmount -= totalAmount * 0.1;
  }
  console.log("Discounted total: " + totalAmount.toFixed(2));

  // Assignment 5: Operator Precedence
  let result1 = 10 + 3 * 5;
  let result2 = (10 + 3) * 5;
  let result3 = 10 / 2 + 3;
  let result4 = 20 / (2 + 3);

  console.log("10 + 3 * 5 = " + result1);
  console.log("(10 + 3) * 5 = " + result2);
  console.log("10 / 2 + 3 = " + result3);
  console.log("20 / (2 + 3) = " + result4);

  // Close readline after all input
  rl.close();
}

// Run the program
main().catch((error) => console.error("Error:", error));
