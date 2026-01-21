// let myDate02 = new Date(2004,8-1,10)//yy-mm-dd
// console.log(myDate02.toLocaleString());
// console.log(myDate02.toString());
// console.log(myDate02.getDay());
//yy-mm-dd
// console.log(myDate02.getDay());
function dayCheck(checkDay,year, month, day) {
    let myDate02 = new Date(year, month-1, day)
    if (myDate02 .getDay() == 1 && checkDay.toLowerCase() == "monday") {
        console.log("Yes")
    } else if (myDate02 .getDay() == 2 && checkDay.toLowerCase() == "tuesday") {
        console.log("Yes")
    } else if (myDate02 .getDay() == 3 && checkDay.toLowerCase() == "wednesday") {
        console.log("Yes");

    } else if (myDate02 .getDay() == 4 && checkDay.toLowerCase() == "thursday") {
        console.log("Yes");

    } else if (myDate02 .getDay() == 5 && checkDay.toLowerCase() == "friday") {
        console.log("Yes");

    } else if (myDate02 .getDay() == 6 && checkDay.toLowerCase() == "saturday") {
        console.log("Yes");

    } else if (myDate02 .getDay() == 7 && checkDay.toLowerCase() == "sunday") {
        console.log("Yes");

    } else {
        console.log("No")
    }

}
dayCheck("thursday",1947, 8, 14)




// if (myDate02.getDay() == 1) {
//     console.log("Monday");
// } else if (myDate02.getDay() == 2) {
//     console.log("Tuesday");
// } else if (myDate02.getDay() == 3) {
//     console.log("Wednesday");
// } else if (myDate02.getDay() == 4) {
//     console.log("Thursday");
// } else if (myDate02.getDay() == 5) {
//     console.log("Friday");
// } else if (myDate02.getDay() == 6) {
//     console.log("Saturday");
// } else if (myDate02.getDay() == 7) {
//     console.log("Sunday");
// }


