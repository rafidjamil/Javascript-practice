// // Numbers Printing
// for (let i = 0; i < 20; i++) {
//     console.log(i + 1)
// }
// // Even/Odd Checker
// for (let i = 0; i < 20; i++) {
//     console.log(i + 1);
//     if (i % 2 == 0) {
//         console.log("odd");
//     } else {
//         console.log("even");
//     }

// }

// // Array Sum
// array = [10, 20, 30, 40, 50]
// for (let i = 4; i < array.length; i++) {
//     console.log(array[0] + array[1] + array[2] + array[3] + array[4]);

// }


// // Object Data Printing
// const student = {
//     name: "Rafid",
//     age: 22,
//     marks: [85, 90, 78]
// };

// for (let i = 0; i < student.marks[i]; i++) {
//     console.log("Marks-" + (i + 1) + " : " + student.marks[i]);

// }






// // Object Data Printing
// const employees = [
//     { nam: "Ali", workingHours: [8, 9, 7] },
//     { nam: "Sara", workingHours: [9, 8, 8] }
// ];


// for (let i = 0; i < employees.length; i++) {
//     console.log("Name: " + employees[i].nam + "  Working-hours: " + employees[i].workingHours);
// }

// // Multiplication Table
// table = 6;
// console.log("3 table");
// for (let i = 0; i < 11; i++) {
//     console.log(table + "x" + (i) + "=" + (i * table))
// }

// // Highest Number Finder
// const num = [12, 45, 67, 23, 89, 34]
// let max = num[0] // 12, 45, 67
// let min = num[0] // 12

// for (let i = 2; i < num.length; i++) {
//     console.log("i", num[i]);

//     //   67 > 45
//     if (num[i] > max) {
//         max = num[i]
//     } else if (num[i] < min) {
//         min = num[i]
//     }
// }
// // console.log("max",max);
// // console.log("min",min);

// const obj = [
//     { name: "rafid", age: 25 },
//     { name: "rafid", age: 22 },
//     { name: "rafid", age: 90 },
//     { name: "rafid", age: 80 },
//     { name: "rafid", age: 81 },
//     { name: "rafid", age: 80 },
//     { name: "rafid", age: 9 },
//     { name: "rafid", age: 56 },
//     { name: "rafid", age: 43 },
//     { name: "rafid", age: 76 },

// ]
// let maxi = obj[0].age
// let mini = obj[0].age
// for (let i = 0; i < obj.length; i++) {
//     console.log("i", obj[i]);
//     if (obj[i].age > maxi) {
//         maxi = obj[i].age
//     } else if (obj[i].age < mini) {
//         mini = obj[i].age
//     }
// }
// console.log("max-age", maxi);
// console.log("min-age", mini);



// //Count Vowels in a String
// statement = "python is fun";
// const newArray = statement.split('')
// console.log('string', newArray)
// count = 0;
// vowels = ['a', 'e', 'i', 'o', 'u'];
// // const newArray = ststement.split('')
// console.log('vowels length', vowels)
// for (let i = 0; i < newArray.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//         if (newArray[i] == vowels[j]) {
//             count += 1;
//         }

//     }


// }
// console.log(statement + " has " + count + " vowels words!!");


// //count vowels in the sentence

// sen = "hello how are you";

// const mysen = sen.split(" ")


// console.log(mysen)
// const mysen2 = mysen.map(mysens => mysens.split(''))
// console.log('here is mysen', mysen2)
// counts = 0;


// vowels = ['a', 'e', 'i', 'o', 'u']
// for (let i = 0; i < mysen2.length; i++) {

//     const abc = mysen2[i]

//     for (let j = i; j < abc.length; j++) {

//         for (let k = 0; k < vowels.length; k++) {
//             if (abc[j] == vowels[k]) {
//                 counts += 1;
//             }
//         }
//     }



// }
// console.log(counts)



// //1 to 5 tables till 2
// // table=5;
// for (let k = 1; k < 6; k++) {


