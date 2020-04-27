import React from "react"
import styled from "@emotion/styled"

import Titanembeds from "../../img/titanembeds.png"
import Jitsilogo from "../../img/jitsi.png"

import ShareButton from "../ShareButton"

const Container = styled.div`
	max-height: 100%;
	width: 100%;

	display: flex;
	flex-direction: column;
	place-content: left;
	color: ${(props) => props.theme.body};
	padding: 1rem;
	h3 {
		color: ${(props) => props.theme.body};
		font-size: 1.4rem;
		font-weight: 500;
		padding-left: 1rem;
		padding-bottom: 1rem;
	}
`

const Descriptor = styled.p`
	font-size: 18px;
	font-weight: 300;
	margin: 3rem;
	text-align: center;
	color: ${(props) => props.theme.body};
`

const ParagraphStyled = styled.div`
	display: grid;
	grid-template-rows: repeat(3, auto);
	max-width: 80%;
	line-height: 1.5rem;
	margin: 0 auto;
	padding: 1rem;
	justify-items: space-between;
	grid-gap: 1rem;
	color: ${(props) => props.theme.body};
`

const LinkStyled = styled.a`
	color: ${(props) => props.theme.highlight};
	font-size: 18px;
	font-weight: 600;
`
const StyledListItem = styled.li`
	color: ${(props) => props.theme.body};
	list-style-type: none;
	padding: 1rem;
`

const StyledListLink = styled.li`
	list-style-type: none;
	padding: 1rem;
	display: block;
	grid-template-columns: auto auto;
	align-items: center;
	grid-gap: 0.5rem;
`

const StyledList = styled.ul`
	padding-top: 2rem;
	margin: 1rem;
	background-color: ${(props) => props.theme.background};
`

function CreditsInstance() {
	return (
		<Container>
			<StyledList>
				<h3>Art used:</h3>
				<StyledListItem>
					"Solidity Summit" graphics by{" "}
					<LinkStyled
						href="https://twitter.com/_franzihei"
						target="_blank"
						rel="noopener noreferrer">
						@franzihei
					</LinkStyled>{" "}
				</StyledListItem>
			</StyledList>

			<StyledList>
				<h3>Tech used:</h3>
				<StyledListLink>
					<LinkStyled
						href="https://meet.jit.si"
						target="_blank"
						rel="noopener noreferrer">
						Video Conferencing - JitSi Open Source
					</LinkStyled>
				</StyledListLink>
				<StyledListLink>
					<LinkStyled
						href="https://sidecar.gitter.im/"
						target="_blank"
						rel="noopener noreferrer">
						Chat integration - Gitter Sidecar
					</LinkStyled>
				</StyledListLink>
			</StyledList>

			<StyledList>
				<h3>Support development:</h3>
				<StyledListItem>
					Made with{" "}
					<span role="img" aria-label="heart">
						💝
					</span>{" "}
					by{" "}
					<LinkStyled
						href="https://github.com/interspacechat"
						target="_blank"
						rel="noopener noreferrer">
						interspace.chat
					</LinkStyled>
				</StyledListItem>
				<StyledListItem>
					Donate to our interspace.chat{" "}
					<LinkStyled
						href="https://gitcoin.co/grants/516/interspacechat"
						target="_blank"
						rel="noopener noreferrer">
						Gitcoin Grant
					</LinkStyled>{" "}
				</StyledListItem>
				<StyledListItem>
					or directly to{" "}
					<LinkStyled
						href="https://etherscan.io/address/support.interspacechat.eth"
						target="_blank"
						rel="noopener noreferrer">
						support.interspacechat.eth
					</LinkStyled>{" "}
				</StyledListItem>
				<StyledListItem>
					Spread the word
					<ShareButton />
				</StyledListItem>
			</StyledList>
		</Container>
	)
}

export default CreditsInstance
