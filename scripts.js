const choices = ['rock', 'paper', 'scissors']
let plrScore = 0
let compScore = 0

function updateScoreDisplay() {
    const playerScoreElement = document.getElementById('plrScore-live');
    const compScoreElement = document.getElementById('compScore-live');
    if (playerScoreElement) {
        playerScoreElement.textContent = plrScore;
    };
    if (compScoreElement) {
        compScoreElement.textContent = compScore;
    };
}

function resetGame() {    
    plrScore = 0;
    compScore = 0;
    updateScoreDisplay()
    //outcome = document.getElementById('outcomeOfGame');
    //outcome.remove();
}

function getComputerChoice() {    
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
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

function playRound(plrChoice) {    
    let compChoice = getComputerChoice();
    let result = figureItOut(compChoice, plrChoice);
    return [result, plrChoice, compChoice];
};

function game(plrChoice) {
    let result = playRound(plrChoice);
    const prevResult = document.getElementById('results');
    if (prevResult) {
        prevResult.remove();
    };
    const prevOutcome = document.getElementById('outcomeOfGame')
    if (prevOutcome) {
        prevOutcome.remove();
    }
    
    if (result[0] === 'win') {
        const container = document.querySelector('#results-display');
        const content = document.createElement('p');
        content.setAttribute('id','results');
        content.textContent = `You win! ${capitalizeFirstLetter(result[1])} beats ${capitalizeFirstLetter(result[2])}`;
        container.appendChild(content);
        plrScore = plrScore + 1;
        updateScoreDisplay()
        //console.log(`Current Score:\nPlayer: ${plrScore}\nComputer: ${compScore}`);
    } else if (result[0] === 'lose') {
        const container = document.querySelector('#results-display');
        const content = document.createElement('p');
        content.setAttribute('id','results');
        content.textContent = `You lose! ${capitalizeFirstLetter(result[2])} beats ${capitalizeFirstLetter(result[1])}`;
        container.appendChild(content);
        compScore = compScore + 1;
        updateScoreDisplay()
        //console.log(`Current Score:\nPlayer: ${plrScore}\nComputer: ${compScore}`);
    } else if (result[0] === 'tie') {
        const container = document.querySelector('#results-display');
        const content = document.createElement('p');
        content.setAttribute('id','results');
        content.textContent = `It's a tie! You both chose ${capitalizeFirstLetter(result[1])}`;
        container.appendChild(content);
        //console.log(`Current Score:\nPlayer: ${plrScore}\nComputer: ${compScore}`);
    };

    if (plrScore === 5 || compScore === 5) {
        if (plrScore === 5) {
            const container = document.querySelector('#results-display');
            const content = document.createElement('h1');
            content.setAttribute('id', 'outcomeOfGame')
            content.textContent = "YOU WIN!";
            container.appendChild(content);
            resetGame();
        } else {
            const container = document.querySelector('#results-display');
            const content = document.createElement('h1');
            content.setAttribute('id', 'outcomeOfGame')
            content.textContent = "YOU LOSE!";
            container.appendChild(content);  
            resetGame();          
        };
    };
};











