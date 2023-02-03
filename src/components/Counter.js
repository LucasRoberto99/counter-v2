const Counter = ({ number, setNumber }) => {
  return (
    <div className="counter">
      <div className="boxcounter">
        <div
          className="moins carre"
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          -
        </div>
        <div className="number carre">{number}</div>
        <div
          className="plus carre"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
};

export default Counter;
