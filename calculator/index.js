function btn7() {
    let d = document.getElementById("btn-7").innerText;
    let input = document.getElementById("Input22");
    let val = input.value;
    
    // Agar input sirf 0 hai replace karo
    if(val === "0") {
        input.value = d;
    }
    // gar input sirf0 hai replace karo
    else if(/[\+\-\*\/x÷]0$/.test(val)) {
        input.value = val.slice(0, -1) + d; //  replace kare ga agr 0 ko last value sy
    }
    else {
        input.value += d; 
        
    }
}
function btn8() {
    let d = document.getElementById("btn-8").innerText;
    let input = document.getElementById("Input22");
    let val = input.value;
    
    // Agar input sirf 0 hai replace karo
    if(val === "0") {
        input.value = d;
    }
    // gar input sirf0 hai replace karo
    else if(/[\+\-\*\/x÷]0$/.test(val)) {
        input.value = val.slice(0, -1) + d; //  replace kare ga agr 0 ko last value sy
    }
    else {
        input.value += d; 
    }
}

function btn9() {
    let d = document.getElementById("btn-9").innerText;
    let input = document.getElementById("Input22");
    let val = input.value;
    
    // Agar input sirf 0 hai replace karo
    if(val === "0") {
        input.value = d;
    }
    // gar input sirf0 hai replace karo
    else if(/[\+\-\*\/x÷]0$/.test(val)) {
        input.value = val.slice(0, -1) + d; //  replace kare ga agr 0 ko last value sy
    }
    else {
        input.value += d; 
    }
}

function btn0() {
    let d = document.getElementById("btn-0").innerText;
    let input = document.getElementById("Input22");
    let val = input.value;
    
    // Agar input sirf 0 hai replace karo
    if(val === "0") {
        input.value = d;
    }
    // gar input sirf0 hai replace karo
    else if(/[\+\-\*\/x÷]0$/.test(val)) {
        input.value = val.slice(0, -1) + d; //  replace kare ga agr 0 ko last value sy
    }
    else {
        input.value += d; 
    }
}

function btn1() {
    let d = document.getElementById("btn-1").innerText;
    let input = document.getElementById("Input22");
    let val = input.value;
    
    // Agar input sirf 0 hai replace karo
    if(val === "0") {
        input.value = d;
    }
    // gar input sirf0 hai replace karo
    else if(/[\+\-\*\/x÷]0$/.test(val)) {
        input.value = val.slice(0, -1) + d; //  replace kare ga agr 0 ko last value sy
    }
    else {
        input.value += d; 
    }
}

function btn2() {
    let d = document.getElementById("btn-2").innerText;
    let input = document.getElementById("Input22");
    let val = input.value;
    
    // Agar input sirf 0 hai replace karo
    if(val === "0") {
        input.value = d;
    }
    // gar input sirf0 hai replace karo
    else if(/[\+\-\*\/x÷]0$/.test(val)) {
        input.value = val.slice(0, -1) + d; //  replace kare ga agr 0 ko last value sy
    }
    else {
        input.value += d; 
    }
}

function btn3() {
    let d = document.getElementById("btn-3").innerText;
    let input = document.getElementById("Input22");
    let val = input.value;
    
    // Agar input sirf 0 hai replace karo
    if(val === "0") {
        input.value = d;
    }
    
    else if(/[\+\-\*\/x÷]0$/.test(val)) {
        input.value = val.slice(0, -1) + d; //  replace kare ga agr 0 ko last value sy
    }
    else {
        input.value += d; 
    }
}

function btn4() {
    let d = document.getElementById("btn-4").innerText;
    let input = document.getElementById("Input22");
    let val = input.value;
    
    // Agar input sirf 0 hai replace karo
    if(val === "0") {
        input.value = d;
    }
    // gar input sirf0 hai replace karo
    else if(/[\+\-\*\/x÷]0$/.test(val)) {
        input.value = val.slice(0, -1) + d; //  replace kare ga agr 0 ko last value sy
    }
    else {
        input.value += d; 
    }
}
function btnh(){
var modal = document.getElementById("history-modal");
    if (modal.style.display === "flex") {
      modal.style.display = "none";   // agar already open hai band karo
    } else {
      modal.style.display = "flex";   // agar band hai open karo
    }
}

function btn5() {
    let d = document.getElementById("btn-5").innerText;
    let input = document.getElementById("Input22");
    let val = input.value;

    // gar input sirf0 hai replace karo
    if(val === "0") {
        input.value = d;
    }
    
    else if(/[\+\-\*\/x÷]0$/.test(val)) {
        input.value = val.slice(0, -1) + d; //  replace kare ga agr 0 ko last value sy
    }
    else {
        input.value += d; 
    }
}

function btn6() {
    let d = document.getElementById("btn-6").innerText;
    let input = document.getElementById("Input22");
    let val = input.value;

    // Agar input sirf0 hai replace karo
    if(val === "0") {
        input.value = d;
    }
    
    else if(/[\+\-\*\/x÷]0$/.test(val)) {
        input.value = val.slice(0, -1) + d; // replace kare ga agr 0 ko last value sy
    }
    else {
        input.value += d; 
    }
}

function btn00() {
    let d = document.getElementById("btn-00").innerText;
    let input = document.getElementById("Input22");
    let val = input.value;

    
    if (val === "0") {
        input.value = "0";
    }
    
    else if (/[\+\-\*\/x÷]$/.test(val)) {    //"00" allow na karo nhi ho ga
        input.value = val; 
    }
   
    
   
    else {
        input.value += "00";
    }
}


// function btnplus() {
//     d = document.getElementById("btn-plus").innerText
//     document.getElementById("Input22").value += d


// }
// function btnsub() {
//     d = document.getElementById("btn-minus").innerText
//     document.getElementById("Input22").value += d
// }
// function btndivide() {


//     document.getElementById("Input22").value += "÷"
// }
// function btnmul() {
//     //    document.getElementById("Input22").innerText="X"
//     document.getElementById("Input22").value += "x"
// }
function btnac() {
    document.getElementById("Input22").value = "0"
    // document.getElementById("Input22")
    
}
function btndot() {
    document.getElementById("Input22").value += document.getElementById("btn-dot").innerText;

// is ki condition esy banani h ke operator sy pehly or operator kay baad hi . use ho ske 
    

    // // Agar operator ke baad "00" hai -> replace with "0."
    // if (/[\+\-\*\/]00$/.test(val)) {
    //     input.value = val.slice(0, -2) + "0.";
    // }
    // else {
    //     input.value += ".";
    // }
}
function btnbackspace() {

    d = document.getElementById("Input22")

    arr = d.value.split("");
    arr.pop();

    d.value = arr.join("");
    // return 0;
    
    
}
function handleOperator(operator) {
    let input = document.getElementById("Input22");
    let currentValue = input.value;
    let lastChar = currentValue.slice(-1);

    const operators = ['+', '-', '÷', 'x'];
    

    if (operators.includes(lastChar)) {
        input.value = currentValue.slice(0, -1) + operator;
    } else {
        input.value += operator;
    }
}








let historyArray = [];
function btneql() {
    let expr = document.getElementById("Input22").value;
    let d = expr.replace(/÷/g, "/").replace(/x/g, "*");

    let result = eval(d);
    
    
    document.getElementById("Input22").value = result;

   
    historyArray.push(expr + " = " + result);

   
    let historyBox = document.getElementById("text-arae");
    historyBox.value = historyArray.join("\n");
}





