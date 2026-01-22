const aray = [
    {
        name: "Rafid Jamil",
        DOB: "24-08-2006",
        age: [
            {
                age1: 12,
                age2: 20,
                Top_uni: [
                    {
                        uni1: "Nust",
                        uni2: "Fast",
                        laptop: [
                            {
                                laptop1: "mac",
                                laptop2: "Dell",
                                laptop3: "hp",
                                juice:[
                                    {
                                        juice1: "limca",
                                        juice2: "pinacolata"

                                    }
                                ]

                            }
                        ]

                    }
                ]
            }

        ]
    }
]

function finder(arr){
    let age = aray[0].age[0];
    // let topUni = age.Top_uni[0];
    // let laptop = topUni.laptop[0];
    // let juice = laptop.juice[0];
    if(age.hasOwnProperty(arr)){
        console.log(`${arr}`,age[arr])
        return;
    }
}
finder(age1);






// Object.entries
// Object.keys
// Object.values





