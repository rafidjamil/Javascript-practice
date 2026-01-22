const arr1 = [
    {
        
        
        address: "karachi"
    }
];

const arr2 = [
    {
        
        
        address: "karachi"
    }
];

for(let i = 0; i <arr1.length; i++) {
    for(let j = 0; j< arr2.length; j++) {

        let isSame = true;

        for(let key in arr2[j]) {
            if (arr1[i][key] !== arr2[j][key]) {
                isSame = false;

            }
        }

        if(isSame){
            console.log("good");
        }else{
            console.log("bad");
        }
    }
}
