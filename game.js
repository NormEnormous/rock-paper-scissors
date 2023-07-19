//   getComputerChoice, randomize the variable 1-3.

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

//   getPlayerChoice, randomize and return in a lowercase. case to variable.

function getPlayerChoice() {
    let choicePrompt = prompt("Rock, Paper, Scissors?", "").toLowerCase();
    return choicePrompt;
}
//   playRound() function, takes getComputerChoice, getPlayerChoice.

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let result = computerChoice + playerChoice;
    console.log(result);{
        switch (result) {
            case '0paper':
            case '1scissors':
            case '3rock':
                console.log("You Win!");
                return 1;
            case '1rock':
            case '2paper':
            case '0scissors':
                console.log("You Lose!");
                return 2;
            case "2scissors":
            case "0rock":
            case "1paper":
                console.log("It's a tie!");
                return 0;
            default: console.log("This game isn't that hard to play...")
            return 0;
            }
        }
}

//   game()Function repeating single round, loop until 5 wins on either end.

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        let counter = playerWins + " "  + computerWins;
        console.log(counter);
        let result = playRound();
        switch (result) {
            case 1:
                playerWins++;
                break;
            case 2:
                computerWins++;
                break;
            }
        }
}

playGame();