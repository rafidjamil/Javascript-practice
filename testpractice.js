const users = [{
        name: "Rafid",
        email: "rafid@gmail.com",
        password: 12345,
        balance: 50000
    },
    {
        name: "Musto",
        email: "musto@gmail.com",
        password: 12346,
        balance: 50000
    }
]

const ATMbalance = {
    "5000": 10,
    "1000": 10,
    "500": 10
}
class ATM {

    constructor(ATMbalance) {
        this.ATMbalance = ATMbalance;
        this.user = null;

    }

    login(email, password) {
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
    deposit(amount) {
        const user = users.find((u) => u.email == this.user.email && u.password == this.user.password)
        user ? ((user.balance += amount, console.log("Deposit amount is: ", amount), console.log("Now", this.user.name, "balance is: ", this.user.balance))) :
            console.log("User not found");

    }
    getatmCash() {
        let total = 0;
        for (const key in this.ATMbalance) {
            if (!Object.hasOwn(this.ATMbalance, key)) continue;
            const note = this.ATMbalance[key];
            total += parseInt(key) * note
        }
        return total

    }
    getwithdraw(Withdrawamount = 0) {
        console.log("-------------------------------------");
        console.log("Get Withdraw of ", Withdrawamount);
        console.log("ATM BALANCE", ATMbalance);
        console.log("-------------------------------------");

        if ((Withdrawamount % 500) != 0) return console.log("Invalid amount, it should be multiple of 500")

        const totalAtmBalance = this.getatmCash()

        if ((totalAtmBalance < Withdrawamount) != 0) return console.log("ATM out of cash!");
        this.deposit(Withdrawamount * -1)
        let tempAmount = Withdrawamount
        const order = ["5000", "1000", "500"]
        order.forEach((key) => {
            // console.log("Order", key);
            const tempCalc = parseInt(tempAmount / parseInt(key)) / ATMbalance[key] >= 1 ? ATMbalance[key] : parseInt(tempAmount / parseInt(key))
            if (tempCalc > 0 && tempAmount > 0 && ATMbalance[key] > 0) {



                ATMbalance[key] -= tempCalc

                tempAmount -= parseInt(key) * tempCalc

                console.log(parseInt(Withdrawamount / parseInt(key)), key)
                console.log("tempCalc", tempCalc);
                console.log("tempAmount", tempAmount);
            }


        })
        console.log("widthdraw cash", Withdrawamount);
        console.log("User Balance", this.user.balance)

        console.log("NEW ATM BALANCE", ATMbalance);


    }



}

const atm = new ATM(ATMbalance)
atm.login("rafid@gmail.com", 12345)
console.log("Loginuser", atm.user)
console.log("atmbalance", atm.ATMbalance);
atm.deposit(10000)
    // atm.getatmCash()
console.log("TotalATMBalance", atm.getatmCash())

atm.UpdateATMBalance({ "500": 2, "5000": 7 })


console.log("TotalATMBalance", atm.getatmCash());

// atm.getwithdraw(500)

// atm.getWithdraw(5000)
// console.log("");
atm.getwithdraw(8000)

console.log("atmbalance", atm.ATMbalance);





// console.log("Deposit", atm.deposit)