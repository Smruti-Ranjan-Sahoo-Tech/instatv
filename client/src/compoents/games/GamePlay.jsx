import React from "react";

const GamePlay = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <div className="w-full h-full z-50">
      <div className="bg-white w-full h-full rounded-lg overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 btn btn-sm btn-error z-50"
        >
          ✕
        </button>

        {/* Game iframe */}
        <iframe
          src={game.link}
          title={game.name}
          className="w-full h-[45vh]"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default GamePlay;
