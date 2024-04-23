import Hls from "hls.js";
import React, { useEffect, useRef, useState } from "react";
import P2pEngineHls from "swarmcloud-hls";
import classes from "./hlcPlayer.module.css";
const HlcPlayer = ({ url, notRounded }) => {
  const videoRef = useRef(null);
  const videoIConRef = useRef(null);
  const [palying, setPlaying] = useState(false);
  // Add a click event listener to the play button
  const playVideo = function () {
    // Toggle the video state
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  // Add a play event listener to the video
  const handlePlaying = function () {
    setPlaying(!palying);
  };

  // Add a pause event listener to the video
  const handlePausing = function () {
    setPlaying(!palying);
  };

  useEffect(() => {
    console.log(url);
    const p2pConfig = {
      // Other p2pConfig options if applicable
    };
    if (Hls.isSupported() && url) {
      const hls = new Hls({
        maxBufferSize: 0, // Highly recommended setting in live mode
        maxBufferLength: 10, // Highly recommended setting in live mode
        liveSyncDurationCount: 10, // Highly recommended setting in live mode
      });
      p2pConfig.hlsjsInstance = hls;
      new P2pEngineHls(p2pConfig);
      hls.loadSource(url);
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = url;
    }
    setPlaying(false);
  }, [url]);

  return (
    <div className={classes["video-container"]}>
      <video
        // poster="/wallpaper/main.jpg"
        controlsList="noplaybackrate"
        className={
          notRounded
            ? classes["video-play"]
            : palying
            ? classes["video-play"]
            : classes["video-pause"]
        }
        ref={videoRef}
        width={"100%"}
        height={"100%"}
        controls={true}
        autoPlay={false}
        onPlay={handlePlaying}
        onPause={handlePausing}
      ></video>
      {!palying && (
        <div
          onClick={() => {
            console.log("clicked");
            playVideo();
          }}
          ref={videoIConRef}
          className={classes["play-icon"]}
        ></div>
      )}
    </div>
  );
};

export default HlcPlayer;
