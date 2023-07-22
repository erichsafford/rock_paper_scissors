const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {    
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose 'Rock', 'Paper', or 'Scissors': ");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function figureItOut(compChoice, plrChoice) {
    if (compChoice === plrChoice) {
        return 'tie';
    } else if (compChoice === 'rock') {
        if (plrChoice === 'paper') {
            return 'win';
        } else if (plrChoice === 'scissors') {
            return 'lose';    
        };
    } else if (compChoice === 'paper') {
        if (plrChoice === 'scissors') {
            return 'win';
        } else if (plrChoice === 'rock') {
            return 'lose';  
        };
    } else if (compChoice === 'scissors') {
        if (plrChoice === 'rock') {
            return 'win';
        } else if (plrChoice === 'paper') {
            return 'lose';  
        }; 
    }
}

function playRound() {
    let compChoice = getComputerChoice();
    let plrChoice = getPlayerChoice();
    let result = figureItOut(compChoice, plrChoice);
    return [result, plrChoice, compChoice];
}

function game() {
    let compScore = 0;
    let plrScore = 0;
    //let currentScore = `Current Score:\nPlayer: ${plrScore}\nComputer: ${compScore}`;
    for (let i = 0; i < 5; ++i){
        result = playRound();
        if (result[0] === 'win') {
            console.log(`You win! ${capitalizeFirstLetter(result[1])} beats ${capitalizeFirstLetter(result[2])}`);
            plrScore = plrScore + 1;
            console.log(`Current Score:\nPlayer: ${plrScore}\nComputer: ${compScore}`);
        } else if (result[0] === 'lose') {
            console.log(`You lose! ${capitalizeFirstLetter(result[2])} beats ${capitalizeFirstLetter(result[1])}`);
            compScore = compScore + 1;
            console.log(`Current Score:\nPlayer: ${plrScore}\nComputer: ${compScore}`);
        } else if (result[0] === 'tie') {
            console.log(`It's a tie! You both chose ${capitalizeFirstLetter(result[1])}`);
            console.log(`Current Score:\nPlayer: ${plrScore}\nComputer: ${compScore}`);
        };


    };
}

game()








