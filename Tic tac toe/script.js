let boxes = document.querySelectorAll(".hidden-btn");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Clicked");
        box.innerHTML = "x";
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true; 
        }
        box.disabled = true;
        checkwinner();
    
    })
})

const checkwinner = ()=>{
    for( let pattern of winPatterns){
        let post1val = boxes[pattern[0]].innerText
        let post2val = boxes[pattern[1]].innerText
        let post3val = boxes[pattern[2]].innerText

        if(post1val != "" && post2val != "" && post3val != ""){
            if(post1val===post2val && post2val === post3val){
                console.log("Winner is " + post1val);
                document.querySelector(".winner-message").innerText = "Winner is " + post1val;
            }
        }
    }
};