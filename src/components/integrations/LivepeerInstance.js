import React from "react";

function LivepeerInstance() {
  return (
    <iframe
      title="livepeer"
      src="/livepeer-player.html"
      style={{
        height: `100%`,
        width: `100%`,
        border: "0px",
      }}
    ></iframe>
  );
}

export default LivepeerInstance;
