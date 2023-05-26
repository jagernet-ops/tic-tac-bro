import "./App.css";
import ButtonRow from "./ButtonRow";

const getWinner = () => {};

const Board = () => {
  return (
    <div className="gameBoard">
      <ButtonRow value="X" callBackFunction={() => console.log("Applejacks")} />
      <ButtonRow />
      <ButtonRow />
    </div>
  );
};

export { Board };
