import React, { useState, useEffect, useContext } from "react";
import { FloatingSpaceContext } from "../../contexts/FloatingSpaceContext";

function YoutubeInstance({ roomData }) {
  const [youtubeRoom, setYoutubeRoom] = useState("lhjo2FuU4v0");
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext);
  const space = currentFloatingSpaces;

  useEffect(() => {
    if (space.indexOf("main-room") > -1) {
      setYoutubeRoom("lhjo2FuU4v0");
    } else {
      setYoutubeRoom("lhjo2FuU4v0");
    }
    return console.log(youtubeRoom);
  }, [space, youtubeRoom]);
  return (
    <iframe
      title="Youtube Livestream"
      width="100%"
      height="100%"
      src={`https://www.youtube-nocookie.com/embed/${youtubeRoom}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default YoutubeInstance;
