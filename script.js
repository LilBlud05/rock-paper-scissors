const moves = ["rock", "paper", "scissors"];
const moveEmojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

const comment = document.getElementById("comment");
const restart = document.getElementById("restart");
const choicesContainer = document.querySelector(".choices-container");

let computersMove = "";

function getComputerMove() {
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
}

function computeWinner(humanMove, compMove) {
    if (humanMove === compMove) {
        return 'draw';
    }

    const winRules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (winRules[humanMove] === compMove) {
        return {
            winner: 'human',
            winnersMove: moveEmojis[humanMove],
            loser: 'computer',
            losersMove: moveEmojis[compMove]
        };
    } else {
        return {
            winner: 'computer',
            winnersMove: moveEmojis[compMove],
            loser: 'human',
            losersMove: moveEmojis[humanMove]
        };
    }
}

function start() {
    document.querySelectorAll(".choice").forEach((choice) => {
        choice.addEventListener("click", () => {
            const humansChoice = choice.id;
            computersMove = getComputerMove();

            const result = computeWinner(humansChoice, computersMove);

            if (result === 'draw') {
                comment.innerText = 'DRAW 🤝';
            } else {
                const winnerTitle = result.winner === 'human' ? 'HUMAN' : 'COMPUTER';
                const loserTitle = result.loser === 'human' ? 'HUMAN' : 'COMPUTER';

                comment.innerText = `WINNER: ${winnerTitle} ${result.winnersMove}\nLOSER: ${loserTitle} ${result.losersMove}`;
            }

            choicesContainer.style.display = "none";
            restart.style.display = 'block';
        });
    });
}

restart.addEventListener("click", () => {
    choicesContainer.style.display = "flex";
    comment.innerText = '❓';
    restart.style.display = 'none';
});

start();