// remove 1st element of array
let fruits = ["apple", "banana", "mango"];
let removed = fruits.shift();
console.log(removed);   // "apple"
console.log(fruits);    // ["banana", "mango"]


let fruit = ["banana", "mango"];
let length = fruit.unshift("apple", "grapes","anar");
console.log(length);

console.log(fruit);   // ["apple", "grapes", "banana", "mango"]
