const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    const winner = (player, computer) => {
        const user = document.querySelector('.score-user');
        const cpu = document.querySelector('.score-cpu');
        const result = document.querySelector('.result');
        const draws = document.querySelector('.draw');
        if (player === computer) {
            drawScore++;
            draws.textContent = drawScore;
            result.textContent = 'Tie';
        } else if (player === 'rock') {
            if (computer === 'paper') {
                computerScore++;
                cpu.textContent = computerScore;
                result.textContent = 'You Lose';
            } else {
                playerScore++;
                user.textContent = playerScore;
                result.textContent = 'You Win';
            }
        } else if (player === 'paper') {
            if (computer === 'scissor') {
                computerScore++;
                cpu.textContent = computerScore;
                result.textContent = 'You Lose';
            } else {
                playerScore++;
                user.textContent = playerScore;
                result.textContent = 'You Win';
            }
        } else if (player === 'scissor') {
            if (computer === 'rock') {
                computerScore++;
                cpu.textContent = computerScore;
                result.textContent = 'You Lose';   
            } else {
                playerScore++;
                user.textContent = playerScore;
                result.textContent = 'You Win';
            }
        }
    }

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const player = [rockBtn, paperBtn, scissorBtn];
        const computer = ['rock', 'paper', 'scissor'];

        player.forEach(button => {
            button.addEventListener('click', function() {
                const choiceNum = Math.floor(Math.random() * 3);
                const compChoice = computer[choiceNum];
                console.log(compChoice, button.innerHTML );
                winner(button.innerHTML, compChoice);  
            })
        })
    }

    playGame();
}

game();
// });
// paper.addEventListener('click', () => {
//     playerChoice += playerArr[1];
// });
// scissor.addEventListener('click', () => {
//     playerChoice += playerArr[2];
// });











// function getPlayerChoice() {
//     const input = prompt("Enter: rock, paper, or scissors >:]");
//     if (input.toLowerCase() === 'rock') {
//         return 0;
//     } else if (input.toLowerCase() === 'paper') {
//         return 1;
//     } else if (input.toLowerCase() === 'scissors') {
//         return 2;
//     } else {
//         return "Hit refresh and try again";
//     }
// }

// let playerWin = 0;
// let computerWin = 0;
// let round = 0;

// function playRound (player, computer) {
//     if (player === 0 && computer === 1) {
//         return round++, computerWin++, 'you lose';
//     } else if (player === 0 && computer === 2) {
//         return round++, playerWin++, 'you win';
//     } else if (player === 1 && computer === 0) {
//         return round++, playerWin++, 'you win';
//     } else if (player === 1 && computer === 2) {
//         return round++, computerWin++, 'you lose';
//     } else if (player === 2 && computer === 0) {
//         return round++, computerWin++, 'you lose';
//     } else if (player === 2 && computer === 1) {
//         return round++, playerWin++, 'you win';
//     } else if (player === computer) {
//         return "It's a Draw. Try again rookie biotch";
//     } else {
//         return "Refresh";
//     }
// }


// function game() {
//     let player = getPlayerChoice();
//     let computer = getComputerChoice1();
//     console.log(playRound(player, computer));
//     return (`Round: ${round}
// Your wins: ${playerWin}
// Evil Computer wins: ${computerWin}`);
// }


//     for (let i = 0; i < 5; i++){
//         setTimeout(() => {console.log(game())}, 500);
//     }