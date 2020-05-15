import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: whitesmoke;
`

const ParagraphStyled = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  max-width: 80%;
  line-height: 1.5rem;
  margin: 0 auto;
  padding: 1rem;
  justify-items: space-between;
  grid-gap: 1rem;
`

const LinkStyled = styled.a`
    
}`

function HubInstance() {
  return (
    <Container>
      <p>Direct links to mozilla vr hubs for our conference tracks:</p>
      <ParagraphStyled>
        <LinkStyled
          href="https://hubs.mozilla.com/AwjLDXX/main-room-day-1
                    "
          target="_blank"
          rel="noopener noreferrer"
        >
          main-room
        </LinkStyled>{' '}
        <LinkStyled
          href="https://hubs.mozilla.com/TsLPctF/lobby-day-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          lobby
        </LinkStyled>{' '}
        <p>mentor-ring (opens Saturday, 4th April 2020)</p>
      </ParagraphStyled>
    </Container>
  )
}

export default HubInstance
