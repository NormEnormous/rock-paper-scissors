//   getComputerChoice, randomize the variable 1-3.

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

getComputerChoice();

//   getPlayerChoice, randomize and return in a lowercase. case to variable.

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, Scissors?", "").toLowerCase();
    return playerChoice;
}

//   playRound() function, takes getComputerChoice, getPlayerChoice.

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let result = computerChoice + playerChoice; {
        console.log(result);
        switch (result) {
            case '01':
            case '12':
            case '30':
                console.log("You Win!");
                break;
            case '10':
            case '21':
            case '03':
                console.log("You Lose!");
                break;
            default: "It's a tie!"
        }
    }
}
playRound();



//   game()Function repeating single round, for loop until 5.



