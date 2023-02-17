function getComputerChoice1() {
    return Math.floor(Math.random() * 3);
    // if (x === 0) {
    //     return 'rock';
    // } else if (x === 1) {
    //     return 'paper';
    // } else {
    //     return 'scissors';
    // }
}
getComputerChoice1();



function getPlayerChoice() {
    const input = prompt("Enter: rock, paper, or scissors >:]");
    if (input.toLowerCase() === 'rock') {
        return 0;
    } else if (input.toLowerCase() === 'paper') {
        return 1;
    } else if (input.toLowerCase() === 'scissors') {
        return 2;
    } else {
        return "Hit refresh and try again";
    }
}
// getPlayerChoice();

let playerWin = 0;
let computerWin = 0;
let round = 0;

function playRound (player, computer) {
    if (player === 0 && computer === 1) {
        return round++, computerWin++, 'you lose';
    } else if (player === 0 && computer === 2) {
        return round++, playerWin++, 'you win';
    } else if (player === 1 && computer === 0) {
        return round++, playerWin++, 'you win';
    } else if (player === 1 && computer === 2) {
        return round++, computerWin++, 'you lose';
    } else if (player === 2 && computer === 0) {
        return round++, computerWin++, 'you lose';
    } else if (player === 2 && computer === 1) {
        return round++, playerWin++, 'you win';
    } else if (player === computer) {
        return "It's a Draw. Try again rookie biotch";
    } else {
        return "Refresh";
    }
}

// let player = getPlayerChoice();
// let computer = getComputerChoice1();
//  console.log(playRound(player, computer));
// if (player === 0 ) {
//     console.log("You: Rock");
// } else if (player === 1) {
//     console.log("You: Paper");
// } else {
//     console.log("You: Scissors");
// }

// if (computer === 0 ) {
//     console.log("Computer: Rock");
// } else if (computer === 1) {
//     console.log("Computer: Paper");
// } else {
//     console.log("Computer: Scissors");
// }


// console.log(player, computer);
// console.log(playRound(player, computer));



function game() {
    let player = getPlayerChoice();
    let computer = getComputerChoice1();
    console.log(playRound(player, computer));
    return (`Round: ${round}
Your wins: ${playerWin}
Evil Computer wins: ${computerWin}`);
}

function repeat() {
    for (let i = 0; i < 5; i++){
    console.log(game());
    }
}
repeat();
    

    

// function score() {
// if (playRound(player, computer) === 'You Lose.') {
//     computerWin++;
//     round++;
// } else {
//     playerWin++;
//     round++;
// }

// return (`Round: ${round}
// Your wins: ${playerWin}
// Evil Computer wins: ${computerWin}`);
// }




