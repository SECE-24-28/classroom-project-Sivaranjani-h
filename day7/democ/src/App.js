import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [username] = useState("Sivvv");
  return (
    <>
      <div>
        <Counter username={username} />
      </div>
    </>
  );
}

export default App;