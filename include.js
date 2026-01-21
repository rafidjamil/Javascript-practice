// var → purane zamanay ka variable declare karne ka tareeqa hai, function scope hota hai.

// let → naya tareeqa hai variable declare karne ka, block scope hota hai (sirf {} ke andar valid).

// const → constant value store karta hai, isko badal nahi sakte.
var name = "Ali";    // purana tareeqa
let age = 20;        // block scope variable
const city = "Lahore"; // constant, value change nahi ho sakti

console.log(name, age, city);


//find
// Array mai se sirf pehla element return karta hai jo condition ko satisfy karta ho.

// Agar match na mile to undefined return karega.
const numbers2 = [10, 20, 30, 40];

const result = numbers2.find(num => num == 25);

console.log(result); // 30




// .filter()
// Array mai se jitne bhi elements condition ko satisfy karte hain, unka ek naya array return karta hai.

const numbers1 = [[10], [20], [30], [40]];

const result1 = dummyArray.filter();
const result2 = dummyArray.find();

console.log(result1); // [30, 40]



// .includes()
// Array ya string mai check karta hai ke koi value exist karti hai ya nahi.

// true ya false return karega.


const fruits1 = ["apple", "banana", "mango"];

console.log(fruits1.includes("banana")); // true
console.log(fruits1.includes("orange")); // false







// .sort()
// Array ke elements ko sort karta hai.

// Default mai string ke hisaab se sort karta hai, numbers ke liye comparison function dena parta hai.
const numbers3 = [40, 10, 5, 30];

// ascending
console.log(numbers3.sort((a, b) => a - b)); // [5, 10, 30, 40]

// descending
console.log(numbers3.sort((a, b) => b - a)); // [40, 30, 10, 5]






// .reduce()
// Array ke sare elements ko ek sath process karke ek single value bana deta hai.

// Mostly sum, product, max, min ya grouping ke liye use hota hai.
const numbers4 = [10, 20, 30, 40];

// sum
const sum = numbers4.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 1z 00













// const fruits = ["Apple", "Banana", "Mango"];


// console.log(fruits.includes("apple"));  // false
// console.log(fruits.includes("Apple"));  // true

// const numbers = [1, 2, 3, 4, 5, 3];

// console.log(numbers.includes(3, 4)); // true  (index 4 se search karega → 3 milta hai)
// console.log(numbers.includes(2, 3)); // false (index 3 se baad 2 nahi milta)
