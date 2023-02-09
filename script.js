/* I need a function to randomly generate a number between one and three CHECK
I need a function that randomnly returns one of three results CHECK
I need another function that has one input from the user that is case INSENSITIVE
I need a final function that returns a string declaring a winner, a loser, or a tie */

function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return "PAPER"
    } else if (randomNum === 1) {
        return "ROCK"
    } else if (randomNum === 2) {
        return "SCISSORS"
    } else {
        return "Something went terribly wrong..."
    }
 }

 function playerChoice () {
    let choice = prompt()
    let upperCase = choice.toUpperCase()
    return upperCase
 }

 function playRound (playersChoice = playerChoice().toUpperCase(), computerChoice = getComputerChoice()) {
    // tie
    if (computerChoice === "SCISSORS" && playersChoice === "SCISSORS") {
        return("It's a tie!")
    } else if (computerChoice === "ROCK" && playersChoice === "ROCK") {
        return("It's a tie!")
    } else if (computerChoice === "PAPER" && playersChoice === "PAPER") {
        return("It's a tie!")
    // Rock wins
    } else if (computerChoice === "SCISSORS" && playersChoice === "ROCK" ) {
        return("Player wins!")
    } else if (computerChoice === "ROCK" && playersChoice === "SCISSORS") {
        return("PC wins!")
    // Scissors wins
    } else if (computerChoice === "PAPER" && playersChoice === "SCISSORS") {
        return("Player wins!")
    } else if (computerChoice === "SCISSORS" && playersChoice === "PAPER") {
        return("PC wins!")
    // Paper wins
    } else if (computerChoice === "PAPER" && playersChoice === "ROCK") {
        return("PC wins!")
    } else if (computerChoice === "ROCK" && playersChoice === "PAPER") {
        return("Player wins!")
    // Error
    } else {
        return("An error occurred.")
    }
 }
 
 function game() {
    let computerScore = 0
    let playerScore = 0
    let i = 0
    for (i = 0; i < 5; i++){
        let result = playRound()
        if (result === "PC wins!") {
            computerScore++
        } else if (result === "Player wins!") {
            playerScore++
        } else if (result === "It's a tie!") {
            
        } else {
            return("something went wrong")
        }
        console.log(`${result}. ${i}. The player's score is ${playerScore} and the computer's score is ${computerScore}`)
    }
    if (computerScore > playerScore) {
        return(`The computer wins ${computerScore} to ${playerScore}!`)
    } else if (computerScore < playerScore) {
        return(`The player wins ${playerScore} to ${computerScore}!`)
    }
}