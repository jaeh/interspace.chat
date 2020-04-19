import React, { Fragment, useContext } from "react";
import styled from "@emotion/styled";
import { BrowserView, MobileView } from "react-device-detect";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";

import Ethturin from "./Ethturin";
import SvgImagemap from "./Imagemap";
import Imagemap from "../img/imagemap.svg";

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

const SpaceSelector = styled.nav`
  padding-bottom: 1rem;
  width: 100%;
  font-weight: 500;

  @media (max-width: 600px) {
    padding: 0px;
    min-height: 10vh;
  }
`;

const SpaceInfo = styled.div`
  text-align: right;
  padding-top: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: 500;
  z-index: 100;
  div {
    color: ${(props) => props.theme.body};
  }
`;

const Descripton = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  background-color: black;
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
    position: relative;
    background-color: whitesmoke;
    max-width: 80vw;
    margin: 0 auto;
  }
`;

const CurrentSpace = styled.span`
  color: ${(props) => props.theme.highlight};
`;

const MobileContainer = styled.div`
  background: whitesmoke;
  justify-content: center;
`;

const StrongStyled = styled.strong`
  font-weight: 700;
`;

const MapContainer = styled("div")`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: 0;
`;

const Space = () => {
  const { currentFloatingSpaces, addFloatingSpace } = useContext(
    FloatingSpaceContext
  );

  const space = currentFloatingSpaces;

  let displayedJoinedSpaces;
  if (currentFloatingSpaces.length > 0) {
    if (currentFloatingSpaces.length > 2) {
      let nameCount = currentFloatingSpaces.length;
      displayedJoinedSpaces =
        currentFloatingSpaces.slice(0, nameCount - 2).join(", ") +
        ", " +
        currentFloatingSpaces.slice(nameCount - 2, nameCount).join(" & ");
    } else {
      displayedJoinedSpaces = currentFloatingSpaces.join(" & ");
    }
  }

  const openInNewTab = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  const featureNotHereYet = () => {
    alert("This feature is currently not available");
  };

  const poap = () => {
    if (space.indexOf("claim poap token") > -1) {
      window.alert(
        "To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem."
      );
    } else {
      window.alert(
        "To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem."
      );
      addFloatingSpace("claim poap token");
    }
  };

  return (
    <SpaceSelector>
      <BrowserView>
        <span>
          <SpaceInfo>
            {displayedJoinedSpaces ? (
              <Fragment>
                You're in the{" "}
                <CurrentSpace>{displayedJoinedSpaces}</CurrentSpace>!
              </Fragment>
            ) : (
              <Fragment>
                <div>Click on a portal</div>
              </Fragment>
            )}
          </SpaceInfo>
        </span>
        <MapContainer>
          <Ethturin />
        </MapContainer>
        {/** 
				<div>
					<div className="m-grid-container">
						<svg
							className="frame"
							// xmlns:svg='http://www.w3.org/2000/svg'
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid meet"
							viewBox="1 1 36 40"
							id="svg">
							<g id="shapes">
								<path
									className="path-hex "
									d="M 19,5 L 33,13 L 33,29 L 19,37 L 5,29 L 5,13 L 19,5 z "
									id="octagon"
								/>
								<path
									className="path-hex "
									d="M 19,5 L 5,29 L 33,29 L 19,5 z "
									id="triange-up"
								/>
								<path
									className="path-hex "
									d="M 5,13 L 19,37 L 33,13 L 5,13 z "
									id="triange-down"
								/>
								<path
									className="path-hex inner"
									d="M 19,13 L 12,17 L 12,25 L 19,29 L 26,25 L 26,17 L 19,13 z "
									id="octagon-inner"
								/>
								<path
									className="path-hex "
									d="M 12,25 L 19,5 L 26,25 L 12,25 z "
									id="path2894"
								/>
								<path
									className="path-hex "
									d="M 19,37 L 12,17 L 26,17 L 19,37 z "
									id="path2896"
								/>
								<path className="path-hex " d="M 5,13 L 33,29" id="line-6-3" />
								<path className="path-hex " d="M 5,29 L 33,13" id="line-6-2" />
								<path className="path-hex " d="M 19,5 L 19,37" id="line=-1-3" />
								<path
									className="path-hex "
									d="M 5,29 L 19,13 L 26,25 L 5,29 z "
									id="path2904"
								/>
								<path
									className="path-hex "
									d="M 33,29 L 19,13 L 12,25 L 33,29 z "
									id="path2906"
								/>
								<path
									className="path-hex "
									d="M 33,13 L 12,17 L 19,29 L 33,13 z "
									id="path2908"
								/>
								<path
									className="path-hex "
									d="M 5,13 L 19,29 L 26,17 L 5,13 z "
									id="path2910"
								/>
							</g>
						</svg>
						<div
							id="c0"
							className="circle row-1 c-center c-1 click-zone"
							onClick={() => addFloatingSpace("calendar")}></div>
						<div
							id="c1"
							className="circle row-2 c-right click-zone"
							onClick={() => addFloatingSpace("mentor-ring")}></div>
						<div
							id="c2"
							className="circle row-6 c-right click-zone"
							onClick={() =>
								openInNewTab(
									"https://www.cryptovoxels.com/play?coords=E@330E,127N"
								)
							}></div>
						<div
							id="c3"
							className="circle row-7 c-center click-zone"
							onClick={() => addFloatingSpace("loft.radio")}></div>
						<div
							id="c4"
							className="circle row-6 c-left click-zone"
							onClick={() => poap()}></div>
						<div
							id="c5"
							className="circle row-2 c-left click-zone"
							onClick={() => featureNotHereYet()}></div>
            <div
              id="c6"
              className="circle row-2 c-center click-zone"
              onClick={() => addFloatingSpace("stop-covid-19")}
            ></div>

            <div
              id="c7"
              className="circle row-3 c-center-right click-zone"
              onClick={() => addFloatingSpace("raffle")}
            ></div>

            <div
              id="c8"
              className="circle row-5 c-center-right click-zone"
              onClick={() => addFloatingSpace("new room")}
            ></div>
            <div
              id="c9"
              className="circle row-6 c-center click-zone"
              onClick={() => addFloatingSpace("donate")}
            ></div>
            <div
              id="c10"
              className="circle row-5 c-center-left click-zone"
              onClick={() => addFloatingSpace("discord chat")}
            ></div>
            <div
              id="c11"
              className="circle row-3 c-center-left click-zone"
              onClick={() => addFloatingSpace("livestream")}
            ></div>

            <div
              id="c12"
              className="circle row-4 c-center click-zone"
              onClick={() => addFloatingSpace("about")}
            ></div>
          </div>
        </div>
            */}
      </BrowserView>
      <MobileView>
        <MobileContainer>
          <Headline>
            Welcome to{" "}
            <a
              href="https://noncon.interspace.chat"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              EthTurin 2020
            </a>
          </Headline>
          <Descripton>
            <p>This website supports desktop only. </p>
            <StrongStyled>Sorry for the inconvenience.</StrongStyled>
            <p>
              You can watch our livestream and maybe hack your way into it, but
              there is no official support.
            </p>
            <p>NONCON2020 livestream at:</p>
            <a href="https://www.youtube.com/channel/UCsF67FGXtv4lplQyQSPizbQ">
              Paralelle Polis Vienna Youtube channel
            </a>

            {/**<a href="https://portal.interspace.chat">or open a new room</a>**/}
          </Descripton>
          {/**
					<MobileSelectorContainer>
						
            <Room roomName="capsule1" />
            <Room roomName="capsule2" />
            
          </MobileSelectorContainer>
          
          <JitsiInstanceMobile />
          */}
        </MobileContainer>
      </MobileView>
    </SpaceSelector>
  );
};

export default Space;
