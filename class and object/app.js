// const student={
//     name:"Rafid Jamil",
//     age: 21,
//     marks: 80,
//     printMarks: function(){
//         console.log(this.marks);
//     }

// }

// const employee={
//     calTax(){
//         console.log("Tax is 80%");
//     }
// }
// const rafid={
//     salary: 50000

// }
// const anas={
//     salary: 60000,
//     caltax(){
//         console.log("Tax is 90%");
//     }
// }

// rafid.__proto__= employee;
// anas.__proto__= employee;

class ToyotaCar{
    constructor(brand,milage){
        console.log("Car is created");
        this.brand = brand;
        this.milage = milage;  
    }
    start(){
    console.log("Car is starting");
    }
    stop(){
        console.log("Car is stopping");
    }

}

let fortuner = new ToyotaCar("Fortuner", 15 );
let lexus = new ToyotaCar("Lexus", 20 );