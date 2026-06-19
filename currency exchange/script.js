const BASE_URL = "https://fxapi.app/api";
// const flagURL = "https://flagsapi.com/${countryCode}/flat/64.png";

const dropdowns = document.querySelectorAll(".cx-body select");

const btn = document.getElementById("convert-btn");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amtcont = document.getElementById("result-display");
const toamt = document.getElementById("to-amount");

const breakdown = document.getElementById("breakdown-text");


const rescurrname = document.getElementById("result-currency");

for(let select of dropdowns){
    for(currencyCode in Countrycode){
        let newOption = document.createElement("option");
        newOption.value = currencyCode;
        newOption.innerText = currencyCode.toUpperCase();
        if(select.name ==="from" && currencyCode==="USD"){
            newOption.selected="selected";
        }else if(select.name ==="to" && currencyCode==="PKR"){
            newOption.selected="selected";

        }

        select.append(newOption);
    // console.log(code, Countrycode[code]);
}
 

    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);

    })



}

const updateflag =(element)=>{
    let currencyCode = element.value;
    let countryCode = Countrycode[currencyCode];
    let imgTag = element.parentElement.querySelector("img");
    imgTag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    


}
btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    allCal()
  
    
})
const allCal= async ()=>{
  let amount = document.getElementById("from-amount");
    let amountval = amount.value;
    
    console.log(amountval);

    console.log(fromCurrency.value, toCurrency.value);
    const URL = `${BASE_URL}/${fromCurrency.value}/${toCurrency.value}.json`
    console.log(URL)
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    // console.log()
    let totalamt = amountval * data.rate;
    console.log(totalamt)
    amtcont.innerText = totalamt;
    toamt.value = totalamt;
    rescurrname.innerText = data.target
    let notetotal = `${amountval} USD × ${data.rate} = ${totalamt} ${data.target}`
    breakdown.innerText=notetotal
    if(amountval === "" || amountval < 1){
        amountval=1;
        amount.value = 1;
    }
    amtcont.innerText= totalamt;




}
allCal();




