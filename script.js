let count = 1;

let gameBoard = (() => {
  const gameBoardArray = [, , , , , , , , ,];
  return gameBoardArray;
})();

const winner = (() => {
  const checkWinner = () => {
    if (
      (gameBoard[0] === gameBoard[1] &&
        gameBoard[1] === gameBoard[2] &&
        gameBoard[0] === "X" &&
        gameBoard[1] === "X" &&
        gameBoard[2] === "X") ||
      (gameBoard[3] === gameBoard[4] &&
        gameBoard[4] === gameBoard[5] &&
        gameBoard[3] === "X" &&
        gameBoard[4] === "X" &&
        gameBoard[5] === "X") ||
      (gameBoard[6] === gameBoard[7] &&
        gameBoard[7] === gameBoard[8] &&
        gameBoard[6] === "X" &&
        gameBoard[7] === "X" &&
        gameBoard[8] === "X") ||
      (gameBoard[0] === gameBoard[3] &&
        gameBoard[3] === gameBoard[6] &&
        gameBoard[0] === "X" &&
        gameBoard[3] === "X" &&
        gameBoard[6] === "X") ||
      (gameBoard[1] === gameBoard[4] &&
        gameBoard[4] === gameBoard[7] &&
        gameBoard[1] === "X" &&
        gameBoard[4] === "X" &&
        gameBoard[7] === "X") ||
      (gameBoard[2] === gameBoard[5] &&
        gameBoard[5] === gameBoard[8] &&
        gameBoard[2] === "X" &&
        gameBoard[5] === "X" &&
        gameBoard[8] === "X") ||
      (gameBoard[0] === gameBoard[4] &&
        gameBoard[4] === gameBoard[8] &&
        gameBoard[0] === "X" &&
        gameBoard[4] === "X" &&
        gameBoard[8] === "X") ||
      (gameBoard[2] === gameBoard[4] &&
        gameBoard[4] === gameBoard[6] &&
        gameBoard[2] === "X" &&
        gameBoard[4] === "X" &&
        gameBoard[6] === "X")
    ) {
      return "Player 1 is the winner";
    } else if (
      (gameBoard[0] === gameBoard[1] &&
        gameBoard[1] === gameBoard[2] &&
        gameBoard[0] === "O" &&
        gameBoard[1] === "O" &&
        gameBoard[2] === "O") ||
      (gameBoard[3] === gameBoard[4] &&
        gameBoard[4] === gameBoard[5] &&
        gameBoard[3] === "O" &&
        gameBoard[4] === "O" &&
        gameBoard[5] === "O") ||
      (gameBoard[6] === gameBoard[7] &&
        gameBoard[7] === gameBoard[8] &&
        gameBoard[6] === "O" &&
        gameBoard[7] === "O" &&
        gameBoard[8] === "O") ||
      (gameBoard[0] === gameBoard[3] &&
        gameBoard[3] === gameBoard[6] &&
        gameBoard[0] === "O" &&
        gameBoard[3] === "O" &&
        gameBoard[6] === "O") ||
      (gameBoard[1] === gameBoard[4] &&
        gameBoard[4] === gameBoard[7] &&
        gameBoard[1] === "O" &&
        gameBoard[4] === "O" &&
        gameBoard[7] === "O") ||
      (gameBoard[2] === gameBoard[5] &&
        gameBoard[5] === gameBoard[8] &&
        gameBoard[2] === "O" &&
        gameBoard[5] === "O" &&
        gameBoard[8] === "O") ||
      (gameBoard[0] === gameBoard[4] &&
        gameBoard[4] === gameBoard[8] &&
        gameBoard[0] === "O" &&
        gameBoard[4] === "O" &&
        gameBoard[8] === "O") ||
      (gameBoard[2] === gameBoard[4] &&
        gameBoard[4] === gameBoard[6] &&
        gameBoard[2] === "O" &&
        gameBoard[4] === "O" &&
        gameBoard[6] === "O")
    ) {
      return "Player 2 is the winner";
    } else if (
      (gameBoard[0] === "X" || gameBoard[0] === "O") &&
      (gameBoard[1] === "X" || gameBoard[1] === "O") &&
      (gameBoard[2] === "X" || gameBoard[2] === "O") &&
      (gameBoard[3] === "X" || gameBoard[3] === "O") &&
      (gameBoard[4] === "X" || gameBoard[4] === "O") &&
      (gameBoard[5] === "X" || gameBoard[5] === "O") &&
      (gameBoard[6] === "X" || gameBoard[6] === "O") &&
      (gameBoard[7] === "X" || gameBoard[7] === "O") &&
      (gameBoard[8] === "X" || gameBoard[8] === "O")
    ) {
      return "It's a draw";
    }
  };
  return { checkWinner };
})();

const displayBoard = document.querySelector(".gameboard");
const displayBoardBoxes = document.querySelectorAll("[data-moveBox]");
const playerTurnDisplay = document.querySelector(".playerTurn");
const resetButton = document.querySelector(".reset");

displayBoard.addEventListener("click", () => {
  if (winner.checkWinner()) {
    playerTurnDisplay.textContent = winner.checkWinner();
  }
});

resetButton.addEventListener("click", () => {
  gameBoard = [, , , , , , , , ,];
  displayBoardBoxes.forEach((item) => {
    item.textContent = "";
  });
  count = 1;
  playerTurnDisplay.textContent = "Player X's Turn";
});

displayBoardBoxes.forEach((item) => {
  item.addEventListener("click", () => {
    moveBoxIndex = item.getAttribute("data-movebox");
    if (item.textContent !== "") {
      item.addEventListener("click", (e) => {
        e.preventDefault();
      });
    } else if (item.textContent === "") {
      if (count % 2 == 0) {
        item.textContent = "O";
        gameBoard.splice(moveBoxIndex, 1, "O");
        playerTurnDisplay.textContent = "Player X's Turn";
        count++;
      } else {
        item.textContent = "X";
        gameBoard.splice(moveBoxIndex, 1, "X");
        playerTurnDisplay.textContent = "Player O's Turn";
        count++;
      }
    }
  });
});
