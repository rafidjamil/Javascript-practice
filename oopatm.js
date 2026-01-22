const user = [
    { name: "Rafid", id: "865678865445", password: "94578", balance: 500000 },
    { name: "Ahmed", id: "098778865445", password: "34569", balance: 90000 }
];

let atmCash;

class Users {
    constructor(allusers,atmCash) {
        this.loginusers = null;
        this.allusers = allusers;
        this.atmCash = atmCash;
    }

    login(Id, Pass) {
        const users = this.allusers.find(us => us.id == Id && us.password == Pass);
        if (users) {
            this.loginusers = Id;
            console.log(`Login successful! Welcome ${users.name}`);
        } else {
            console.log("Invalid ID or Password");
        }
    }


    checkBalance() {
        const users = this.allusers.find(us => us.id == this.loginusers);
        if (users) {
            console.log(`${users.name} balance is now: ${users.balance}`);
        } else {
            console.log("Please login first");
        }
    }

    withdraw(amount) {
    const users = this.allusers.find(us => us.id == this.loginusers);
    if (!users) {
        console.log("Please login first.");
        return;
    }
    if (amount % 500 !== 0) {
        console.log("ATM dispenses only multiples of 500");
        return;
    }
    if (amount > users.balance) {
        console.log("Insufficient account balance.");
        return;
    }
    if (amount > atmCash) {
        console.log("ATM does not have enough cash.");
        return;
    }

 
    users.balance -= amount;
    this.atmCash -= amount;

    console.log(`Successfully withdrawn: ${amount}`);
    // console.log(`New account balance: ${users.balance}`);
    console.log(`Bank have now: ${this.atmCash}`);
    
    
}


    logout() {
        const users = this.allusers.find(us => us.id == this.loginusers);
        if (users) {
            this.loginusers = null;
            console.log("You have been logged out");
        } else {
            console.log("You are not logged in");
        }
    }
}


const bank = new Users(user,100000);
bank.login("865678865445", "94578");
bank.checkBalance();
// bank.atmlimit(100000); 
bank.withdraw(2000)  
bank.withdraw(50000)  
bank.withdraw(500)  
bank.withdraw(5)  
bank.checkBalance();
// bank.checkBalance();

// // bank.atmlimit(100000); 
// bank.withdraw(20000)  
// bank.checkBalance();
// bank.logout();



// bank.login("098778865445", "34569");
// bank.checkBalance();
// // bank.atmlimit(100000); 
// bank.withdraw(15000)  
// bank.checkBalance();

// // bank.atmlimit(100000); 
// bank.withdraw(20000)  
// bank.checkBalance();
// bank.logout();


// bank.login("865678865445", "94578");
// bank.checkBalance();
// // bank.atmlimit(100000); 
// bank.withdraw(15000)  
// bank.checkBalance();

// // bank.atmlimit(100000); 
// bank.withdraw(20000)  
// bank.checkBalance();
// bank.logout();