import React from "react";
import ReactHLS from "react-hls";
import styled from "@emotion/styled";

const LivepeerContainer = styled.div`
  display: inherit;
  max-width: 95%;
  max-height: auto;
  margin: 0 auto;
`;

function LivepeerInstance() {
  return (
    <LivepeerContainer>
      <iframe
        width="100%"
        height="100%"
        src="http://media.livepeer.org/embed?aspectRatio=16%3A9&maxWidth=100%25&url=http%3A%2F%2F167.172.108.130%3A8935%2Fstream%2Fethturin.m3u8"
        allowfullscreen
      ></iframe>
    </LivepeerContainer>
  );
}

export default LivepeerInstance;
