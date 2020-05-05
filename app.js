// HTML Elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

// css constants
const xSymbol = "×";
const oSymbol = "○";

// Grab the all the grid-cells
// console.log(cellDivs); // getting Node-lists

// game variables
let gameIsLive = true; // game is ON
let xIsNext = true;
let winner = null;

// functions
const letterToSymbol = letter => (letter === "x" ? xSymbol : oSymbol);

const handleWin = letter => {
  gameIsLive = false;
  winner = letter;
  if (winner === "x") {
    statusDiv.innerHTML = `${letterToSymbol(winner)} has won!!!`;
  } else {
    statusDiv.innerHTML = `
    <span> ${letterToSymbol(winner)} has won!!! </span>
    `;
  }
};

const checkGameStatus = () => {
  const topLeft = cellDivs[0].classList[2];
  const topMiddle = cellDivs[1].classList[2];
  const topRight = cellDivs[2].classList[2];
  const middleLeft = cellDivs[3].classList[2];
  const middleMiddle = cellDivs[4].classList[2];
  const middleRight = cellDivs[5].classList[2];
  const bottomLeft = cellDivs[6].classList[2];
  const bottomMiddle = cellDivs[7].classList[2];
  const bottomRight = cellDivs[8].classList[2];

  // Check winner
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
  } else if (
    middleLeft &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    handleWin(middleLeft);
  } else if (
    bottomLeft &&
    bottomLeft === bottomMiddle &&
    bottomLeft &&
    bottomRight
  ) {
    handleWin(bottomLeft);
  }
};

// Event Handlers
const handleReset = e => {
  gameIsLive = false;
};

const handleCellClick = e => {
  const classList = e.target.classList;
  const location = classList[1];

  if (classList[2] === "x" || classList[2] === "o") {
    return;
  }

  if (xIsNext) {
    // console.log(e.target); // actual div
    classList.add("x"); // add class name(X) to the divs
    checkGameStatus();
    xIsNext = false;
  } else {
    classList.add("o");
    checkGameStatus();
    xIsNext = true;
  }
};
//  Event => Reset, and 9-cells
resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  // add EventListeners to each of them.

  // classList
  cellDiv.addEventListener("click", handleCellClick);
}

// Array-like isn't an actual array

// classList add('x')를 줬다.
// class 'x'를 css에서 사용한다. before & after content('x')