//     for (let i = 1; i < 3; i++) {


//         console.log(k + "x" + (i) + "=" + (i * k))
//     }


// }


// //checking word repeatition
// let word = "Why are you here? is there anything which you are finding?";
// let wordsplit = (word.toLowerCase()).split('');
// let dup = [];

// for (let i = 0; i < wordsplit.length; i++) {

//     for (let j = i + 1; j < wordsplit.length; j++) {

//         if (wordsplit[i] == wordsplit[j] && wordsplit[i] !== " ") {

//             let k;
//             for (k = 0; k < dup.length; k++) {
//                 if (dup[k] == wordsplit[i]) {
//                     break;
//                 }
//             }
//             if (k == dup.length) {
//                 dup.push(wordsplit[i]);

//             }
//         }
//     }
// }

// console.log(dup);
// // let dup = [];

// // console.log('========================')

// // for (let i = 0; i< wordsplit.length; i ++){
// //     //  if(dup[i] !==wordsplit[i]){
// //     //     dup.push(wordsplit[i])
// //     // }
// //     for(let j=0; j < i+1 ; j++){
// //         console.log('ddd',dup[j],wordsplit[i])
// //         if(dup[j]  !== wordsplit[i]){
// //             dup.push(wordsplit[i])
// //         }
// //         if(dup[j] === wordsplit[i]){
// //             console.log('ok')
// //         }
// //     }
// // }

// // console.log("dup",dup);





// function f1(params, p2) {
//     console.log("Function call", params, p2);
// }

// f1(1, "1st")
// f1(2)
// f1(3, "3rd")
// f1(4, "Hello")
// f1(5)
// f1(6, null)


// function greeting(guest, host = "everyone", p2) {
//     console.log("Welcome", guest, "from", host);
// }

// greeting("Miss Sana", "from students")
// greeting()
// greeting("Teachers")
// greeting(undefined, "All of you")
// greeting(7, false)


// // Multiplication Table

function tables(sNum = 0, limitNum = 11) {
    for (let i = 0; i < limitNum; i++) {
        console.log(sNum + "x" + (i) + "=" + (i * sNum))
    }
}
tables(10, 100)
// tables() 
// 
function calculator(num1=null, num2=null, action) {
    if (action == "sum") {
        console.log(`The Sum of ${num1} + ${num2} is ${num1 + num2}`);
    } else if (action == "multiplication") {
        console.log(`The Multiplication of ${num1} x ${num2} is ${num1 * num2}`);
    } else if (action == "subtraction") {
        console.log(`The Subtraction of ${num1} - ${num2} is ${num1 - num2}`);
    } else if (action == "division") {
        console.log(`The Division of ${num1} / ${num2} is ${num1 / num2}`);
    } else if (action == "square") {
        console.log(`The Square of ${num1} is ${num1 * num1}`);
    } else if (action == "cube") {
        console.log(`The Cube of ${num1} is ${num1 * num1 * num1}`);
    } else if (action == "percentage") {
        console.log(`The Percentage of total ${num2} and obtain ${num1} is ${(num1 / num2) * 100}%`);
    } else if (action == "binomial-square") {
        console.log(`The Binomial Square of (${num1} + ${num2})^2 is ${(num1 * num1) + (2 * num1 * num2) + (num2 * num2)}`);
    } else if (action == "binomial-square-2") {
        console.log(`The Binomial Square of (${num1} - ${num2})^2 is ${(num1 * num1) - (2 * num1 * num2) + (num2 * num2)}`);
    }

}
calculator(5, 8, "sum")
calculator(3, 5, "multiplication")
calculator(9, 18, "subtraction")
calculator(27, 9, "division")
calculator(5, null, "square")
calculator(2, null, "cube")
calculator(340, 500, "percentage")
calculator(2, 8, "binomial-square")
calculator(4, 7, "binomial-square-2")



const user=[
    {
        name:"Rafid",
        email:"rafid@gmail.com",
        password:"1234"

        
    }
]




