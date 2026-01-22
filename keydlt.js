const userInfo= [
    {
        name: "Rafid",
        age: 12,
        address: "karachi",
        phone:+923004179550,

    },

    {
        school:"Fortune house School System",
        college:"Gulshan Degree Science College"

    }
]
console.log(userInfo);
delete userInfo[0].phone;

delete userInfo[1].college;
console.log(userInfo);


