function computerPlay() {
    let option = Math.floor(Math.random() * 3);
    switch(option) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return "Draw!";
                case "paper":
                    return "You lose! Paper beats Rock"
                case "scissors":
                    return "You win! Rock beats Scissors"
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return "You win! Paper beats Rock";
                case "paper":
                    return "Draw!"
                case "scissors":
                    return "You lose! Scissors beats Paper"
            }
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    return "You lose! Rock beats Scissors";
                case "paper":
                    return "You win! Scissors beats Paper"
                case "scissors":
                    return "Draw!"
            }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?")
        console.log("Round " + (i+1) + " : " + playRound(playerSelection, computerPlay()))
    }
}

game()

// const playerSelection = 'scissors'
// const computerSelection = computerPlay()
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection))