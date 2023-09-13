
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    tie: 0
}

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

//const autoPlay = () => {

//};

function autoPlay() {

    if (!isAutoPlaying) {

        //set interval renvoie un id, c'est grace a cette id que lon peut arreter un setinterval
        //pour cela il doit etre contenu dans une variable
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        console.log(intervalId)

        isAutoPlaying = true;
        document.querySelector('.auto-play-btn').innerHTML = 'Stop Auto Play';

    } else {

        //fonction qui permet d'arreter un setinterval avec son id pris en parametre
        clearInterval(intervalId);
        console.log(intervalId)

        isAutoPlaying = false
        document.querySelector('.auto-play-btn').innerHTML = 'Auto Play';

    }

};

//ATTENTION: il ne faut pas appeler la fonction qui est a declencher en tant que 2eme parametre si celle ci ne renvoie rien
//car le retour de la methode addeventlistener du coup sera undifined
//il faut faire une fonction anonyme qui appele la fonction
document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock')
    });

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper')
    });

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors')
    });

//dans la fonction anonyme si il y a un parametre ce parametre est un objet qui contient des informations sur l'evement declencher
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    }
});

function playGame(playerMove) {

    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {

        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.'
        }

    } else if (playerMove === 'paper') {

        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.'
        }

    } else if (playerMove === 'rock') {

        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.'
        }

    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.tie += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img class="game-img" src="./images/${playerMove}.png"> <img class="game-img" src="./images/${computerMove}.png"> Computer.`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Tie : ${score.tie}`;
}

function pickComputerMove() {

    const randomNumb = Math.random();
    let computerMove = '';

    if (randomNumb >= 0 && randomNumb < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumb >= 1 / 3 && randomNumb < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumb >= 2 / 3 && randomNumb < 1) {
        computerMove = 'scissors';
    }

    return computerMove;

}