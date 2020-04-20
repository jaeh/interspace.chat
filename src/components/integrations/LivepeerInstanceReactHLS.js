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
      <ReactHLS
        url={"https://thisguylivestream.xyz:8935/stream/ethturin.m3u8"}
        width="100%"
        height="100%"
        autoplay="true"
        controls="true"
      />
    </LivepeerContainer>
  );
}

export default LivepeerInstance;
