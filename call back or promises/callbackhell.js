
// It is Promise chaining it is used to avoid callback hell 
// and it is more readable and maintainable than callback hell
// function asyncFunction1(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 1")
//             resolve("success")
//         },4000)
//         // reject("error")
//     });
// };
// function asyncFunction2(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 2")
//             resolve("success")
//         },4000)
//         // reject("error")
//     });
// };
// console.log("fetching data 1....")
// asyncFunction1().then((res)=>{
//     console.log("fetching data 2....")
//     asyncFunction2().then((res)=>{})
// })

// advance form to code the same code above called promise chaining
// function getdata(dataId){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(dataId)
//             resolve("success")
//         },4000)
//         // reject("error")
//     });
// };
// getdata(1).then((res)=>{
//     console.log(res)
//     getdata(2).then((res)=>{
//         console.log(res)
//     })
// })




// 1st
// const getpromise =() =>{
//     return new Promise ((resolve, reject)=>{
//         console.log("I am a Promise")
//         resolve("success")
//         // reject("error")
//     });
// };
// // agr fullfilled hoga to then chalega aur agar rejected hoga to catch chalega
// let promise = getpromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res)
// })
// promise.catch((err)=>{
//     console.log("promise rejected",err)
// })



// function getData(dataId, nextData){
    
//     return new Promise((resolve, reject )=>{
//     setTimeout( ()=>{

//         console.log("data", dataId)
//         // resolve("data is fetched");
//         reject("data is not fetched");
//         if(nextData){
//             nextData()
//         }
//     },2000)
//     // let promise = getData(123) web console may karna h ye 
// })
// } 



//callback hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5,()=>{
                   
//                 })
//             })
//     })
// })
// })