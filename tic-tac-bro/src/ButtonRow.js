import "./App.css";
import { useState, React } from "react";

const ButtonRow = ({ callBackFunction, turn }) => {
  const [state, changeState] = useState([]);
  const [disabled, setDisabled] = useState([false, false, false]);
  return (
    <div className="buttonRow">
      <button
        type="button"
        disabled={disabled[0]}
        onClick={(e) => {
          changeState([turn, state[1], state[2]]);
          setDisabled([true, disabled[1], disabled[2]]);
          callBackFunction(parseInt(e.currentTarget.id));
        }}
        id="0"
      >
        {state[0]}
      </button>
      <button
        type="button"
        disabled={disabled[1]}
        onClick={(e) => {
          changeState([state[0], turn, state[2]]);
          setDisabled([disabled[0], true, disabled[2]]);
          callBackFunction(parseInt(e.currentTarget.id));
        }}
        id="1"
      >
        {state[1]}
      </button>
      <button
        type="button"
        disabled={disabled[2]}
        onClick={(e) => {
          changeState([state[0], state[1], turn]);
          setDisabled([disabled[0], disabled[1], true]);
          callBackFunction(parseInt(e.currentTarget.id));
        }}
        id="2"
      >
        {state[2]}
      </button>
    </div>
  );
};

export default ButtonRow;
