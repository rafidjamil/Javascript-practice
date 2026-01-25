
let bank = {
    5000: 5,
    1000: 10,
    500: 10
};
function transact() {
    let amt = document.getElementById("input-amount").value;
    let text = document.getElementById("text-area");

    if (amt % 500 !== 0) {
        text.value += "Invalid amount\n";
        return;
    }

    let used = {
        5000: 0,
        1000: 0,
        500: 0
    };

    for (let note of [5000, 1000, 500]) {
        let take = Math.min(Math.floor(amt / note), bank[note]);
        used[note] = take;
        amt = amt - take * note;
    }

    if (amt == 0){
        for (let n of [5000, 1000, 500]) {
            bank[n] -= used[n];
        }
        text.value += "Transaction successful\n";
        for (let n of [5000, 1000, 500]) {
            if (used[n]){
                 text.value += used[n] + " notes of " + n + "\n";
            }
        }
    } else {
        text.value += "ATM is dispence\n";
    }
}






[]
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
        this.result = [0]
    }

    add() {
        this.result = this.num1 + this.num2
    }
    sub() {
        this.result = this.num1 - this.num2
    }
    mul(num3, num4) {
        this.result = num3 * num4
    }

}

const mc = new Calculator()
mc.mul(2,5)
console.log(mc.result)