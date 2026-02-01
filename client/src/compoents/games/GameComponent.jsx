import React, { useState } from "react";
import GameList from "./GameList";
import GamePlay from ".//GamePlay";

const GameComponent = () => {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-hidden">
        <h3 className="text-center lg:text-left font-bold">Watch & Play 👇</h3>
      {/* Single-line horizontal game list */}
      <div className="flex-shrink-0">
        <GameList onSelectGame={setActiveGame} />
      </div>

      {/* Game iframe */}
      <div className="flex-1 overflow-hidden min-h-0">
        <GamePlay game={activeGame} onClose={() => setActiveGame(null)} />
      </div>
    </div>
  );
};

export default GameComponent;
