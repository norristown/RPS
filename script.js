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



function playRound (player, computer) {
    if (player === 0 && computer === 1) {
        return "You Lose.";
    } else if (player === 0 && computer === 2) {
        return "You Win! Rock beats Scissors.";
    } else if (player === 1 && computer === 0) {
        return "You Win! Paper beats Rock.";
    } else if (player === 1 && computer === 2) {
        return "You Lose.";
    } else if (player === 2 && computer === 0) {
        return "You Lose.";
    } else if (player === 2 && computer === 1) {
        return "You Win! Scissors beat Paper.";
    } else {
        return "It's a Draw. Try again rookie biotch";
    }
}



const player = getPlayerChoice();
const computer = getComputerChoice1();
if (player === 0 ) {
    console.log("You: Rock");
} else if (player === 1) {
    console.log("You: Paper");
} else {
    console.log("You: Scissors");
}

if (computer === 0 ) {
    console.log("Computer: Rock");
} else if (computer === 1) {
    console.log("Computer: Paper");
} else {
    console.log("Computer: Scissors");
}


// console.log(player, computer);
console.log(playRound(player, computer));

// if (player === 0 && computer === 1) {
//     console.log("You Lose.");
// } else if (player === 0 && computer === 2) {
//     console.log("You Win! Rock beats Scissors.");
// } else if (player === 1 && computer === 0) {
//     console.log("You Win! Paper beats Rock.");
// } else if (player === 1 && computer === 2) {
//     console.log("You Lose.");
// } else if (player === 2 && computer === 0) {
//     console.log("You Lose.");
// } else if (player === 2 && computer === 1) {
//     console.log("You Win! Scissors beat Paper.");
// } else {
//     console.log("It's a Draw. Try again rookie biotch");
// }
