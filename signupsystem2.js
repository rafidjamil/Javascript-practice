const user = [
    {
        name: "Rafid",
        email: "rafid@gmail.com",
        password: "123587690",
        confirmPassword: "123587690",
        dob: "10 09 ",
        year: "2008",
        address: "Gulsahn-e-iqbal",
        country: "Pakistan",
    },
    {
        name: "Ali",
        email: "ali@gmail.com",
        password: "123479690",
        confirmPassword: "123479690",
        dob: "14 07 ",
        year: "2008",
        address: "Gulsahn-e-hadeed",
        country: "India",
    },
    {
        name: "hamza",
        email: "hamza@gmail.com",
        password: "1234567890",
        confirmPassword: "1234567890",
        dob: "13-09",
        year: "2003",
        address: "Gulsahn-e-johar",
        country: "Afghanistan",
    }
]

const countryCode = [
    {
        code: +92,
        name: "Pakistan"

    },
    {
        code: +91,
        name: "India"
    },
    {
        code: +93,
        name: "Afghanistan"
    }
]


function signup(emailf, passwordf, confirmPasswordf, namef = "-", dobf = "-", yearf = "-", addressf = "-", countryf = "-", countryCodef = "-") {

    // for (let i = 0; i < user.length; i++) {

    //     if (user[i].email == emailf) {
    //         console.log("<------------------------------------------>");
    //         console.log(`Signup failed ${emailf} already exist!`);
    //         console.log("<------------------------------------------>");
    //         return;
    //     }

    // }


    const existingUser = user.find(4)
    if (existingUser) {
        console.log(`Signup failed ${emailf} already exist!`);
        return;

    }




    if (passwordf.toString().length < 8) {

        console.log("Password must be 8 character!!")
        return;

    } else if (passwordf !== confirmPasswordf) {
        console.log("Confirm password is incorrect!");
        return;

    } else if (!/[A-Z]/.test(passwordf)) {
        console.log("Password must contain at least one uppercase letter!");

        return;
    }
    else if (!/[0-9]/.test(passwordf)) {
        console.log("Password must contain at least one numerric value!");
        return;
    }
    else if (!/[^a-zA-Z0-9]/.test(passwordf)) {
        console.log("Password must contain at least one special symbol!");
        return;
    }

    if (yearf > 2025 - 18) {
        console.log("Account cant be created. You are under 18!!");
        return;
    }



    // let coder = false;

    // for (let j = 0; j < countryCode.length; j++) {
    //     if (countryCode[j].code == countryCodef && countryCode[j].name == countryf) {

    //         coder = true;
    //         break;
    //     }
    // }

    // if (!coder) {
    //     console.log("Country code is incorrect!");
    //     return;
    // }
    const countrycodeobj = countryCode.find(c => c.code == countryCodef && c.name ==countryf)
    if (!countrycodeobj) {
        console.log("Country code is incorrect!");
        return;

    }






    user.push({
        name: namef,
        email: emailf,
        password: passwordf,
        confirmPassword: confirmPasswordf,
        dob: dobf,
        year: yearf,
        address: addressf,
        country: countryf
    });

    console.log("<------------------------------------------>");
    console.log("Account created successfully!!");
    console.log("<------------------------------------------>");

}





function signin(email, password) {

    // for (let i = 0; i < user.length; i++) {
    //     if (user[i].email == email && user[i].password == password) {


    //         console.log("Login successful!");

    //         console.log("Name:", user[i].name);
    //         console.log("DOB:", user[i].dob, user[i].year);

    //         console.log("Address:", user[i].address);
    //         console.log("Country:", user[i].country);
    //         console.log("Email:", user[i].email);
    //         console.log("Password:", user[i].password);


    //         console.log("<------------------------------------------>");
    //         return;
    //     }
    // }

    const existingUsers = user.find(u => u.email == email && u.password == password)
    if (existingUsers) {
        console.log("Login successful!");

            console.log("Name:", existingUsers.name);
            console.log("DOB:", existingUsers.dob, existingUsers.year);

            console.log("Address:", existingUsers.address);
            console.log("Country:", existingUsers.country);
            console.log("Email:", existingUsers.email);
            console.log("Password:", existingUsers.password);


            console.log("<------------------------------------------>");
        return;

    }




    console.log("Signin failed due to invalid email or password!");
    console.log("<----------------------------------------------->");

}

signup("mustafa@gmail.com", "!A12345678", "!A12345678", "M. Mustafa", "10 08", "2006", "Gulshan e iqbal", "Pakistan", +92);
signin("mustafa@gmail.com", "!A12345678")

// signup("aliakbar@gmail.com", "Rafidddd122+", "Rafidddd122+", "Rafid Jamil", "10 08", "2004", "Gulshan e iqbal", "India", +91);
// signin("aliakbar@gmail.com", "Rafidddd122+")
// signin("rafid@gmail.com",1235);
// console.log('usersss array',user)
// signin("ali@gmail.com",12345);

// signin("rafidjamil001@gmail.com",10082004);

//country code will match with country.
//password will be 8 digits pass minimum with min 1 char 1 numeric or 1 symbol and confirm password.
//DOB year will be 18+