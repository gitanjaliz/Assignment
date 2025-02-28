// 1. Reverse an array manually

function reverseArray(arr) {

let reversed = [];

for (let i = arr.length - 1; 1 >= 0; i--) {

reversed.push(arr[i]);

}

return reversed;

}

console.log(reverseArray ([1, 2, 3, 4])); 

// 2. Find the second-largest number in an array

function secondLargest(arr) {

let largest=-Infinity, second=-Infinity;

for (let num of arr) {

if (num>largest) {

second=largest;

largest = num;

} else if (num > second && num<largest) {

second=num;

}
}
return second;

}

console.log(secondLargest ([10, 20, 30, 48])); // Output: 30

// 3. Merge two arrays without duplicates

function mergeWithoutDuplicates(arr1, arr2) {

return [...new Set([...arr1, ...arr2])];

}

console.log(mergeWithoutDuplicates ([1, 2, 3], [2, 3, 4])); 

// 4. Find the frequency of each element in an array

function frequencyCount (arr) {

let freq = {};

for (let num of arr) {

freq[num] = (freq [num] || 0) + 1;

}

return freq;

}

console.log(frequencyCount([1, 2, 2, 3, 3, 3]));

// Output: { '1': 1, '2': 2, '3:3}
// 5. Implement a manual version of the includes method

function manualIncludes (arr, value) {

for (let item of arr) {

if (item === value) return true;

}

return false;

}

console.log(manualIncludes ([1, 2, 3], 2)); // Output: true

console.log(manualIncludes ([1, 2, 3], 4)); // Output: false

// 6. Shift elements in an array to the left by one position

function shiftLeft(arr) {

if (arr.length === 0) return arr;

let first=arr.shift();

arr.push(first);

return arr;

}

console.log(shiftLeft([1, 2, 3, 4])); 

function rotateRight(arr, k) {

k%=arr.length;

return arr.slice(-k).concat(arr.slice(0, -k));

}

console.log(rotateRignt([1, 2, 3, 4, 5], 2));

// 8. Remove all duplicate elements in an array

function removeDuplicates (arr) { return [...new Set(arr)];

} console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // Ouτρυτ. 11. 2, 3, 4

// 9. Create a 2D array representing a multiplication table for numbers 1 to 10

function multiplicationTable() {

let table=[];

for (let i=1; i <= 10; i++){

let row=[];

for (let j=1; j<= 10; j++) {

row.push(i*j);
}
table.push(row);
}
return table;
}
console.table (multiplicationTable());


// 10. Find the intersection of two arrays

function intersection(arr1, arr2) {

return arrl.filter(item => arr2.includes(item));

}

console.log(intersection([1, 2, 3], [2, 3, 4]));