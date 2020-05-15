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
    color: #FC05F4;
}`

function RaffleInstance() {
  return (
    <Container>
      <p>Follow one of the links below to Mintbase and buy a tokens to enter the raffles:</p>
      <ParagraphStyled>
        <LinkStyled
          href="https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/OjZ2GaixwXmjOwM6Tgsw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shift Crypto Wallet Raffle NFT
        </LinkStyled>{' '}
        <p>
          This Mintbase NFT represents a raffle ticket offering the chance to win 1 of 6 Shift
          Crypto Wallets.
        </p>
        <LinkStyled
          href="https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/SknAvIIUGxlvoU0iJ7XG"
          target="_blank"
          rel="noopener noreferrer"
        >
          Status Keycard raffle NFT
        </LinkStyled>{' '}
        <p>
          This Mintbase NFT represents a raffle ticket offering the chance to win 1 of 10 Status
          Keycards.
        </p>
        <LinkStyled href="https://noncon.org/donate" target="_blank" rel="noopener noreferrer">
          See the full terms for the raffle on noncon.org
        </LinkStyled>
      </ParagraphStyled>
    </Container>
  )
}

export default RaffleInstance
