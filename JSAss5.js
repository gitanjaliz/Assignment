// 1. Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 2. Function to check if a number is even or odd
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// 3. Function to reverse a given string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 4. Function to find the largest of three numbers
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}

// 5. Function that accepts an array and returns the sum of its elements
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 6. Function to calculate the area and perimeter of a rectangle
function rectangleProperties(length, width) {
    return {
        area: length * width,
        perimeter: 2 * (length + width)
    };
}

// 7. Function to determine if a given year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 8. Function to generate a multiplication table for a number
function multiplicationTable(num) {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${num} x ${i} = ${num * i}`);
    }
    return table.join("\n");
}

// 9. Function to check if a string is a palindrome
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

// 10. Function to find the greatest common divisor (GCD) of two numbers
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(factorial(5));               
console.log(isEvenOrOdd(7));            
console.log(reverseString("hello"));     
console.log(findLargest(3, 7, 5));       
console.log(sumArray([1, 2, 3, 4, 5]));  
console.log(rectangleProperties(4, 5));  
console.log(isLeapYear(2024));           
console.log(multiplicationTable(3));     
console.log(isPalindrome("madam"));      
console.log(gcd(56, 98));