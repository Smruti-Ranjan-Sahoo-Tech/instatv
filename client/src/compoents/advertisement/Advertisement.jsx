import React from "react";
import advatiseImg from "../../assets/advatiseImg.png";
const Advertisement = ({
  type = "image", // "image" | "video"
  mediaUrl,
  title = "Sponsored",
  description = "This content is sponsored",
  ctaText = "Learn More",
  ctaLink = "#"
}) => {
    // const mediaUrl=advatiseImg
  return (
    <div className="w-full max-w-5xl mx-auto my-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg border border-white/10">

        {/* Media */}
        <div className="relative">
          {type === "image" ? (
            <img
              src={mediaUrl}
              alt="Advertisement"
              className="w-full h-56 md:h-72 object-cover"
            />
          ) : (
            <video
              src={mediaUrl}
              controls
              autoPlay
              muted
              loop
              className="w-full h-56 md:h-72 object-cover"
            />
          )}

          {/* Sponsored Badge */}
          <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
            Sponsored
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-white text-lg font-semibold">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>

          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-medium transition"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
