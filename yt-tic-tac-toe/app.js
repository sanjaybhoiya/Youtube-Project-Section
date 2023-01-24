const cells = document.querySelectorAll('.cell');
let playerTurn = true;
let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.querySelector('#player-score');
const computerScoreSpan = document.querySelector('#computer-score');
const result = document.querySelector('.results');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function(e) {
        if (e.target.innerHTML !== '') {
            return;
        }

        if (playerTurn) {
            e.target.innerHTML = 'X';
            checkForWinner();
            playerTurn = false;
            setTimeout(computerTurn, 500);
        }
    });
}

function checkForWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (cells[a].innerHTML !== '' && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            result.innerHTML = cells[a].innerHTML + ' wins!';
            if(cells[a].innerHTML === 'X'){
                playerScore++;
                playerScoreSpan.innerHTML = playerScore;
            }
            else{
                computerScore++;
                computerScoreSpan.innerHTML = computerScore;
            }
            reset();
        }
    }
    let isTie = true;
for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === '') {
        isTie = false;
        break;
    }
}
if (isTie) {
    result.innerHTML = 'Tie!';
    reset();
}

}

function computerTurn() {
  let emptyCells = [];
  for (let i = 0; i < cells.length; i++) {
      if (cells[i].innerHTML === '') {
          emptyCells.push(i);
      }
  }
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  cells[emptyCells[randomIndex]].innerHTML = 'O';
  cells[emptyCells[randomIndex]].classList.add('fade-in');
  checkForWinner();
  playerTurn = true;
}


function reset() {
  for (let i = 0; i < cells.length; i++) {
      cells[i].innerHTML = '';
      cells[i].classList.remove('fade-in');
  }
  result.innerHTML = '';
}


const resetButton = document.querySelector('button');
resetButton.addEventListener('click', reset);


























































































