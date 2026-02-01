import React from "react";
import { useChannelStore } from "../../store/useChannelStore";
import { useNavigate } from "react-router-dom";

const Category = ({ cat }) => {
  const { channels } = useChannelStore();
  const filteredChannels = channels.filter((v) => v.category === cat);
  const navigate = useNavigate();

  const clickBtn = (v) => {
    const videoId = v.name.toLowerCase().split(" ").join("-");
    navigate(`/stream/${videoId}`);
  };

  return (
    <div className="my-6">
      <h2 className="capitalize font-bold text-xl mb-3">{cat}</h2>

      <div className="flex gap-4 overflow-x-auto px-2 py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {filteredChannels.map((v, i) => (
          <div
            key={i}
            onClick={() => clickBtn(v)}
            className="
              w-28 h-28 
              bg-gradient-to-br from-red-400 to-red-600
              rounded-xl 
              flex-shrink-0
              flex flex-col items-center justify-center 
              text-center 
              font-semibold text-white
              cursor-pointer
              shadow-lg
              transform transition duration-300 hover:scale-105 
            "
          >
            <span className="truncate px-2 w-full">{v.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
