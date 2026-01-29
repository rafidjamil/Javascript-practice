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
let move = [0, 0, 0, 0];

let gameOver = false;


async function gameLoop() {
    while (!gameOver) {
        for (let player = 1; player <= 4; player++) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before each player's turn

            console.log("Player: " + player);
            let random = Math.floor(Math.random() * 6) + 1;
            console.log("Dice Rolled: " + random);

            // Update player position
            movePlayer(player - 1, move[player - 1] + random);

            // Check for overflow, prime number effects, etc.
            if (move[player - 1] > 100) {
                move[player - 1] -= random;
                console.log("Number too large, stay at: " + move[player - 1]);
            } else if (primeNumber.includes(move[player - 1])) {
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
    move[player] = position;
}

// Start the game
gameLoop();


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