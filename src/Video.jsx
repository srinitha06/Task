import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Video Player</h1>
      <video
        ref={videoRef}
        width="600"
        controls={false}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePlay} style={{ marginRight: "10px" }}>
          Play
        </button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
