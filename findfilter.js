const nums=[[10],[40],[20],[30]]

// const result = nums.find(n => n<30)
const result = nums.filter(n => n<30)

console.log(result);


let users = [
  {name: "Ali", age: 25},
  {name: "Sara", age: 20},
  {name: "Usman", age: 30}
];

let adult = users.find(u => u.age < 30);
console.log(adult);




let numss = [22, 10, 15, 25, 20];

let bigNums = numss.filter(n => n > 10);
console.log(bigNums); 






