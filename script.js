const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
// Round Result
const roundResult = document.querySelector(".roundResult");
const result = document.getElementById("result");
// Scores to increment
let playerScore = 0; 
let computerScore = 0;
// Moves
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
// Play Again Button
const playAgain = document.querySelector(".playAgain");
const playAgainBtn = document.getElementById("playAgainBtn");

// Player's Move
var playerMove = "";
rockBtn.addEventListener("click", ()=>{
    playerMove = getHumanChoice("Rock");
    playRound(playerMove);
})
paperBtn.addEventListener("click", ()=>{
    playerMove = getHumanChoice("Paper");
    playRound(playerMove);
})
scissorsBtn.addEventListener("click", ()=>{
    playerMove = getHumanChoice("Scissors");
    playRound(playerMove);
})

function getHumanChoice(choice){
    return choice;
}

// Computer's Random move
function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

// Round Function 
function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    if(playerSelection === computerSelection){
        roundResult.style.display = "flex";
        result.textContent = `Player picked ${playerSelection}, Computer picked ${computerSelection}, IT'S A TIE`;
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock"){
        playerScore++;
        roundResult.style.display = "flex";
        result.textContent = `Player picked ${playerSelection}, Computer picked ${computerSelection}, YOU WIN!`;   
        playerText.textContent = `Score: ${playerScore}`;
        if(playerScore === 15){
            playAgain.style.display = "flex";
            playAgainBtn.style.display = "flex";
            result.textContent = "PLAYER WINS!";
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            rockBtn.style.pointerEvents = "none";
            paperBtn.style.pointerEvents = "none";
            scissorsBtn.style.pointerEvents = "none";
        }
    }
    else if(computerSelection === "Rock" && playerSelection === "Scissors" || computerSelection === "Scissors" && playerSelection === "Paper" ||
        computerSelection === "Paper" && playerSelection === "Rock"){
        computerScore++;
        roundResult.style.display = "flex";
        result.textContent = `Player picked ${playerSelection}, Computer picked ${computerSelection}, YOU LOSE!`;  
        computerText.textContent = `Score: ${computerScore}`;
        if(computerScore === 15){
            playAgain.style.display = "flex";
            playAgainBtn.style.display = "flex";
            result.textContent = "COMPUTER WINS!";
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            rockBtn.style.pointerEvents = "none";
            paperBtn.style.pointerEvents = "none";
            scissorsBtn.style.pointerEvents = "none";
        }
    }
}

// Play Again Button
playAgainBtn.addEventListener("click", ()=>{
    playerScore = 0;
    computerScore = 0;
    roundResult.style.display = "none";
    playerText.textContent = `Score: ${playerScore}`;
    computerText.textContent = `Score: ${computerScore}`;
    playAgain.style.display = "none";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    rockBtn.style.pointerEvents = "auto";
    paperBtn.style.pointerEvents = "auto";
    scissorsBtn.style.pointerEvents = "auto";
})