//  query selectors
const buttons = document.querySelectorAll('.game-btn');
const playerScore = document.querySelector('.player-result');
const computerScore = document.querySelector('.computer-result');
const whoWins = document.querySelector('.who-wins');
const newGame = document.querySelector('.new-game');
const status = document.querySelector('.game-status');
const drawStatus = document.querySelector('.draw-status');


let playerCount = 0;
let computerCount = 0;


playerScore.textContent = playerCount;
computerScore.textContent = computerCount
    ;

// computer random choise 
const computerPlay = () => {
    let choice = ['rock', 'scissors', 'paper'];
    return randomChoice = choice[Math.floor(Math.random() * choice.length)];
}


// render result
const render = () => {
    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;
    ;
}



// play one round
const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        drawStatus.classList.add('draw-status-shown');
        setTimeout(() => {
            if (drawStatus.classList.contains('draw-status-shown')) {
                drawStatus.classList.remove('draw-status-shown');
            }
        }, 700);
    } else if (playerSelection === 'rock' && (computerSelection !== 'rock' && computerSelection !== 'paper')) {
        playerCount++;
    } else if (playerSelection === 'paper' && (computerSelection !== 'scissors' && computerSelection !== 'paper')) {
        playerCount++;
    } else if (playerSelection === 'scissors' && (computerSelection !== 'rock' && computerSelection !== 'scissors')) {
        playerCount++;
    } else {
        computerCount++;
    }

    render();
}

// declare winner
const declareWinner = (winner) => {
    whoWins.textContent = `${winner} Wins!`;
    buttons.forEach(btn => {
        btn.classList.add('disable');
    });
    status.classList.add('status-visible');
}

// game controler
const game = (answ) => {
    let player = answ;
    let computer = computerPlay();
    playRound(player, computer);

    if (playerCount === 5) {
        declareWinner('Player');

    } else if (computerCount === 5) {
        declareWinner('Computer');
    }
}


// event listeners
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let answer = e.target.getAttribute('id');
        game(answer.toLowerCase());
    });
});


newGame.addEventListener('click', () => {
    playerCount = 0;
    computerCount = 0;

    buttons.forEach(btn => {
        btn.classList.remove('disable');
    })

    status.classList.remove('status-visible');
    render();
});


render();











