import "./App.css";
import { useState } from "react";
import ButtonRow from "./ButtonRow";
import WinScreen from "./Winner";
import DrawScreen from "./Draw";

const internalGameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const getWinner = (gameBoard) => {
  if (
    gameBoard[0].every((slot) => slot === "X") ||
    gameBoard[0].every((slot) => slot === "O")
  ) {
    return true;
  } else if (
    gameBoard[1].every((slot) => slot === "X") ||
    gameBoard[0].every((slot) => slot === "O")
  ) {
    return true;
  } else if (
    gameBoard[2].every((slot) => slot === "X") ||
    gameBoard[0].every((slot) => slot === "O")
  ) {
    return true;
  } else if (
    gameBoard.every((row) => row[0] === "X") ||
    gameBoard.every((row) => row[0] === "O")
  ) {
    return true;
  } else if (
    gameBoard.every((row) => row[1] === "X") ||
    gameBoard.every((row) => row[1] === "O")
  ) {
    return true;
  } else if (
    gameBoard.every((row) => row[2] === "X") ||
    gameBoard.every((row) => row[2] === "O")
  ) {
    return true;
  } else if (
    (gameBoard[0][0] === "X" &&
      gameBoard[1][1] === "X" &&
      gameBoard[2][2] === "X") ||
    (gameBoard[0][0] === "O" &&
      gameBoard[1][1] === "O" &&
      gameBoard[2][2] === "O")
  ) {
    return true;
  } else if (
    (gameBoard[0][2] === "X" &&
      gameBoard[1][1] === "X" &&
      gameBoard[2][0] === "X") ||
    (gameBoard[0][2] === "O" &&
      gameBoard[1][1] === "O" &&
      gameBoard[2][0] === "O")
  ) {
    return true;
  }
  return false;
};

const Board = () => {
  const [turn, passTurn] = useState("X");
  const [player, nextPlayer] = useState("Player 1");
  const [buttonCount, incrementCount] = useState(1);
  const [winner, setWinner] = useState(false);
  const [draw, setDraw] = useState(false);
  const checkDraw = () => {
    if (buttonCount === 9) {
      setDraw(true);
    }
  };
  const changeTurn = () => {
    if (turn === "X") {
      passTurn("O");
      nextPlayer("Player 2");
    } else {
      passTurn("X");
      nextPlayer("Player 1");
    }
  };
  if (winner) {
    return <WinScreen player={player} />;
  } else if (draw === true && winner === false) {
    return <DrawScreen />;
  } else {
    return (
      <div className="gameBoard">
        <div className="playerInfo">
          <h2>It's {player}'s turn!</h2>
          <div className="turnIndicator">{turn}</div>
        </div>
        <div className="buttonGrid">
          <ButtonRow
            turn={turn}
            callBackFunction={(index) => {
              changeTurn();
              internalGameBoard[0].splice(index, 1, turn);
              console.log(internalGameBoard);
              incrementCount(buttonCount + 1);
              setWinner(getWinner(internalGameBoard));
              checkDraw();
            }}
          />
          <ButtonRow
            turn={turn}
            callBackFunction={(index) => {
              changeTurn();
              internalGameBoard[1].splice(index, 1, turn);
              console.log(internalGameBoard);
              incrementCount(buttonCount + 1);
              setWinner(getWinner(internalGameBoard));
              checkDraw();
            }}
          />
          <ButtonRow
            turn={turn}
            callBackFunction={(index) => {
              changeTurn();
              internalGameBoard[2].splice(index, 1, turn);
              console.log(internalGameBoard);
              incrementCount(buttonCount + 1);
              setWinner(getWinner(internalGameBoard));
              checkDraw();
            }}
          />
        </div>
      </div>
    );
  }
};

export { Board };
