const runningCount = document.querySelector('#running-count')
const quote = document.querySelector('#quote')
const button = document.getElementsByClassName('button')

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
console.log(button)
function finishGame() {
    console.log(playerScore);
    if (playerScore === 5) {
        currentQuote = `Man has once again shown it\'s prowess!`;
        updateQuote();
        for (var i=0; i < button.length; i++) {
            button[i].setAttribute('disabled', true);;
        }
    }
    if (computerScore === 5) {
        currentQuote = `Machine has proven it\'s better than man!`;
        updateQuote();
        for (var i=0; i < button.length; i++) {
            button[i].setAttribute('disabled', true);;
        }
    }
}
console.log(button)
//   playRound() function, takes getComputerChoice, getPlayerChoice.
function playRound(id) {
    let computerChoice = getComputerChoice();
    let playerChoice = id;
    let result = playerChoice + "-" + computerChoice;
    console.log(result);
        if (result === 'rock-1' || result === 'paper-2' || result === 'scissors-0') {
            playerScoreCounter();
            lostResult();
            chooseQuote();
            finishGame()
        }
        else if (result === 'rock-2' || result === 'paper-0' || result === 'scissors-3') {
            computerScoreCounter();
            wonResult();
            chooseQuote();
            finishGame()
        }
        else if (result === 'rock-0' || result === 'paper-1' || result === 'scissors-2') {
            updateCounters();
            drawResult();
            chooseQuote();
        }
}