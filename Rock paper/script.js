// let computer_name = document.getElementById('computer-name');

// user_name.textContent = Math.floor(Math.random() * 3) + 1; 

// let paper_choice = 2;
// let scissors_choice = 3;


function playGame(img) {
    let rock = 'images/rock.png';
    let paper = 'images/paper.png';
    let scissors = 'images/scissor.png';
    let rock_choice = img;
    let user_name = document.getElementById('user-name');
    user_name.innerHTML = `<img src="${rock_choice}" alt="User Move">`;
    let computer_name = document.getElementById('computer-name');
   const choices = [rock, paper, scissors];
computer_name.innerHTML = `<img src="${choices[Math.floor(Math.random() * choices.length)]}" alt="Computer Move">`;
    let msg = document.getElementById('msg-id');
    let user_score = document.getElementById('user-score');
    let computer_score = document.getElementById('computer-score');
    if(rock_choice === rock || rock_choice === paper || rock_choice === scissors){
        msg.innerHTML = "It's a tie!";
    }
    if(rock_choice === rock && computer_name.innerHTML.includes('scissor')) {
        msg.innerHTML = "You win!";
        user_score.innerHTML = parseInt(user_score.innerHTML) + 1;

    }
    if( rock_choice === rock && computer_name.innerHTML.includes('paper')) {
        msg.innerHTML = "You lose!";
        computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
    }
    if(rock_choice === paper && computer_name.innerHTML.includes('rock')) {
        msg.innerHTML = "You win!";
        user_score.innerHTML = parseInt(user_score.innerHTML) + 1;
    }   
    if( rock_choice === paper && computer_name.innerHTML.includes('scissor')) {
        msg.innerHTML = "You lose!";
        computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
    }
    if(rock_choice === scissors && computer_name.innerHTML.includes('paper')) {
        msg.innerHTML = "You win!"
        user_score.innerHTML = parseInt(user_score.innerHTML) + 1;
    }
    if( rock_choice === scissors && computer_name.innerHTML.includes('rock')) {
        msg.innerHTML = "You lose!";
        computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
    }



}