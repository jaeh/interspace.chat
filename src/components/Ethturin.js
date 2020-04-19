import React, { useContext } from "react";
import styled from "@emotion/styled";
import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";

const ImagemapContainer = styled.div`
  transform: scale(0.65);
  width: 980px;
  height: 600px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  div {
    &:hover {
      .portal {
        filter: saturate(0%);
      }
      cursor: pointer;
    }
  }
  .title {
    opacity: 0;
    z-index: 1;
  }
  .portal {
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`;

const Cell1 = styled.div`
  display: grid;
  grid-row: 1 / span 2;
  grid-column: 1;
  .title {
    transform: translate(70px, 250px);
  }
  &:hover .title {
    opacity: 1;
  }
  .portal {
    align-self: center;
  }
`;

const Cell2 = styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 2;
  .title {
    transform: translate(53px, 250px);
  }
  .portal {
    align-self: center;
    margin-left: 50px;
  }
  &:hover .title {
    opacity: 1;
  }
`;

const Cell3 = styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 3;
  .title {
    transform: translate(-60px, 250px);
  }
  &:hover .title {
    opacity: 1;
  }
  .portal {
    transform: translate(0px, 100px);
  }
`;

const Cell4 = styled.div`
  display: grid;
  grid-row: 2;
  grid-column: 2;
  .portal {
    place-self: center;
  }
  .title {
    justify-self: center;
    transform: translate(0px, 150px);
  }
  &:hover .title {
    opacity: 1;
  }
`;

const Cell5 = styled.div`
  display: grid;
  grid-row: 3 / span 2;
  grid-column: 1;
  justify-self: center;
  align-self: start;
  .title {
    transform: translateX(119px);
  }
  &:hover .title {
    opacity: 1;
  }
`;

const Cell6 = styled.div`
  display: grid;
  grid-row: 3;
  grid-column: 2;
  justify-self: center;
  .title {
    transform: translateX(30px);
  }
  &:hover .title {
    opacity: 1;
  }
`;

const Cell7 = styled.div`
  display: grid;
  grid-row: 2 / span 3;
  grid-column: 3;
  &:hover .title {
    opacity: 1;
  }
  .title {
    align-self: end;
    transform: translate(-112px, 263px);
  }
  .portal {
    align-self: center;
  }
`;

const Cell8 = styled.div`
  display: grid;
  .title {
    transform: translate(-160px, 120px);
  }
  .portal {
    align-self: end;
  }
  &:hover .title {
    opacity: 1;
  }
`;

const Cell9 = styled.div`
  display: grid;
  &:hover .title {
    opacity: 1;
  }
  .title {
    transform: translateX(-100px);
  }
`;

const Cell10 = styled.div`
  display: grid;
  .title {
    transform: translate(-30px, 120px);
  }
  &:hover .title {
    opacity: 1;
  }
`;

const BottomLinks = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  justify-items: space-between;
  align-items: center;
`;

const TableStyled = styled("table")`
  padding-top: 10vh;
  margin: 0 auto;
  display: block;
  border-spacing: 0px;
  font-size: 0;
  border: 0;
  t {
    padding: 0;
    font-size: 0;
  }

  .justify-content {
    display: grid;
    min-height: 240px;
    align-items: center;
    justify-content: center;
  }
`;

const ClickZone = styled.img``;

const Ethturin = () => {
  const { addFloatingSpace, currentFloatingSpaces } = useContext(
    FloatingSpaceContext
  );
  const space = currentFloatingSpaces;

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
    <ImagemapContainer>
      <Grid>
        <Cell1 onClick={() => addFloatingSpace("stop-covid-19")}>
          <img
            className="title"
            src={require("../img/ethturin-elements/1-stop-covid-19.png")}
          />
          <img
            className="portal"
            src={require("../img/ethturin-elements/stop-covid-19.png")}
          />
        </Cell1>
        <Cell2 onClick={() => addFloatingSpace("sdg-workshop")}>
          <img
            className="title"
            src={require("../img/ethturin-elements/2-sdg-workshop.png")}
          />
          <img
            className="portal"
            src={require("../img/ethturin-elements/sdg-workshop.png")}
          />
        </Cell2>
        <Cell3 onClick={() => addFloatingSpace("mentor-ring")}>
          <img
            className="title"
            src={require("../img/ethturin-elements/3-mentor-ring.png")}
          />
          <img
            className="portal"
            src={require("../img/ethturin-elements/mentor-ring.png")}
          />
        </Cell3>
        <Cell4 onClick={() => addFloatingSpace("VHackathon ETH Turin")}>
          <img
            className="title"
            src={require("../img/ethturin-elements/4-v-hackathon.png")}
          />
          <img
            className="portal"
            src={require("../img/ethturin-elements/v-hackathon.png")}
          />
        </Cell4>
        <Cell5 onClick={() => addFloatingSpace("livestream")}>
          <img
            className="title"
            src={require("../img/ethturin-elements/5-livestream.png")}
          />
          <img
            className="portal"
            src={require("../img/ethturin-elements/livestreams.png")}
          />
        </Cell5>
        <Cell6 onClick={() => addFloatingSpace("calendar")}>
          <img
            className="title"
            src={require("../img/ethturin-elements/6-schedule.png")}
          />
          <img
            className="portal"
            src={require("../img/ethturin-elements/schedule.png")}
          />
        </Cell6>
        <Cell7 onClick={() => addFloatingSpace("new room")}>
          <img
            className="title"
            src={require("../img/ethturin-elements/7-create-room.png")}
          />
          <img
            className="portal"
            src={require("../img/ethturin-elements/new-room.png")}
          />
        </Cell7>
        <BottomLinks>
          <Cell8 onClick={() => poap()}>
            <img
              className="title"
              src={require("../img/ethturin-elements/8-poap.png")}
            />
            <img
              className="portal"
              src={require("../img/ethturin-elements/poap.png")}
            />
          </Cell8>
          <Cell9 onClick={() => addFloatingSpace("discord chat")}>
            <img
              className="title"
              src={require("../img/ethturin-elements/9-discord-chat.png")}
            />
            <img
              className="portal"
              src={require("../img/ethturin-elements/discord-chat.png")}
            />
          </Cell9>
          <Cell10 onClick={() => addFloatingSpace("Gitcoin")}>
            <img
              className="title"
              src={require("../img/ethturin-elements/10-gitcoin.png")}
            />
            <img
              className="portal"
              src={require("../img/ethturin-elements/gitcoin.png")}
            />
          </Cell10>
        </BottomLinks>
      </Grid>
    </ImagemapContainer>
  );
};

export default Ethturin;
