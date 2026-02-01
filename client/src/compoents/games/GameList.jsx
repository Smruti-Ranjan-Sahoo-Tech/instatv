import React from "react";
import { useGameStore } from "../../store/useGameStore";

const GameList = ({ onSelectGame }) => {
  const embeddedGames = useGameStore((state) => state.embeddedGames);

  return (
    <div className="flex gap-4 overflow-x-auto py-2 px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {embeddedGames.map((game, index) => (
        <div
          key={index}
          onClick={() => onSelectGame(game)}
          className="
            w-28 
            bg-gradient-to-br from-red-400 to-red-600
            rounded-xl
            flex-shrink-0
            flex flex-col items-center justify-center
            text-center
            font-semibold text-white
            cursor-pointer
            shadow-lg text-sm
            transform transition duration-300 hover:scale-105 truncate p-2
          "
        >
          <img src={game.logo} alt={game.name} className="w-6 h-6 mb-1 " />
          <div className=" px-1 text-sm truncate w-full">{game.name}</div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
