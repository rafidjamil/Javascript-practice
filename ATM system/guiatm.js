const user = [
    { name: "Rafid Jamil", id: "865678865445", password: "00000", balance: 500000 },
    { name: "Ahmed Alam", id: "098778865445", password: "12346", balance: 900000 }
];
const owner = [
    { id: "987656789876", password: "101010" }
]
let atmCash;

localStorage.getItem("allusers") == null ? localStorage.setItem("allusers", JSON.stringify(user)) : localStorage.getItem("allusers")

localStorage.getItem("atmowner") == null ? localStorage.setItem("atmowner", JSON.stringify(owner)) : localStorage.getItem("atmowner")

localStorage.setItem("backgroundcolor", "#2ecc71")


// function color1() {
//   let savedColor = localStorage.getItem("backgroundcolor");
//   if (savedColor) {
//     document.getElementById("user-color").style.backgroundColor = savedColor;
// }
// }

// // localStorage.setItem("backgroundcolorr","#2ecc71")
// function color() {
//   let savedColorr = localStorage.getItem("backgroundcolor");
//   if (savedColorr) {
//     document.getElementById("atm-color").style.backgroundColor = savedColorr;
//   }
// }



// window.onload = function () {
//   color1();
//   color();
// };
// function color1() {
//     localStorage.setItem("activePage", "user");
//     // window.location.href = "user.html";
//   }

//   function Color1() {
//     localStorage.setItem("activePage", "atm");
//     // window.location.href = "atm.html";
//   }
// window.addEventListener("DOMContentLoaded", function() {
//   let active = localStorage.getItem("activePage");
//   if (active === "user") {
//     document.getElementById("user-color").style.backgroundColor = "#2ecc71";
//   }
// });
// window.addEventListener("DOMContentLoaded", function() {
//   let active = localStorage.getItem("activePage");
//   if (active === "atm") {
//     document.getElementById("atm-color").style.backgroundColor = "#2ecc71";
//   }
// });
function setActive(buttonId, url) {

    localStorage.setItem("activeButton", buttonId);

    window.location.href = url;
}
window.onload = function() {
    let active = localStorage.getItem("activeButton");
    if (active) {
        let btn = document.getElementById(active);
        if (btn) {
            btn.style.backgroundColor = "#2ecc71";
        }
    }
};
// let savedColor = localStorage.getItem("backgroundcolor");


//     function changeColor(){
//   document.getElementById("color-user").style.color = "#2ecc71"
//  }

//  function changeColo1r1(){
//   document.getElementById("change-color1").style.color = "#2ecc71"
//  }
class Owner {
    constructor(atmowner) {
        this.loginOwner = null
        this.atmowner = JSON.parse(localStorage.getItem("atmowner"));

    }
    atmlogin() {
        let d = document.getElementById("atm-id");
        let p = document.getElementById("atm-password");

        const foundUserr = this.atmowner.find(u => u.id === d.value);

        if (d.value == "" || p.value == "") return;

        if (foundUserr && foundUserr.password === p.value) {
            // -------------------------------------------
            // this.loginusers = foundUser;

            const ownerData = {
                id: foundUserr.id,

                password: foundUserr.password

            };

            if (!localStorage.getItem("atmCash")) {
                localStorage.setItem("atmCash", JSON.stringify(this.atmCash));
            }

            localStorage.setItem("loggedInOwner", JSON.stringify(ownerData));
            window.location.href = "atmportal.html";


        } else {
            alert("Invalid Id or password");
        }

    }



    logoutatm() {
        localStorage.removeItem("loggedInOwner");
        window.location.href = "atmlogin.html";
    }
    registerUser() {
        let r_name = document.getElementById("reg-name").value;
        let r_id = document.getElementById("reg-id").value;
        let r_pass = document.getElementById("reg-password").value;

        if (r_name === "" || r_id === "" || r_pass === "") {
            alert("Fill the complete form before register!");
            return;
        }


        let users = JSON.parse(localStorage.getItem("allusers")) || [];


        let exist = users.find(u => u.id === r_id);
        if (exist) {
            alert("This id already exists!");
            return;
        }


        let newUser = {
            name: r_name,
            id: r_id,
            password: r_pass,
            balance: 0
        };


        users.push(newUser);


        localStorage.setItem("allusers", JSON.stringify(users));

        alert("User registered successfully!");
    }


}




class User {

    constructor(allusers, atmCash) {
        this.loginusers = null;
        this.allusers = JSON.parse(localStorage.getItem("allusers"));
        this.atmCash = atmCash;
        this.atmowner = JSON.parse(localStorage.getItem("atmowner"));
    }

