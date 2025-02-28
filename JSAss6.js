function countVowels(str) {

    let count=0;
    
    let vowels = "aeiouAEIOU";
    
    for (let i=0; i<str.length; i++) {
    
    if (vowels.includes(str[i])) {
    
    count++
    
    }
    
    }
    
    return count;
    
    }
    
    console.log(countVowels("Hello, World!")); // Output: 3
    
    // Assignment 2: Check if a String is a Palindrome
    
    function isPalindrome (str) {
    
    let reversed=" ";
    
    for (let i=str.length-1; i>=0; 1--){
    
    reversed += str[i];
    
    }
    
    I
    
    return str === reversed;
}
    console.log(isPalindrome("madam")); // Oütput: console log(isPalindrome("hello); 
    console.log(isPalindrome("hello")); // Output: false

// ---------------------QUE3------------------
function getFirstWord (sentence) {

    let firstWord = "";
    
    for (let i=0; i < sentence.length; i++) {
    
    if (sentence[i] === "") break;
    
    firstword += sentence[1];
    
    }
    
    return firstWord;
    
    }
    
    console.log(getFirstWord("Hello, World!")); // Output: Hello,
    
    // Assignment 4: Replace All Spaces in a String with Hyphens
    
    function replaceSpaces (str) {
    
    let result =" ";
    
    for (let i=0; i< str.length; i++) {
    
    result += str[i] === ""?"-": str[1];
    
    }
    
    return result;
    
    }
    
    console.log(replaceSpaces ("Hello World from JavaScript")); //
    
    // Assignment 5: Split a String into an Array of Words

    function splitIntoWords (sentence) {
    
    let words = [];
    
    let currentWord = "";
    
    for (let i=0; i<sentence.length; i++) {
    
    if (sentence[i] === "") {
    
    words.push(currentWord);
    
    currentWord = "";
    
    } else {
    
    currentword += sentence[i];
    
    }
}
    
    if (currentWord) words.push(currentWord);
    
    return words;
    
    }
    
    console.log(splitIntoWords("This is JavaScript"));

    // ---------------------QUE6-----------------------------

    function capitalizeWords (str) {

        let result = " ";
        
        let capitalizeNext = true;
        
        for (let i = 0; i < str.length; i++) {
        
        if (str[i] === " ") {
        
        result +=" ";
        
        capitalizeNext = true;
        
        } else if (capitalizeNext) {
        
        result += str[i].toUpperCase();
        
        capitalizeNext = false;
        
        } else {
        
        result += str[i];
        
        }
        
        }
        
        return result;
        
        }
        
        console.log(capitalizeWords("hello world from javascript")); //
    
 // Assignment 7: Reverse the Characters in a String

function reverseString(str) {

let reversed=" ";

for (let i=str.length-1; i>=0; i--) {

reversed += str[1];

}

return reversed;

}

console.log(reverseString("JavaScript")) // Output tpircSavaj

// Assignment 8: Count the Number of Occurrences of a Specific Character

function countCharacter(str, char) {

let count = 0;

for (let i=0; i<str.length; i++){

if (str[i]===char){
    count++;
}

}

return count;

}

console.log(countCharacter("hello world", "o")) 

// Assignment 9: Remove All Non-Alphanumeric Characters

function removeNonAlphanumeric(str) {

let result=" ";

for (let i=0; i<str.length; i++) {

if ((str[1] = "a" && str[i] <= "z") || (str[1] >= "A" && str[1] <= "Z") || (str[1] >= "B" && str[i] <= "9")) {

result += str[i];

}

}

return result;
}

console.log(removeNonAlphanumeric("Hello, World! 123 "));


// -------------------------QUE10--------------------------
function startsAndEndsSame(str) {

    if (str.length === 0) return false; return str[0] === str[str.length - 1];
    
    }
    
    console.log(startsAndEndsSame("radar")); 
    
    console.log(startsAndEndsSame("hello"));