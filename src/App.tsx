import React, { useState } from "react";
import { Game } from "./models/Game";

function App() {
  const [game, setGame] = useState<Game | null>(null);

  return (
    <div className="App">
      <button onClick={() => setGame(new Game())}>Start Game</button>
      <button onClick={() => game?.bopIt()}>Bop It</button>
      <button onClick={() => game?.twistIt()}>Twist It</button>
      <button onClick={() => game?.pullIt()}>Pull It</button>
    </div>
  );
}

export default App;
