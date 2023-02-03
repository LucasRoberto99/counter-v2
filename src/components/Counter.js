const Counter = ({ counter, index, tab, setTab }) => {
  return (
    <div className="counter">
      <div className="boxcounter">
        <div className="moins carre">
          <div
            className={counter < 1 ? "nodisplay" : ""}
            onClick={() => {
              const newTab = [...tab];
              newTab[index] = newTab[index] - 1;
              setTab(newTab);
            }}
          >
            -
          </div>
        </div>
        <div className="number carre">{counter}</div>
        <div className="plus carre">
          <div
            className={counter > 9 ? "nodisplay" : ""}
            onClick={() => {
              const newTab = [...tab];
              newTab[index] = newTab[index] + 1;
              setTab(newTab);
            }}
          >
            +
          </div>
        </div>
      </div>

      <button
        className="reset"
        onClick={() => {
          const newTab = [...tab];
          newTab[index] = 0;
          setTab(newTab);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
