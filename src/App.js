import "./styles.css";

import { useState } from "react";
import ToolTip from "./ToolTip";

function App() {
  const [position, setPosition] = useState("top");

  return (
    <div className="App">
      <h1 className="heading">ToolTip</h1>
      <div className="span">
        <span>Select position to display ToolTip</span>
      </div>
      <div className="buttons">
        <button className="top" onClick={() => setPosition("top")}>
          Top
        </button>
        <button className="right" onClick={() => setPosition("right")}>
          Right
        </button>
        <button className="bottom" onClick={() => setPosition("bottom")}>
          Bottom
        </button>
        <button className="left" onClick={() => setPosition("left")}>
          Left
        </button>
      </div>
      <br />
      <ToolTip position={position} />
    </div>
  );
}

export default App;
