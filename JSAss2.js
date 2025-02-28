// numbers

function calculation(x,y){
    console.log(x+y);
    console.log(x-y);
    console.log(x*y);
    console.log(x/y);
}

calculation(5,10);

// String

let FavoriteMovie = "12th Fail";

console.log('I love watching ${FavoriteMovie} movie');

// booleans 

let isHungry = true;

if(isHungry){
    console.log("Go eat");
}
else{
    console.log("You're full")

    
}

// Objects

let favAnimal = {
    name : "puppy",
    type : "cat",
    age : 5,
    isFriendly : true
}

console.log(favAnimal);
console.log("the animal name is " + favAnimal.name);

// Array

let arr = ["pink", "blue", "red", "green", "purple"];

console.log(arr);

arr.push("orange");
console.log("after adding", arr);

arr.pop();
console.log("after remove", arr);

// undefined and null

let mystery = null;

console.log(mystery);


// BigInt

let largeNum = 123456789123456789n;

console.log(123456789123456789n * 123456789123456789n);

// Symbol

let Symbol1 = Symbol("unique");

let Symbol2 = Symbol("unique");

console.log(Symbol1 == Symbol2);

let toy = "car";
console.log(toy);

toy = "truck";

console.log(toy);

var candy = "chocolate";
console.log(candy);

candy = "Lolipop";

console.log(candy);

// let 

let color = "red";
console.log(color);

color = "pink";
console.log(color);

// var

var fruits = ["apple", "bannana", "mango"];
console.log(fruits);

fruits = ["orange"];

console.log(fruits);

// const 

const fruit = ["apple", "bannana", "mango"];
console.log(fruit);