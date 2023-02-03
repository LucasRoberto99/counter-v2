import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

function App() {
  const [number, setNumber] = useState(0);
  const [tab, setTab] = useState([
    <Counter number={number} setNumber={setNumber} />,
  ]);
  return (
    <div className="App">
      <Header />
      <div
        className="addcounter"
        onClick={() => {
          if (tab.length < 3) {
            const newTab = [...tab];
            newTab.push(<Counter number={number} setNumber={setNumber} />);
            setTab(newTab);
          }
        }}
      >
        <button>Add counter</button>
      </div>

      <div className="allcounters">{tab}</div>
    </div>
  );
}

export default App;
