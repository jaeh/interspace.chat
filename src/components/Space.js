import React, { Fragment, useContext } from "react";
import styled from "@emotion/styled";
import { BrowserView, MobileView } from "react-device-detect";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";

import Ethturin from "./Ethturin";
import EthturinMobile from "./EthturinMobile";

const Header = styled.span`
  position: absolute;
`;

const Headline = styled.h6`
  color: black;
  font-weight: 500;
  font-size: 1.3rem;
  padding: 1rem;

  a {
    font-weight: 100;
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.background};
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    background-color: whitesmoke;
  }
`;

const SpaceSelector = styled.div`
  .space-container {
    height: 100vh;
    display: grid;
  }
`;

const SpaceInfo = styled.div`
  position: fixed;
  top: 1rem;
  right: 2rem;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: 500;
  div {
    color: ${(props) => props.theme.body};
  }
`;

const Descripton = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 1;
  margin: 0px;
  font-size: 0.8rem;
  padding-bottom: 0.4rem;
  p {
    padding: 0.5rem;
    margin: 0px;
  }

  a {
    padding: 0px;
  }
  @media (max-width: 600px) {
    text-align: block;
    position: relative;
    max-width: 250px;
    margin: 0 auto;
    padding: 2rem;
  }
`;

const CurrentSpace = styled.span`
  color: ${(props) => props.theme.highlight};
`;

const MobileContainer = styled.div`
  justify-content: center;
`;

const StrongStyled = styled.strong`
  font-weight: 700;
`;

const MapContainer = styled("div")`
  display: grid;
`;

const Space = () => {
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext);

  const space = currentFloatingSpaces;

  let displayedJoinedSpaces;
  if (space.length > 0) {
    if (space.length > 2) {
      let nameCount = space.length;
      displayedJoinedSpaces =
        space.slice(0, nameCount - 2).join(", ") +
        ", " +
        space.slice(nameCount - 2, nameCount).join(" & ");
    } else {
      displayedJoinedSpaces = space.join(" & ");
    }
  }

  return (
    <SpaceSelector>
      <BrowserView viewClassName="space-container">
        <Header>
          <SpaceInfo>
            {displayedJoinedSpaces ? (
              <Fragment>
                You're in <CurrentSpace>{displayedJoinedSpaces}</CurrentSpace>!
              </Fragment>
            ) : (
              <Fragment>
                <div>Click on a portal</div>
              </Fragment>
            )}
          </SpaceInfo>
        </Header>

        <Ethturin />
      </BrowserView>
      <MobileView>
        <MobileContainer>
          <Descripton>
            <p>This website is optimized for desktop. </p>
            <StrongStyled>Sorry for the inconvenience.</StrongStyled>
            <p>
              To join the video-chat you might need the Jitsi Mobile App for
              your device
            </p>
            <p>ETH Turin livestream at:</p>
            <a href="https://www.youtube.com/channel/UCsF67FGXtv4lplQyQSPizbQ">
              Paralelle Polis Vienna Youtube channel
            </a>
          </Descripton>
          <Headline>
            Welcome to{" "}
            <a
              href="https://ethturin.interspace.chat"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              ETH Turin 2020
            </a>
          </Headline>
          <EthturinMobile />
        </MobileContainer>
      </MobileView>
    </SpaceSelector>
  );
};

export default Space;
