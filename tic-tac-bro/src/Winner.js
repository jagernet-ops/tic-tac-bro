import "./App.css";

const WinScreen = (props) => {
  const { player } = props;
  if (player === "Player 1") {
    return (
      <div className="winScreen">
        <div className="winMessage">
          <h1>Player 2 WINS!</h1>
          <h2>CONGRATULATIONS!</h2>
        </div>
        <button id="playAgain" onClick={() => window.location.reload()}>
          Play Again?
        </button>
      </div>
    );
  } else {
    return (
      <div className="winScreen">
        <div className="winMessage">
          <h1>Player 1 WINS!</h1>
          <h2>CONGRATULATIONS!</h2>
        </div>
        <button id="playAgain" onClick={() => window.location.reload()}>
          Play Again?
        </button>
      </div>
    );
  }
};

export default WinScreen;
