// function api(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Weather Api")
//             resolve(200)
//         },2000)
//     })
// }
// async function getWeather(){
//     await api()

// }

//await is liye use ho rha cuz then or catch more code tha bari bari api fetch karwane kay liye 
// to await kam code may aik hi time gap sy parameter value ko print kar rha h
// function getAllData(dataId){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Fetching data for ID: " + dataId)
//             resolve("success")
//         },2000)
//     })
// }
// async function getdata(){
//     await getAllData(123)
//     await getAllData(456)
//     await getAllData(789)   

// }


// use of Iiff (immediately invoked function expression) to call the async function
//  without calling function in console 

function getAllData(dataId){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Fetching data for ID: " + dataId)
            resolve("success")
        },2000)
    })
}
(async function () {
    await getAllData(123)
    await getAllData(456)
    await getAllData(789)   

})()
