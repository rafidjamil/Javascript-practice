let primeNumber = []


console.log("---------------------");
for (let i = 1; i <= 100; i++) {
    let number = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            number++;
        }
    }

    if (number == 2) {
        primeNumber.push(i)
    }
}
console.log(primeNumber)
console.log("--------------------")

let platfrom = []
for (let k = 1; k <= 100; k++) {
    platfrom.push(k);


}
console.log(platfrom);

url = location.href;
urlParams = new URLSearchParams(new URL(url).search);
ply = urlParams.get("ply");


// const PLAYERS = parseInt(ply) || 3
const PLAYERS = parseInt(window.prompt("How many players do you want?")) || 3


let move = new Array(PLAYERS).fill(1); // sab players ka initial position 1

// Game start hone se pehle sab players ko render karo
for (let p = 0; p < PLAYERS; p++) {
    movePlayer(p, 1);
}

let gameOver = false;


async function gameLoop() {
    while (!gameOver) {
        for (let player = 1; player <= PLAYERS; player++) {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 1 second before each player's turn

            console.log("Player: " + player);

            random = DiceRoll()
            console.log("Dice Rolled: " + random);

            let newPos = move[player - 1] + random;

            // Agar move 100 se aage ja raha hai to ignore karo
            if (newPos > 100) {
                console.log("Number too large, stay at: " + move[player - 1]);
            } else {
                movePlayer(player - 1, newPos);

                // Prime number check sirf tab chale jab move valid ho
                if (primeNumber.includes(move[player - 1])) {
                    if (random % 2 === 0) { // Ladder logic
                        if (move[player - 1] !== 97) {
                            console.log("Ladder at: " + move[player - 1]);
                            movePlayer(player - 1, move[player - 1] + 10);
                        }
                    } else { // Snake logic
                        console.log("Snake at: " + move[player - 1]);
                        movePlayer(player - 1, move[player - 1] - 10);
                    }
                }
            }


            // Ensure player position doesn't go below 0
            if (move[player - 1] < 1) {
                movePlayer(player - 1, 0);
            }

            console.log("Player " + player + " at: " + move[player - 1]);
            console.log("\n");

            // Check if player wins
            if (move[player - 1] == 100) {
                console.log("Player " + player + " Wins!");
                gameOver = true;
                return;
            }
        }
    }
}

function movePlayer(player, position) {

    const __player = player + 1
    const playerClass = `con${__player}`


    // remove positio
    let target = document.getElementById(`_${position}`);

    if (target) {
        // Remove old .con2 if it exists
        let oldDiv = document.querySelectorAll(`.${playerClass}`);

        if (oldDiv.length > 0) {
            oldDiv[0].remove();
        }
    }



    // update player position
    move[player] = position;


    // update player position
    // Create the new element
    let newDiv = document.createElement("div");
    newDiv.classList.add(playerClass); // add class

    console.log("position", position);

    if (position > 0) {
        // Append it to the target
        document.getElementById(`_${position}`).appendChild(newDiv);
    }


    return


}

// Start the game
gameLoop();

function DiceRoll(params) {

    let random = Math.floor(Math.random() * 6) + 1;
    return random
}

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
// 31, 37, 41, 43, 47, 53, 59,
// 61, 67, 71, 73, 79,
// 83, 89, 97

// console.log("Snake at: " + Forward);
// Forward = Forward - 10;
// if (Forward < 1) {
//     Forward = 0;
// }













// let platfrom=[]
// for (let k = 1; k <= 100; k++) {
//     platfrom.push(k);
//     // if(random )
//     // if (primeNumber.includes(k)) {

//     // } else {


//     // }
// }
// console.log(platfrom);