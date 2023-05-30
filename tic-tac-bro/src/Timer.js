import "./App.css";

const Timer = (props) => {
  const { time } = props;
  return (
    <div className="gameTimer">
      <h3>{time}</h3>
    </div>
  );
};

export default Timer;
