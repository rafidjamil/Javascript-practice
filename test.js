const users = [
    { name: "Musto", email: "musto@gmail.com", password: "123", balance: 10000 },
    { name: "Mustafa", email: "mustafaalvi21@gmail.com", password: "456", balance: 15000000 },
]

const ATMbalance = {
    "5000": 10,
    "1000": 10,
    "500": 10,
}


class ATM {
    constructor(ATMbalance) {
        this.ATMbalance = ATMbalance
        this.user = null
    }

    Login(email, password) {
        this.user = users.find((u) => {
            return u.email == email && u.password == password
        }) || null
    }

    UpdateATMBalance(params) {
        for (const key in params) {
            if (!Object.hasOwn(params, key)) continue;

            const value = params[key];
            console.log(key, value);

            this.ATMbalance[key] += value
        }
    }

    UpdateLoginUserBalance(newBalance) {
        console.log("this.user", this.user);

        // this.user['balance'] += newBalance || 0

        const foundUserIndex = users.findIndex(u => u.email === this.user.email)
        users[foundUserIndex]['balance'] += newBalance || 0

        console.log("users.indexOf(u.email == this.user.email)", users.findIndex(u => u.email === this.user.email));
        console.log("this.user['balance']", this.user['balance'], users);
    }

    getTotalATMBalance() {
        let total = 0
        for (const key in this.ATMbalance) {
            if (!Object.hasOwn(this.ATMbalance, key)) continue;

            const note = this.ATMbalance[key];
            total += parseInt(key) * note
        }

        return total
    }


    getWithdraw(amount = 0) {
        console.log("-------------------------------------");
        console.log("Get Withdraw of ", amount);
        console.log("ATM BALANCE", ATMbalance);
        console.log("-------------------------------------");

        if ((amount % 500) != 0) return console.log("Invalid amount, it should be multiple of 500")


        const totalATMBalance = this.getTotalATMBalance()
        if ((totalATMBalance < amount) != 0) return console.log("ATM out of Cash")


        this.UpdateLoginUserBalance(amount * -1)

        let tempAmount = amount

        const order = ["5000", "1000", "500"];

        order.forEach((key, i) => {
            console.log("----------", key);

            const tempCalc = parseInt(tempAmount / parseInt(key)) / ATMbalance[key] >= 1 ? ATMbalance[key] : parseInt(tempAmount / parseInt(key))
            if (tempCalc > 0 && tempAmount > 0 && ATMbalance[key] > 0) {



                ATMbalance[key] -= tempCalc

                tempAmount -= parseInt(key) * tempCalc

                console.log(parseInt(amount / parseInt(key)), key, "000000000000000")
                console.log("tempCalc", tempCalc);
                console.log("tempAmount", tempAmount);
            }

        });

        console.log("NEW ATM BALANCE", ATMbalance);

    }

}
const atm = new ATM(ATMbalance)

atm.Login("mustafaalvi21@gmail.com", 456)
console.log("loginUser", atm.user);
console.log("ATMbalance", atm.ATMbalance);


atm.UpdateATMBalance({ "500": 2, "5000": 7 })
console.log("ATMbalance", atm.ATMbalance);

atm.UpdateLoginUserBalance(500)

console.log("TotalATMBalance", atm.getTotalATMBalance())

atm.getWithdraw(80000)
atm.getWithdraw(8000)
atm.getWithdraw(8000)
atm.getWithdraw(3500)
atm.getWithdraw(1000)
atm.getWithdraw(1000)