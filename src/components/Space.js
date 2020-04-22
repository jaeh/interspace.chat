import React, { Fragment, useContext, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { BrowserView, MobileView } from "react-device-detect";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";

import SvgImagemap from "./SoliditySummit";
import Ethturin from "./Ethturin";
import EthturinMobile from "./EthturinMobile";

import triangle from "../img/triangle.svg";

const Header = styled.span``;

const ImagemapContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 90vh;
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
  text-align: center;
  bottom: 1rem;
  left: 50%;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: 100;
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
    width: 100%;
    margin: 0 auto;
    padding: 2rem;

    a {
      padding: 0.5rem;
    }
  }
`;

const CurrentSpace = styled.span`
  color: ${(props) => props.theme.highlight};
`;

const MobileContainer = styled.div`
  display: grid;
  text-align: justify;
`;

const StrongStyled = styled.strong`
  font-weight: 700;
`;

const Triangle = styled.img`
  align-self: baseline;
`;

const ShowSection = () => {
  const [isHidden, toggleHidden] = useState(false);
  const onClick = () => {
    isHidden ? toggleHidden(false) : toggleHidden(true);
  };

  const ButtonContainer = styled.div`
    width: 100%;
    padding-right: 1rem;
    display: grid;
    justify-self: center;
    justify-content: end;
  `;
  const CloseButton = styled.button`
    background: unset;
    border: unset;
    color: whitesmoke;
    font-size: 20;
    font-weight: 1000;
    padding: 0.5rem;
    justify-self: end;
  `;
  return (
    <ButtonContainer>
      <CloseButton onClick={onClick}>{isHidden ? "⬇️" : "X"}</CloseButton>
      {isHidden ? null : <Element />}
    </ButtonContainer>
  );
};
const Element = () => (
  <Descripton>
    <p>
      This website is optimized for <StrongStyled>desktop</StrongStyled>.{" "}
    </p>
    <p>To join the video-chat, download the Jitsi Mobile App.</p>
    <p>Solidity Summit livestream at:</p>
    <a href="https://www.youtube.com/channel/UCsF67FGXtv4lplQyQSPizbQ">
      Ethereum.org Youtube channel
    </a>
  </Descripton>
);

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

  useEffect(() => {
    var Sidecar = require("gitter-sidecar");

    var myChat = new Sidecar({
      room: "ethereum/solidity",
      activationElement: false,
      preload: true,
    });
  });

  return (
    <SpaceSelector>
      <BrowserView viewClassName="space-container">
        <ImagemapContainer>
          <SvgImagemap />
        </ImagemapContainer>
        <Header>
          <SpaceInfo>
            {displayedJoinedSpaces ? (
              <Fragment>
                You're in <CurrentSpace>{displayedJoinedSpaces}</CurrentSpace>!
              </Fragment>
            ) : (
              <Fragment>
                <div>
                  Click on a <Triangle src={triangle} height="12px" />
                </div>
              </Fragment>
            )}
          </SpaceInfo>
        </Header>
      </BrowserView>
      <MobileView>
        <MobileContainer>
          <ShowSection />
          <Headline>
            Welcome to{" "}
            <a
              href="https://ethturin.interspace.chat"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Solidity Summit 2020
            </a>
          </Headline>
          <EthturinMobile />
        </MobileContainer>
      </MobileView>
    </SpaceSelector>
  );
};

export default Space;
