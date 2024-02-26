import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);

  return (
    <div>
      <div>Count is {state}</div>

      <button
        onClick={() => {
          setState((s) => s + 1);
        }}
      >
        Count +
      </button>
    </div>
  );
}

export default App;
