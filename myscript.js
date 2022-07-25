const game = () => {
    let computerScore = 0;
    let playerScore = 0;
    let moves = 0;

    const playgame = () => {
        const rock = document.getElementById('rock-btn');
        const paper = document.querySelector('.paper');
        const scissors = document.querySelector('.scissors');        

        var playerplays = [rock, paper, scissors];
        const computerplays = ['rock', 'paper', 'scissors']

        playerplays.forEach(play => {
            play.addEventListener("click", function(){

                const movesremaining = document.querySelector('.movesleft');
                moves++;
                movesremaining.innerText = `Moves Left: ${5 - moves}`;

                const computerplay = computerplays[Math.floor(Math.random()*3)];
                console.log(this.innerText)
                console.log(computerplay)

                winner(play.innerText, computerplay)

                if(moves == 5){
                    gameOver(playerplays, movesremaining);
                }
            });
        });
    }

    const winner = (player, computer) => {
        const playerscores = document.getElementById('playerscore');
        const computerscores = document.getElementById('computerscore');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if(player === computer){
            computerscores.textContent = computerScore;
            playerscores.textContent = playerScore;
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                computerScore++;
                computerscores.innerText = computerScore;
            } else {
                playerScore++;
                playerscores.innerText = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                computerScore++;
                computerscores.innerText = computerScore;
            } else {
                playerScore++;
                playerscores.innerText = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                computerScore++;
                computerscores.innerText = computerScore;
            } else {
                playerScore++;
                playerscores.innerText = playerScore;
            }
        }
    }

    const gameOver = (playerPlays, movesLeft) => {
        const turn = document.querySelector('.turn');
        const result = document.querySelector('#winner-text');
        
        playerPlays.forEach(option => {
            option.style.display = 'none';
        })

        turn.innerText = 'Game Over!'
        movesLeft.style.display = 'none!';

        if(computerScore == playerScore){
            result.innerText = "It's a tie!";
            result.style.color = 'grey';
        }
        else if(computerScore < playerScore){
            result.innerText = "You Won! Awesome!";
            result.style.color = 'white';
        }
        else {
            result.innerText = "You lost the round! Better Luck Next time!";
            result.style.color = 'red';
        }
    }
    playgame();
}

game();
