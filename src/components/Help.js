import React from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'

import colors from '../utils/colors'

const HelpStyled = styled.nav`
  text-align: left;

  .Collapsible__trigger {
    color: black;
    background-color: whitesmoke;
    cursor: pointer;
    padding: 0.2rem;
    :hover {
      background-color: ${colors.highlight};
    }
  }
  .Collapsible__contentOuter {
    max-width: 300px;

    :hover {
      .Collapsible__contentInner {
      }
    }
  }
  .Collapsible__contentInner {
    padding: 0.5rem;

    a {
      color: ${colors.highlight};
    }
  }
`

const StyledListItem = styled.li`
  list-style-type: none;
  padding: 1rem;
`

const Help = () => {
  return (
    <HelpStyled>
      <Collapsible trigger="Help">
        <p>General usage:</p>
        <ul>
          <StyledListItem>
            This website is making it easy for users to meet in the same rooms to have a video call.{' '}
            <br></br>We use it for conferences and gatherings{' '}
          </StyledListItem>
        </ul>
        <p>Textchat:</p>
        <ul>
          <StyledListItem>
            The text chat can be used by registering on our{' '}
            <a href="https://discord.gg/YStg9p9" target="_blank" rel="noopener noreferrer">
              Discord Server
            </a>
          </StyledListItem>
        </ul>
        <hr />
        <p>Privacy:</p>
        <ul>
          <StyledListItem>Private Server</StyledListItem>
          <StyledListItem>Fully end to end encrypted</StyledListItem>
          <StyledListItem>Please don't write sensitive data into the chats.</StyledListItem>
          <StyledListItem>
            Please adhere to a general code of conduct or risk banning.
          </StyledListItem>
        </ul>
      </Collapsible>
    </HelpStyled>
  )
}

export default Help
