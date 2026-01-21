
Name = "Rafid";
regNo = "1234567890";
Tilte = "Employee-01";
num2 = 1;
age = 25;
num1 = 1;

// key value pairs

employee = {
    name: "Rafid",
    age: 25,
    department: "IT",
    salary: 40000,
    isActive: true,
    address: {
        city: "Karachi",
        country: "Pakistan",
        zip: "74300"
    },
    skills: ["JavaScript", "Python", "Java"],
    projects: [
        {

            title: "Examination System",
            duration: "6 months"
        },
        {
            title: "library Management System",
            duration: "3 months",
            workingHours: ["10 AM - 6 PM", "9 AM - 5 PM", "11 AM - 7 PM"]
        }
    ],
    role: ["student","teacher"]

};


// if (employee.name == "Rafid") {
//     console.log(employee.name);
// } else {
//     console.log("Employee name is not Jamil, it is " + employee.name);
// }

// if (employee.age > 18) {
//     console.log("Employee age is " + employee.age);
// } else {
//     console.log("Employee is underage");
// }

// if (employee.salary < 45000 || employee.age > 18) {
//     console.log("Employee salary is " + employee.salary + "and age is " + employee.age);
// } else if (employee.salary > 45000 || employee.age > 18) {
//     console.log("Employee salary is less than 45000 or age is" + employee.age);
// } else if (employee.salary < 45000 || employee.age < 18) {
//     console.log("Employee salary is" + employee.salary + " and age is " + employee.age);
// } else {
//     console.log("Employee is under age.")
// }

// console.log(employee.department);
// console.log(employee.address.city);
// console.log(employee.address.country);
// console.log(employee.address.zip);
// console.log(employee.skills);
// console.log(employee.projects[0].title);
// console.log(employee.projects[0].duration);
// console.log(employee.projects[1].title);
// console.log(employee.projects[1].duration);

// if (employee.isActive) {
//     console.log("Employee is active " + employee.isActive);
// }
// else {
//     console.log("Employee is not active");
// }






// array = [11, 222, 332, 3454, 64325];

// for (let i = 0; i < array.length; i++) {
//     console.log(i + " : " + array[i]);
// }

// console.log(array[array.length]);

// console.log("For each loop output:");
// array.forEach((element, index) => {
//     console.log(element + " : " + index);
// });

// for (const Rafid of array) {
//     console.log("Rafid: " + Rafid);
// }


// console.log("Array practice");
// arr = [10, 200, 3333, 44444, 544444,1234567];

// for(let i = 0; i < arr.length; i++) {
//     console.log("Index " + i + " has value: " + arr[i]);
// }

// console.log("For each loop output:");
// arr.forEach(element => {
//     console.log("Element: " + element);
// });
// // for of loop
// for(const value of arr) {                                                      
//     console.log("value: " + value);
// }

// arr.forEach(array => {
//     console.log("Array " + array);
// });




































// Fix the error and Print workingHours one by one in the console.

// Write a condition in which if the role is "student" and age<= 18 or role is "teacher" num2 and age > 18, then print a message accordingly. 

// Write a condition in which num1 is not equal to num2 
//     where num1 is 1 and num2 is "1", then print a message accordingly.


// using for-each loop
employee.projects[1].workingHours.forEach(workingHours => {
    console.log("Working-hours-01" + " : " + workingHours);
});


// using for loop
for (let i = 0; i < employee.projects[1].workingHours.length; i++) {

    console.log("Working-hours-02" + " : " + employee.projects[1].workingHours[i]);
}
//for-of loop
for (const workingHours of employee.projects[1].workingHours) {
    console.log("Working-hours-03" + " : " + workingHours);
}

//indiviusal working hours printing 
console.log("Working-hours" + " : " +employee.projects[1].workingHours[0]);
console.log("Working-hours" + " : " +employee.projects[1].workingHours[1]);
console.log("Working-hours" + " : " +employee.projects[1].workingHours[2]);


if (employee.role[0] == "student" && employee.age <= 18) {
    console.log("Role is student and age is less than or equal to 18");
}else if (employee.role[1] === "teacher" && employee.age > 18 && num2 >18) {
    console.log("Role is teacher and age is greater than 18");

}else{
    console.log("No condition found");
}


if (1 === "1") {
    console.log("num1 is  not equal to num2");
}else{
    console.log("num1 is equal to num2");
}