    login() {
        let d = document.getElementById("id-btn");
        let p = document.getElementById("password-btn");

        const foundUser = this.allusers.find(us => us.id === d.value);

        if (d.value == "" || p.value == "") return;

        if (foundUser && foundUser.password === p.value) {
            // -------------------------------------------
            // this.loginusers = foundUser;

            const userData = {
                id: foundUser.id,
                name: foundUser.name,
                balance: foundUser.balance,
                password: foundUser.password

            };

            if (!localStorage.getItem("atmCash")) {
                localStorage.setItem("atmCash", JSON.stringify(this.atmCash));
            }

            localStorage.setItem("loggedInUser", JSON.stringify(userData));
            window.location.href = "userportal.html";


        } else {
            alert("Invalid Id or password");
        }

    }


    updateUser() {
        let oldPassword = document.getElementById("oldpassword");
        let u = JSON.parse(localStorage.getItem("loggedInUser"));
        if (!u) {
            alert("Login first");
            return
        }
        if (username.value) u.name = username.value;
        if (newpassword.value) {
            if (oldPassword.value !== u.password) {
                return alert("Old password is incorrect");
            }
            if (newpassword.value !== confirmpassword.value) {
                return alert("Passwords don't match");
            }
            u.password = newpassword.value;
        }

        let all = JSON.parse(localStorage.getItem("allusers")) || [];


        localStorage.setItem("allusers", JSON.stringify(all.map(x => x.id === u.id ? u : x)));



        localStorage.setItem("loggedInUser", JSON.stringify(u));
        alert("Updated!");
    }


    logoutUser() {
        localStorage.removeItem("loggedInUser");
        window.location.href = "atmsignupin.html";
    }

    decline() {
        document.getElementById("id-btn").value = "";
        document.getElementById("password-btn").value = "";
    }

    withdraw() {
        let amt = document.getElementById("amount");
        let amount = Number(amt.value);

        const users = this.loginusers;
        if (!users) {
            alert("Please login first.");
            return;
        }

        if (amount <= 0) {
            // alert("Enter a valid amount.");
            return;
        }

        if (amount % 500 !== 0) {
            alert("ATM only gives cash in multiples of 500.");
            return;
        }

        if (amount > users.balance) {
            alert("Not enough balance in your account.");
            return;
        }

        let savedAtmCash = JSON.parse(localStorage.getItem("atmCash")) || 0;
        let c5000 = JSON.parse(localStorage.getItem("count5000")) || 0;
        let c1000 = JSON.parse(localStorage.getItem("count1000")) || 0;
        let c500 = JSON.parse(localStorage.getItem("count500")) || 0;

        if (amount > savedAtmCash) {
            alert("ATM doesn't have enough cash.");
            return;
        }


        let needed = amount;
        let use5000 = 0
        let use1000 = 0
        let use500 = 0;

        let n5000 = Math.min(Math.floor(needed / 5000), c5000);
        needed -= n5000 * 5000;
        use5000 = n5000;


        //    let n1000 = Math.min(Math.floor(needed / 1000),c1000)
        //    needed -= n1000 * 1000;
        //    use1000 = n1000
        let n1000 = Math.min(Math.floor(needed / 1000), c1000);
        needed -= n1000 * 1000;
        use1000 = n1000;
        // let n500 = Math.min(Math.Floor(needed / 500),c500)
        // needed -= c500*500
        // use500 = n500;
        let n500 = Math.min(Math.floor(needed / 500), c500);
        needed -= n500 * 500;
        use500 = n500;




        c5000 -= use5000;
        c1000 -= use1000;
        c500 -= use500;

        savedAtmCash -= amount;
        users.balance -= amount;

        localStorage.setItem("atmCash", JSON.stringify(savedAtmCash));
        localStorage.setItem("count5000", JSON.stringify(c5000));
        localStorage.setItem("count1000", JSON.stringify(c1000));
        localStorage.setItem("count500", JSON.stringify(c500));
        localStorage.setItem("loggedInUser", JSON.stringify(users));


        let allusers = JSON.parse(localStorage.getItem("allusers")) || [];
        allusers.forEach(u => {
            if (u.id == users.id) {
                u.balance = users.balance;
            }
        });
        localStorage.setItem("allusers", JSON.stringify(allusers));

        this.atmCash = savedAtmCash;
        alert(`Successfully withdrawn: ${amount}\n 
        5000 x ${use5000}
        1000 x ${use1000}
        500 x ${use500}`);
        document.getElementById("amount").value = 0

        document.getElementById("account-balance").textContent = users.balance;
        document.getElementById("show-cash").textContent = savedAtmCash;
        document.getElementById("sp5000").textContent = c5000;
        document.getElementById("sp1000").textContent = c1000;
        document.getElementById("sp500").textContent = c500;


    }

