// Multiplication of Table 

const number = 5; 

if (!isNaN(number)) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log('${number} x ${i} = ${number * i}');
    }
} else {
    console.log("Please enter a valid number.");
}



// 1 to 10 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// random number

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

// FizzBuzz

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// Factorial of number 

function factorial(num) {
    if (num < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }

    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    console.log('Factorial of ${num} is: ${fact}');

    if (fact === 1) {
        console.log("The factorial is 1, which is trivial.");
    } else if (fact < 100) {
        console.log("The factorial is a small number.");
    } else if (fact < 1000) {
        console.log("The factorial is a medium-sized number.");
    } else {
        console.log("The factorial is a large number.");
    }
}

factorial(5);


// Prime number 


function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    
    return true; 
}

const nums = 17; 
if (isPrime(nums)) {
    console.log('${nums} is a prime number.');
} else {
    console.log('${nums} is not a prime number.');
}


// Pattern 

function generatePattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

generatePattern(5);


function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}

const inputString = "racecar"; 
if (isPalindrome(inputString)) {
    console.log("${inputString} is a palindrome.");
} else {
    console.log("${inputString} is not a palindrome.");
}


// Count Vowels 

function countVowelsAndConsonants(str) {
    str = str.toLowerCase();

    const vowels = "aeiou";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++; 
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++; 
        }
    }

    console.log('Vowels: ${vowelCount}');
    console.log('Consonants: ${consonantCount}');
}

const inputStrings = "Hello World"; 
countVowelsAndConsonants(inputStrings);


// Factorial using while loop

function factorial(num) {
    if (num < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }

    let fact = 1;
    let i = num;

    while (i > 1) {
        fact *= i;
        i--;
    }

    console.log('Factorial of ${num} is: ${fact}');
}

factorial(5); 

// Fibonacci series

function generateFibonacci(limit) {
    if (limit <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    let first = 0, second = 1;
    let sequence = [];

    for (let count = 0; count < limit; count++) {
        sequence.push(first);
        let nextValue = first + second;
        first = second;
        second = nextValue;
    }

    console.log('Fibonacci sequence up to ${limit} terms:, sequence');
}

generateFibonacci(10);