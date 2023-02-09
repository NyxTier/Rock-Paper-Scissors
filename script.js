/* 
 I need a function to randomly generate a number between one and three CHECK
 I need a function that randomnly returns one of three results CHECK
 I need another function that has one input from the user that is case INSENSITIVE
 I need a final function that returns a string declaring a winner, a loser, or a tie */



 function declareWinner () {
    function getRandomNum () {
        return Math.floor(Math.random() * 3)
     }
     let randomNum = getRandomNum()
    
     function getComputerChoice () {
        getRandomNum()
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
     let computerChoice = getComputerChoice()
    
     function playerChoice () {
        let choice = prompt()
        return choice
     }
     let playersChoice = playerChoice().toUpperCase()
    // tie
    if (computerChoice === "SCISSORS" && playersChoice === "SCISSORS") {
        return("It's a tie! You both chose scissors!")
    } else if (computerChoice === "ROCK" && playersChoice === "ROCK") {
        return("It's a tie! You both chose rock!")
    } else if (computerChoice === "PAPER" && playersChoice === "PAPER") {
        return("It's a tie! You both chose paper!")
    // Rock wins
    } else if (computerChoice === "SCISSORS" && playersChoice === "ROCK" ) {
        return("Player Wins! Rock beats scissors!")
    } else if (computerChoice === "ROCK" && playersChoice === "SCISSORS") {
        return("PC wins! Rock beats scissors!")
    // Scissors wins
    } else if (computerChoice === "PAPER" && playersChoice === "SCISSORS") {
        return("Player wins! Scissors beats paper!")
    } else if (computerChoice === "SCISSORS" && playersChoice === "PAPER") {
        return("PC wins! Scissors beats paper!")
    // Paper wins
    } else if (computerChoice === "PAPER" && playersChoice === "ROCK") {
        return("PC wins! Paper beats rock!")
    } else if (computerChoice === "ROCK" && playersChoice === "PAPER") {
        return("Player wins! Paper beats rock!")
    // Error
    } else {
        console.log(randomNum + ", " + computerChoice + ", " + playersChoice)
        return("An error occurred.")
    }
 }
