import { useState } from "react";
import "./App.css";
import Guess from "./components/Guess";

function App() {
  const [username] = useState("Sivvv");
  return (
    <>
      <div>
        <Guess username={username} />
      </div>
    </>
  );
}

export default App;