//   getComputerChoice, randomize the variable 1-3.

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

//   getPlayerChoice, randomize and return in a lowercase. case to variable.

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, Scissors?", "").toLowerCase();
    return playerChoice;
}

//   playRound() function, takes getComputerChoice, getPlayerChoice.

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let result = computerChoice + playerChoice;{
        switch (result) {
            case '01':
            case '12':
            case '30':
                console.log("You Win!");
                return 1;
                break;
            case '10':
            case '21':
            case '03':
                console.log("You Lose!");
                return 2;
                break;
            default: console.log("It's a tie!")
            return 0;
        }
    }
}

//   game()Function repeating single round, for loop until 5.

function playGame() {
    for (let i = 0; ((i < 5) && (roundResult = 1 || 2)); i++) {
        let roundResult = playRound();
        console.log(roundResult);
    }
}

playGame();