let count = 1;

let gameBoard = (() => {
  const gameBoardArray = [, , , , , , , ,];
  return gameBoardArray;
})();

const player = (name) => {
  const getName = () => name;
  return getName;
};

const winner = (() => {
  const checkWinner = () => {
    if (
      (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) ||
      (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) ||
      (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) ||
      (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) ||
      (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) ||
      (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) ||
      (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) ||
      (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6])
    ) {
      return "Player1 is winner";
    } else if (
      (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) ||
      (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) ||
      (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) ||
      (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) ||
      (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) ||
      (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) ||
      (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) ||
      (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6])
    ) {
      return "Player2 is winner";
    }
  };
  return { win: checkWinner() };
})();

const newPlayer1 = player("Player1");
const newPlayer2 = player("Player2");
const displayBoard = document.querySelector(".gameboard");
const displayBoardBoxes = document.querySelectorAll("[data-moveBox]");

displayBoardBoxes.forEach((item) => {
  item.addEventListener("click", () => {
    moveBoxIndex = item.getAttribute("data-movebox");
    if (gameBoard.length > 8) {
      console.log(winner.win);
    }
    if (item.textContent !== "") {
      console.log("choose another spot");
    } else if (item.textContent === "") {
      if (count % 2 == 0) {
        console.log(item.getAttribute("data-movebox"));
        item.textContent = "X";
        gameBoard.splice(moveBoxIndex, 1, "X");
      } else {
        console.log(item.getAttribute("data-movebox"));
        item.textContent = "O";
        gameBoard.splice(moveBoxIndex, 1, "O");
      }
    }
    console.log(gameBoard);
    count++;
  });
});
