import React, { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import Hls from "hls.js";
import "plyr/dist/plyr.css";
import { useChannelStore } from "../store/useChannelStore";
import { useLocation } from "react-router-dom";
import GameComponent from "../compoents/games/GameComponent";

const Home = () => {
  const [source, setSource] = useState("");
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const hlsRef = useRef(null);

  const { channels } = useChannelStore();
  const location = useLocation();

  /* 🔹 SET SOURCE WHEN URL OR CHANNELS CHANGE */
  useEffect(() => {
    const currentLocation = location.pathname.split("/")[2];
    const currentChannelData = channels.find(
      (v) => v.name.toLowerCase().split(" ").join("-") === currentLocation
    );

    setSource(currentChannelData?.ip || "");
  }, [channels, location.pathname]);

  /* 🔹 INIT PLAYER WHEN SOURCE CHANGES */
  useEffect(() => {
    if (!source || !videoRef.current) return;

    const video = videoRef.current;

    // Cleanup previous instance
    playerRef.current?.destroy();
    hlsRef.current?.destroy();

    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true,
        enableWorker: true,
      });

      hlsRef.current = hls;
      hls.loadSource(source);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const qualities = hls.levels.map((l) => l.height);

        playerRef.current = new Plyr(video, {
          controls: [
            "play-large",
            "play",
            "progress",
            "current-time",
            "mute",
            "volume",
            "settings",
            "pip",
            "fullscreen",
          ],
          settings: ["quality", "speed"],

          quality: {
            default: qualities[0],
            options: qualities,
            forced: true,
            onChange: (q) => {
              hls.levels.forEach((l, i) => {
                if (l.height === q) hls.currentLevel = i;
              });
            },
          },

          speed: {
            selected: 1,
            options: [0.5, 0.75, 1, 1.25, 1.5, 2],
          },
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
      playerRef.current = new Plyr(video);
    }

    return () => {
      playerRef.current?.destroy();
      hlsRef.current?.destroy();
    };
  }, [source]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 min-h-dvh w-full">
      <div className="w-full p-4">
        <video
          ref={videoRef}
          className="plyr w-full h-full rounded-xl shadow-xl"
          crossOrigin="anonymous"
        />
      </div>

      {/* 🎮 Games Section */}
      <div className="w-full lg:w-1/2 p-4 flex flex-col  lg:min-h-dvh">
        <GameComponent />
      </div>
    </div>
  );
};

export default Home;
