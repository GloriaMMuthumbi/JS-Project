function computerPlay(){
    const plays = ["rock", "paper", "scissors"];
    let currentplay = plays[Math.floor(Math.random()*plays.length)];
    return currentplay;
}
var computerScore = 0;
var playerScore = 0;
function gameRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        computerScore = computerScore;
        playerScore = playerScore;
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            computerScore++;
        } else {
            playerScore++;
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            computerScore++;
        } else {
            playerScore++;
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            computerScore++;
        } else {
            playerScore++;
        }
    }
    console.log(`
        Player: ${playerScore}
        Computer: ${computerScore}`);

    playerScore = playerScore;
    computerScore = computerScore;
}

function game(){
    for(var i = 0; i < 5; i++){
        console.log(`Round ${i+1} out of 5`)
        var playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        if(playerSelection != "rock" && playerSelection != "scissors" && playerSelection != "paper"){
            playerSelection = console.log("Invalid Input! Please enter Rock, Paper or Scissors?");
            i--;
        } 
        gameRound(playerSelection, computerSelection);  
    }

    if(computerScore == playerScore){
        console.log("It's a tie!")
    }
    else if(computerScore < playerScore){
        console.log("You Won! Awesome!")
    }
    else {
        console.log("You lost the round! Better Luck Next time!")
    }
}
