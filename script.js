/* const game = () => {
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
*/
