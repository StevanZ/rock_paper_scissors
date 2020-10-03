const computerPlay = () => {
    let choice = ['rock', 'scissors', 'paper'];
    return randomChoice = choice[Math.floor(Math.random() * choice.length)];
}



const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        return "it's a draw!";
    } else if (playerSelection === 'rock' && (computerSelection !== 'rock' && computerSelection !== 'paper')) {
        playerCounter++;
        return `You win ${playerSelection} is greater then ${computerSelection}`;
    } else if (playerSelection === 'paper' && (computerSelection !== 'scissors' && computerSelection !== 'paper')) {
        playerCounter++;
        return `You win ${playerSelection} is greater then ${computerSelection}`;
    } else if (playerSelection === 'scissors' && (computerSelection !== 'rock' && computerSelection !== 'scissors')) {
        playerCounter++;
        return `You win ${playerSelection} is greater then ${computerSelection}`;
    } else {
        computerCounter++;
        return `You lose ${computerSelection} is greater then ${playerSelection}`;
    }
}

let playerCounter = 0;
let computerCounter = 0;


const game = () => {

    for (let i = 0; i < 5; i++) {
        let answer = prompt('Say your choice? ', '');
        let player = answer;
        let computer = computerPlay();
        alert(playRound(player, computer));
    }

    if (playerCounter > computerCounter) {
        return alert(`You win! Result is ${playerCounter}:${computerCounter}`);
    } else if (playerCounter < computerCounter){
        return alert(`You lose! Result is ${playerCounter}:${computerCounter}`);
    } else {
        return alert(`It's ${playerCounter}:${computerCounter}. Draw!`);
    }
}

game();