    deposit() {
        let amount = Number(document.getElementById("deposit").value);



        if (amount <= 0) {
            // alert("Enter valid amount.");
            return;

        }
        if (amount % 500 !== 0) {
            alert("ATM only gives cash in multiples of 500.");
            return;
        }


        this.loginusers.balance += amount;


        let allusers = JSON.parse(localStorage.getItem("allusers"));
        allusers.forEach(u => {
            if (u.id === this.loginusers.id) {
                u.balance = this.loginusers.balance;
            }
        });
        localStorage.setItem("allusers", JSON.stringify(allusers));





        localStorage.setItem("loggedInUser", JSON.stringify(this.loginusers));

        alert("Deposit successful: " + amount);
        document.getElementById("deposit").value = 0

        document.getElementById("account-balance").textContent = this.loginusers.balance;

    }

    //    atmCashAdd() {
    //         let atmAmount = Number(document.getElementById("atm-cash").value);
    //          let atmCash = JSON.parse(localStorage.getItem("atmCash")) || 0;

    //         if (atmAmount <= 0) {
    //             return;
    //         }
    //         if (atmAmount % 500 !== 0) {
    //             alert("ATM only gives cash in multiples of 500.");
    //             return;
    //         }

    //         atmCash += atmAmount;
    //         localStorage.setItem("atmCash", JSON.stringify(atmCash));


    //         alert("Deposit to ATM successful: " + atmAmount);

    //         document.getElementById("show-cash").textContent = atmCash;




    //     }
}







const bank = new User(user, 0);
const bank1 = new Owner(owner);





window.addEventListener("DOMContentLoaded", () => {
    let atmCash = JSON.parse(localStorage.getItem("atmCash")) || 0;
    document.getElementById("show-cash").textContent = atmCash;
});



window.addEventListener("DOMContentLoaded", () => {
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    // atm cash ko ui may update kare ga.
    if (savedUser) {

        bank.loginusers = savedUser;


        document.getElementById("user-name").textContent = savedUser.name;
        document.getElementById("account-balance").textContent = savedUser.balance;
    }
});

function btn0() {
    let d = document.getElementById("btn-0").innerText;
    let input = document.getElementById("amount");
    let val = input.value;

    if (val === "0") {
        input.value = d;
    } else {
        input.value += d;
    }
}

function btn1() {
    let d = document.getElementById("btn-1").innerText;
    let input = document.getElementById("amount");
    let val = input.value;

    if (val === "0") {
        input.value = d;
    } else {
        input.value += d;
    }
}

function btn2() {
    let d = document.getElementById("btn-2").innerText;
    let input = document.getElementById("amount");
    let val = input.value;

    if (val === "0") {
        input.value = d;
    } else {
        input.value += d;
    }
}

function btn3() {
    let d = document.getElementById("btn-3").innerText;
    let input = document.getElementById("amount");
    let val = input.value;

    if (val === "0") {
        input.value = d;
    } else {
        input.value += d;
    }
}

function btn4() {
    let d = document.getElementById("btn-4").innerText;
    let input = document.getElementById("amount");

    let val = input.value;

    if (val === "0") {
        input.value = d;
    } else {
        input.value += d;
    }
}

function btn5() {
    let d = document.getElementById("btn-5").innerText;
    let input = document.getElementById("amount");
    let val = input.value;

    if (val === "0") {
        input.value = d;
    } else {
        input.value += d;
    }
}

function btn6() {
    let d = document.getElementById("btn-6").innerText;
    let input = document.getElementById("amount");
    let val = input.value;

    if (val === "0") {
        input.value = d;
    } else {
        input.value += d;
    }
}

function btn7() {
    let d = document.getElementById("btn-7").innerText;
    let input = document.getElementById("amount");
    let val = input.value;

    if (val === "0") {
        input.value = d;
    } else {
        input.value += d;
    }
}

function btn8() {
    let d = document.getElementById("btn-8").innerText;
    let input = document.getElementById("amount");
    let val = input.value;

    if (val === "0") {
        input.value = d;
    } else {
        input.value += d;
    }
}

function btn9() {
    let d = document.getElementById("btn-9").innerText;
    let input = document.getElementById("amount");
    let val = input.value;

    if (val === "0") {
        input.value = d;
    } else {
        input.value += d;
    }
}

function btn_arrow() {

    d = document.getElementById("amount")

    arr = d.value.split("");
    arr.pop();

    d.value = arr.join("");
}