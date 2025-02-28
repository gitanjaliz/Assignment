const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to ask questions sequentially
function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer.trim()));
  });
}

async function main() {
  // --------------------------QUE1----------------------------------
  // Check if the number is positive, negative, or zero
  let num1 = parseFloat(await askQuestion("Enter the first number: "));

  if (num1 > 0) {
    console.log("The number is positive");
  } else if (num1 < 0) {
    console.log("The number is negative");
  } else {
    console.log("The number is zero");
  }

  // --------------------------QUE2----------------------------------
  // Print multiplication table
  let num2 = parseFloat(await askQuestion("Enter a number: "));
  for (let i = 1; i <= 10; i++) {
    console.log(`${num2} x ${i} = ${num2 * i}`);
  }

  // -----------------------------QUE3-----------------------------
  // Number guessing game
  let systemGenerateNumber = Math.floor(Math.random() * 10) + 1;
  let userNumber;

  console.log("Guess the number (between 1 and 10)");

  do {
    userNumber = parseFloat(await askQuestion("Enter a number: "));

    if (userNumber < systemGenerateNumber) {
      console.log("Too low! Try again.");
    } else if (userNumber > systemGenerateNumber) {
      console.log("Too high! Try again.");
    }
  } while (userNumber !== systemGenerateNumber);

  console.log("Correct! You guessed the number.");

  // ----------------------QUE4-------------------------
  console.log("Even numbers from 1 to 20:");
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  // ------------------------------QUE5-----------------------------
  let number = parseInt(await askQuestion("Enter a number: "));

  function sumOfDigits(num) {
    let sum = 0;
    num = Math.abs(num);
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  console.log("Sum of digits:", sumOfDigits(number));

  // ----------------------------QUE6---------------------------
  console.log("FizzBuzz:");
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      process.stdout.write("FizzBuzz");
    } else if (i % 3 === 0) {
      process.stdout.write("Fizz");
    } else if (i % 5 === 0) {
      process.stdout.write("Buzz");
    } else {
      process.stdout.write(i.toString());
    }
    if (i < 50) process.stdout.write(", ");
  }
  console.log();

  // --------------------------QUE7------------------------
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let primeNum = parseInt(await askQuestion("Enter a number: "));
  console.log(
    isPrime(primeNum)
      ? `${primeNum} is a prime number.`
      : `${primeNum} is not a prime number.`
  );

  // ----------------------------QUE8-------------------------
  console.log("Star Pattern:");
  for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
  }

  // ----------------------------QUE9-------------------------
  let number1 = parseFloat(await askQuestion("Enter first number: "));
  let number2 = parseFloat(await askQuestion("Enter second number: "));
  let number3 = parseFloat(await askQuestion("Enter third number: "));

  let largest = Math.max(number1, number2, number3);
  console.log(`The largest number is ${largest}.`);

  // ----------------------------QUE10-------------------------
  let inputString = await askQuestion("Enter a string: ");

  function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
  }

  console.log(
    isPalindrome(inputString)
      ? `${inputString} is a palindrome.`
      : `${inputString} is not a palindrome.`
  );

  // ----------------------------QUE11-------------------------
  let inputText = await askQuestion("Enter a string: ");
  function countVowelsAndConsonants(str) {
    str = str.toLowerCase().replace(/[^a-z]/g, "");
    let vowels = "aeiou";
    let vowelCount = 0,
      consonantCount = 0;

    for (let char of str) {
      if (vowels.includes(char)) vowelCount++;
      else consonantCount++;
    }

    return { vowels: vowelCount, consonants: consonantCount };
  }

  let result = countVowelsAndConsonants(inputText);
  console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);

  // ----------------------------QUE12-------------------------
  let inputNumber = parseInt(await askQuestion("Enter a number: "));
  function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
  }
  console.log(`Reversed number: ${reverseNumber(inputNumber)}`);

  // ----------------------------QUE13-------------------------
  let sumEven = 0,
    sumOdd = 0;
  for (let i = 1; i <= 100; i++) {
    i % 2 === 0 ? (sumEven += i) : (sumOdd += i);
  }
  console.log(`Sum of even numbers: ${sumEven}, Sum of odd numbers: ${sumOdd}`);

  // ----------------------------QUE14-------------------------
  let factNum = parseInt(await askQuestion("Enter a number: "));
  function factorial(num) {
    let fact = 1;
    while (num > 1) fact *= num--;
    return fact;
  }
  console.log(`Factorial of ${factNum}: ${factorial(factNum)}`);

  // ----------------------------QUE15-------------------------
  let n = parseInt(await askQuestion("How many numbers? "));
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += parseInt(await askQuestion(`Enter number ${i + 1}: `));
  }
  console.log(`Sum: ${sum}, Average: ${sum / n}`);

  // ----------------------------QUE16-------------------------
  let year = parseInt(await askQuestion("Enter a year: "));
  console.log(
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
      ? `${year} is a leap year.`
      : `${year} is not a leap year.`
  );
// ----------------------------QUE17-------------------------
// Taking input from user
num = parseFloat(await askQuestion("Enter a number: "));
let divisors = [];

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        divisors.push(i); // Add divisor to the array
    }
}

// Display the result
console.log(`Divisors of ${num}: ${divisors.join(", ")}`);

// ----------------------------QUE18-------------------------

// Taking input from user
n = parseFloat(await askQuestion("How many terms ? "));

let fib = [0, 1]; // Starting values

for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]); // Sum of previous two numbers
}

// Display the result
console.log(`Fibonacci sequence: ${fib.slice(0, n).join(", ")}`);

// ----------------------------QUE19-------------------------

function isArmstrong(num) {
    let numStr = num.toString();
    let numDigits = numStr.length;
    let sum = 0;

    for (let digit of numStr) {
        sum += Math.pow(parseInt(digit), numDigits);
    }

    return sum === num;
}

// Taking input from user
inputNumber = parseFloat(await askQuestion("Enter a number: "));

if (isArmstrong(inputNumber)) {
    console.log(`${inputNumber} is an Armstrong number.`);
} else {
    console.log(`${inputNumber} is not an Armstrong number.`);
}

// ----------------------------QUE20-------------------------
let row= 5; // Number of rows

for (let i = 1; i <= row; i++) {
    let numStr = "";

    // First half (ascending numbers)
    for (let j = 1; j <= i; j++) {
        numStr += j;
    }

    // Second half (descending numbers)
    for (let j = i - 1; j >= 1; j--) {
        numStr += j;
    }

    console.log(numStr);
}


  rl.close();
}

// Run the program
main().catch((error) => console.error("Error:", error)); 