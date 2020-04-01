import React, { useContext } from 'react';
import styled from 'styled-components';

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext';

import Credits from './Credits';

import colors from '../utils/colors';

const HelpStyled = styled.button`
	text-align: left;
	color: black;
	background-color: whitesmoke;
	cursor: pointer;
	padding: 0.2rem;
	border: none;
	:hover {
		background-color: ${colors.highlight};
	}
`;

const HeaderContainer = styled.div`
	position: fixed;
	top: 0px;
	left: 20px;
	display: grid;
	grid-gap: 0.2rem;
	grid-template-rows: auto auto;
	padding: 1rem;
	justify-items: start;

	:hover {
		opacity: 1;
	}
`;

const Logotext = styled.h2`
	align-self: flex-end;
	margin: 0;
	font-size: 18px;
`;

const Logolink = styled.a`
	display: flex;
	width: 100px;
	text-decoration-line: none;
	padding-bottom: 2rem;
`;

const Header = () => {
	const { addFloatingSpace } = useContext(FloatingSpaceContext);

	return (
		<HeaderContainer>
			<Logolink href='/'>
				<Logotext>noncon.interspace.chat</Logotext>
			</Logolink>
			<HelpStyled onClick={() => addFloatingSpace('help')}>Help</HelpStyled>
			<Credits />
		</HeaderContainer>
	);
};

export default Header;
