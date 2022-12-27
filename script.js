/* 
 I need a function to randomly generate a number between one and three CHECK
 I need a function that randomnly returns one of three results CHECK
 I need another function that has one input from the user that is case INSENSITIVE
 I need a final function that returns a string declaring a winner, a loser, or a tie */

 function getRandomNum () {
    return Math.floor(Math.random() * 3)
 }
 
 function getComputerChoice () {
    if (getRandomNum === 0) {
        return "PAPER"
    } else if (getRandomNum === 1) {
        return "ROCK"
    } else if (getRandomNum === 2) {
        return "SCISSORS"
    } else {
        return "Something went terribly wrong..."
    }
 }

 function playerChoice () {
    let choice = prompt().toUpperCase
    return choice
 }

 function declareWinner () {
    // tie
    if (getComputerChoice === "SCISSORS" && playerChoice === "SCISSORS") {
        console.log("It's a tie! You both chose scissors!")
    } else if (getComputerChoice === "ROCK" && playerChoice === "ROCK") {
        console.log("It's a tie! You both chose rock!")
    } else if (getComputerChoice === "PAPER" && playerChoice === "PAPER") {
        console.log("It's a tie! You both chose paper!")
    // Rock wins
    } else if (getComputerChoice === "SCISSORS" && playerChoice === "ROCK" ) {
        console.log("Player Wins! Rock beats scissors!")
    } else if (getComputerChoice === "ROCK" && playerChoice === "SCISSORS") {
        console.log("PC wins! Rock beats scissors!")
    // Scissors wins
    } else if (getComputerChoice === "PAPER" && playerChoice === "SCISSORS") {
        console.log("Player wins! Scissors beats paper!")
    } else if (getComputerChoice === "SCISSORS" && playerChoice === "PAPER") {
        console.log("PC wins! Scissors beats paper!")
    // Paper wins
    } else if (getComputerChoice === "PAPER" && playerChoice === "ROCK") {
        console.log("PC wins! Paper beats rock!")
    } else if (getComputerChoice === "ROCK" && playerChoice === "PAPER") {
        console.log("Player wins! Paper beats rock!")
    }
 }