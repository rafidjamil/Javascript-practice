const user1 = { name: "Rafid", side: "", runs: 0 };
const user2 = { name: "Mustafa", side: "", runs: 0 };

const sides = ["head", "tail"]
const sidesToss = Math.floor(Math.random() * 2) + 1
const sideRes = sides[sidesToss % sides.length]

// console.log("tttttttttttttttttt", sideRes);

user1.side += sideRes
if (user1.side == "head") {
    user2.side += "tail"
}
if (user1.side == "tail") {
    user2.side += "head"
}

console.log("user1", user1);
console.log("user2", user2);








const tossSequence = ["tail", "head", "tail", "head", "tail", "head", "tail", "head", "tail", "head"];
const user1Toss = Math.floor(Math.random() * 5) + 1;
const user2Toss = Math.floor(Math.random() * 5) + 1;

const totalToss = user1Toss + user2Toss
const tossResult = tossSequence[totalToss % tossSequence.length]


let tossWin;
let tossLose;

if (user1.side === tossResult) {
    tossWin = user1;
    tossLose = user2;
} else {
    tossWin = user2;
    tossLose = user1;
}

const tossseque = ["bat", "bowl"];
tossCh = Math.floor(Math.random() * 2) + 1
    // console.log("tttttt", tossCh);

tossWin.choice = tossseque[tossCh % tossseque.length]

tossLose.choice = (tossWin.choice === "bat" ? "bowl" : "bat"), (tossWin.choice === "bowl" ? "bat" : "bowl");
console.log("ttttttt", tossWin.choice);
// if (tossWin.choice == bowl) {

// }
// return

let userOneRun = user1.runs;
let userTwoRun = user2.runs;
// console.log(userOneRun);


// console.log(batFing);
// console.log(ballsFing);
function firstInning() {

    let battingFingers1 = [2, 4, 5, 3, 1, 10, 6];
    let bowlingFingers1 = [2, 4, 5, 3, 1, 10, 6];

    bating = Math.floor(Math.random() * 7) + 1
    bowling = Math.floor(Math.random() * 7) + 1
        // console.log(bating, bowling)

    // batFing = battingFingers1[bating % battingFingers1.length]
    // ballsFing = bowlingFingers1[bowling % bowlingFingers1.length]
    console.log("1st Inning!!");




    let out = false
        //    let out = false;

    while (!out) {
        const bat = battingFingers1[Math.floor(Math.random() * battingFingers1.length)];
        const bowl = bowlingFingers1[Math.floor(Math.random() * bowlingFingers1.length)];

        if (tossWin.choice == "bat") {
            console.log(`${tossWin.name} shows ${bat}, ${tossLose.name} shows ${bowl}`);

            if (bat === bowl) {
                console.log(`${tossWin.name} is OUT!`);
                out = true;
                tossWin.runs += 1;
                console.log(`${tossWin.name} gives target: ${tossWin.runs}`);
            } else {
                tossWin.runs += bat;
            }
        }

        if (tossWin.choice === "bowl") {
            console.log(`${tossLose.name} shows ${bat}, ${tossWin.name} shows ${bowl}`);

            if (bat === bowl) {
                console.log(`${tossLose.name} is OUT!`);
                out = true;
                tossLose.runs += 1;
                console.log(`${tossLose.name} gives target: ${tossLose.runs}`);
            } else {

                tossLose.runs += bat;
            }
        }
    }




    // console.log(`${tossWin.name} gives ${tossWin.runs} runs target to ${tossLose.name}`);



    console.log("2nd Inning!!");

    let outt = false;


    if (tossWin.choice === "bowl") {
        while (!outt) {
            const bat = battingFingers1[Math.floor(Math.random() * battingFingers1.length)];
            const bowl = bowlingFingers1[Math.floor(Math.random() * bowlingFingers1.length)];

            console.log(`${tossWin.name} shows ${bat}, ${tossLose.name} shows ${bowl}`);


            if (tossWin.runs > tossLose.runs) {
                console.log(`${tossWin.name} chased the target: ${tossWin.runs}`);
                console.log(`${tossWin.name} Wins!!!`);
                break;
            }


            if (bat === bowl) {

                console.log(`${tossWin.name} is OUT!`);
                outt = true;
                console.log(`${tossWin.name} scored total: ${tossWin.runs}`);
                console.log(`${tossLose.name} Wins!!!`);
                break;
            } else {
                tossWin.runs += bat;
            }
        }
    } else if (tossWin.choice === "bat") {
        while (!outt) {
            const bat = battingFingers1[Math.floor(Math.random() * battingFingers1.length)];
            const bowl = bowlingFingers1[Math.floor(Math.random() * bowlingFingers1.length)];

            console.log(`${tossLose.name} shows ${bat}, ${tossWin.name} shows ${bowl}`);


            if (tossLose.runs >= tossWin.runs) {
                console.log(`${tossLose.name} chased the target: ${tossWin.runs}`);


                console.log(`${tossLose.name} Wins!!!`);
                return;
            }


            if (bat === bowl) {
                console.log(`${tossLose.name} is OUT!`);
                console.log(`${tossLose.name} scored total: ${tossLose.runs}`);
                outt = true;
                console.log(`${tossWin.name} Wins!!!`);
                break;
            } else {
                tossLose.runs += bat;
            }
        }
    }



    // console.log(`${tossLose.name} score total: ${tossLose.runs}`);
    // console.log(`${tossLose.name} gives ${tossLose.runs} runs target to ${toss.name}`);





}








console.log("Toss!!");
console.log(user1.name, "goes for", user1.side);
console.log(user2.name, "goes for", user2.side);

console.log(user1.name, "shows:", user1Toss);
console.log(user2.name, "shows:", user2Toss);
// console.log();
console.log("Toss result:", totalToss, tossResult);
console.log(tossWin.name, "Win the toss and choose to", tossWin.choice, "first");
console.log(tossLose.name, "loss the toss and have to", tossLose.choice, );
firstInning();
// secondInning()