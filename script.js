//grabbing DOM elements
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

//declaring global varibales
let userChoice
let computerChoice
let result

//declaring each button as a choice upon clicking on it, displaying it, and generating computer choice and results
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

//function that choices the computers choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    } else if(randomNumber === 2) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

//function that compares the user and computer choices and declares game results
function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!'
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!'
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!'
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!'
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!'
    } else  {
        result = 'you lose!'
    }

    resultDisplay.innerHTML = result
}