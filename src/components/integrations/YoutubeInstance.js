import React, { useState, useEffect, useContext } from "react";
import { FloatingSpaceContext } from "../../contexts/FloatingSpaceContext";

function YoutubeInstance({ roomData }) {
  const [youtubeRoom, setYoutubeRoom] = useState("ddYimGGyxA0");
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext);
  const space = currentFloatingSpaces;

  useEffect(() => {
    if (space.indexOf("stop-covid-19") > -1) {
      setYoutubeRoom("ddYimGGyxA0");
    } else if (space.indexOf("conference-room") > -1) {
      setYoutubeRoom("GpwK_lHYv3Q");
    } else if (space.indexOf("mentor-ring") > -1) {
      setYoutubeRoom("wppHTKiFR_Q");
    } else {
      setYoutubeRoom("ddYimGGyxA0");
    }
    return console.log(youtubeRoom);
  }, [space, youtubeRoom]);
  return (
    <iframe
      title="Youtube Livestream"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${youtubeRoom}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default YoutubeInstance;
