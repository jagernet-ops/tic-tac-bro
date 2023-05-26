import "./App.css";
import { useState, React } from "react";

const ButtonRow = (props) => {
  const { value, callBackFunction } = props;
  const [state, changeState] = useState(null);
  return (
    <div className="buttonRow">
      <button type="button" onClick={callBackFunction}>
        {value}
      </button>
      <button type="button" onClick={callBackFunction}>
        {value}
      </button>
      <button type="button" onClick={callBackFunction}>
        {value}
      </button>
    </div>
  );
};

export default ButtonRow;
