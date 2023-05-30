import "./App.css";

const DrawScreen = () => {
  return (
    <div className="drawScreen">
      <div className="winMessage">
        <h1>DRAW GAME!</h1>
        <h2>NOBODY WINS!</h2>
      </div>
      <button id="playAgain" onClick={() => window.location.reload()}>
        Play Again?
      </button>
    </div>
  );
};

export default DrawScreen;
