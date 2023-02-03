import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

function App() {
  // const [number, setNumber] = useState(0);
  const [tab, setTab] = useState([0]);
  return (
    <div className="App">
      <Header />
      <div
        className="addcounter"
        onClick={() => {
          if (tab.length < 3) {
            const newTab = [...tab];
            newTab.push(0);
            setTab(newTab);
          }
        }}
      >
        <button>Add counter</button>
      </div>

      <div className="allcounters">
        {tab.map((elem, index) => {
          return (
            <Counter
              key={index}
              index={index}
              counter={elem}
              tab={tab}
              setTab={setTab}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
