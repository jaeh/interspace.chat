import React from "react";
import styled from "@emotion/styled";
import { BrowserView } from "react-device-detect";

import Space from "./components/Space";
import FloatingRoomWindow from "./components/FloatingRoomWindow";
import RootContextProvider from "./contexts/RootContext";
import SpaceContext from "./contexts/SpaceContext";

import Header from "./components/Header";

const Wrapper = styled("div")`
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.background};
  max-width: 100vw;
  min-height: 100vh;

  a {
    color: ${(props) => props.theme.highlight};
  }
`;

function App() {
  return (
    <Wrapper className="App">
      <RootContextProvider>
        <SpaceContext>
          <BrowserView>
            <Header />
          </BrowserView>
          <Space />
        </SpaceContext>

        <FloatingRoomWindow />
      </RootContextProvider>
    </Wrapper>
  );
}

export default App;
