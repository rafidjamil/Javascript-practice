
const URL = "https://dummyjson.com/products";
const btn = document.querySelector("button");
const para = document.querySelector("p");

//async await fetch api
// const getData  = async()=>{
//     console.log("Fetching data from API...")
//     let response = await fetch(URL)
//     console.log(response)
//     let data = await response.json()
//     // console.log(data.products[2].title)
//     para.innerText = data.products[1].title

// }


//promise chaining 
function getData(){
    fetch(URL).then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        para.innerText = data.products[1].title

    })
}
btn.addEventListener("click",getData)