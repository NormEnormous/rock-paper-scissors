const runningCount = document.querySelector('#running-count')
const quote = document.querySelector('#quote')
const button = document.querySelector('.button')

let playerScore = 0;
let computerScore = 0;
let currentQuote = '';
let roundResultQuote = '';

updateCounters = () => runningCount.textContent = `Man: ${playerScore} Machine: ${computerScore}`
updateQuote = () => quote.textContent = `${roundResultQuote} ${currentQuote}`

function chooseQuote() {
    if (playerScore <= 2 && computerScore <= 2) {
        currentQuote = 'But it\'s a close start, keep going!'
        updateQuote();
    }
    if (playerScore <= 2 && computerScore >= 2) {
        currentQuote = 'No! The machine is pulling ahead!';
        updateQuote();
    }
    if (playerScore >= 2 && computerScore <= 2) {
        currentQuote = 'Way to go! Man has got the lead!';
        updateQuote();
    }
    if ((playerScore >= 2 && playerScore <= 3) && (computerScore >= 2 && computerScore <= 3)) {
        currentQuote = 'Man and machine both are putting up a fight!';
        updateQuote();
    }
    if (playerScore === 4 && computerScore <= 4) {
        currentQuote = 'And man is about to win the game!';
        updateQuote();
    }
    if (playerScore <= 4 && computerScore === 4) {
        currentQuote = 'But the machine is about to win the game!';
        updateQuote();
    }
    if (playerScore === 4 && computerScore === 4) {
        currentQuote = 'But it\'s neck and neck!';
        updateQuote();
    }
}

function lostResult() {
    roundResultQuote = 'Man won!';
    updateQuote()
}
function wonResult() {
    roundResultQuote = 'Man lost!';
    updateQuote()
}
function drawResult() {
    roundResultQuote = 'It\'s a draw!';
    updateQuote()
}

function playerScoreCounter() {
    ++playerScore;
    updateCounters();
}

function computerScoreCounter() {
    ++computerScore;
    updateCounters();
}
//   getComputerChoice, randomize the variable 1-3.
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function finishGame() {
    updateQuote();
    button.setAttribute =('disabled', true);
    if (playerScore === 5) {
        currentQuote = `${roundResultQuote} man has once again shown it\'s prowess!`;
        updateQuote();
    }
    if (computerScore === 5) {
        currentQuote = `${roundResultQuote} machine has proven it\'s better than man!`;
        updateQuote();
    }
}
//   playRound() function, takes getComputerChoice, getPlayerChoice.
function playRound(id) {
    if (playerScore >= 5 || computerScore >= 5) {
        finishGame();
    } else {
        let computerChoice = getComputerChoice();
        let playerChoice = id;
        let result = playerChoice + "-" + computerChoice;
        console.log(result);{
            switch (result) {
                case 'rock-1':
                case 'paper-2':
                case 'scissors-0':
                    computerScoreCounter();
                    lostResult();
                    chooseQuote();
                    break;
                case 'rock-2':
                case 'paper-0':
                case 'scissors-1':
                    playerScoreCounter();
                    wonResult();
                    chooseQuote();
                    break;
                case "scissors-2":
                case "rock-0":
                case "paper-1":
                    updateCounters();
                    drawResult();
                    chooseQuote();
                    break;
            }
        }
    }
}



//   game()Function repeating single round, loop until 5 wins on either end.
// function playGame() {
//     let playerWins = 0;
//     let computerWins = 0;
//     while (playerWins < 5 && computerWins < 5) {
//         let counter = playerWins + " - "  + computerWins;
//         console.log(counter);
//         let result = playRound();
//         switch (result) {
//             case 1:
//                 playerWins++;
//                 break;
//             case 2:
//                 computerWins++;
//                 break;
//             }
//         }
// }
